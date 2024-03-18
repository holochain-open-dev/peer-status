//! ## hc_zome_peer_status_coordinator
//!
//! Coordinator zome to display the online/offline status of agents in a holochain app.
//!
//! Read about how to include both this zome and its frontend module in your application [here](https://holochain-open-dev.github.io/peer-status).
use hdk::prelude::*;

#[derive(Serialize, Deserialize, SerializedBytes, Debug, Clone)]
#[serde(tag = "type")]
pub enum SignalPayload {
    Ping { from_agent: AgentPubKey },
    Pong { from_agent: AgentPubKey },
}

// AliceUI->|ping([bob_pubkey])|AliceNode
// AliceNode->|send_remote_signal(bob_key, ping)|BobNode
// BobNode->|send_remote_signal(alice_key, pong|)AliceNode
// AliceNode->|emit_signal(bob_pong)|AliceUI

#[hdk_extern]
pub fn init(_: ()) -> ExternResult<InitCallbackResult> {
    let mut functions = BTreeSet::new();
    functions.insert((zome_info()?.name, FunctionName("recv_remote_signal".into())));
    let cap_grant_entry: CapGrantEntry = CapGrantEntry::new(
        String::from("ping pong signals"), // A string by which to later query for saved grants.
        ().into(), // Unrestricted access means any external agent can call the extern
        GrantedFunctions::Listed(functions),
    );

    create_cap_grant(cap_grant_entry)?;
    Ok(InitCallbackResult::Pass)
}

/// Send a remote signal to the given users to check whether they are online
/// After this ping is sent, a pong is expected as soon as the agents receive the signal
#[hdk_extern]
pub fn ping(agents_pub_keys: Vec<AgentPubKey>) -> ExternResult<()> {
    let signal_payload = SignalPayload::Ping {
        from_agent: agent_info()?.agent_initial_pubkey,
    };

    let encoded_signal = ExternIO::encode(signal_payload)
        .map_err(|err| wasm_error!(WasmErrorInner::Guest(err.into())))?;

    send_remote_signal(encoded_signal, agents_pub_keys)
}

#[hdk_extern]
pub fn recv_remote_signal(signal: ExternIO) -> ExternResult<()> {
    let signal_payload: SignalPayload = signal
        .decode()
        .map_err(|err| wasm_error!(WasmErrorInner::Guest(err.into())))?;

    match signal_payload.clone() {
        SignalPayload::Ping { from_agent } => pong(from_agent),
        SignalPayload::Pong { .. } => emit_signal(signal_payload),
    }
}

fn pong(from_agent: AgentPubKey) -> ExternResult<()> {
    let signal_payload = SignalPayload::Pong {
        from_agent: agent_info()?.agent_initial_pubkey,
    };

    let encoded_signal = ExternIO::encode(signal_payload)
        .map_err(|err| wasm_error!(WasmErrorInner::Guest(err.into())))?;

    send_remote_signal(encoded_signal, vec![from_agent])
}
