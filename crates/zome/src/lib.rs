//! ## hc_zome_presences
//!
//! Presence zome for any Holochain app.
//!
//! If you need to manage presence you can directly include this zome in your DNA.
//!
//! Read about how to include both this zome and its frontend module in your application [here](https://holochain-open-dev.github.io/presence).

use hdk::prelude::holo_hash::AgentPubKeyB64;
use hdk::prelude::*;

#[derive(Serialize, Deserialize, SerializedBytes, Debug, Clone)]
#[serde(tag = "type")]
pub enum SignalPayload {
    Ping { from_agent: AgentPubKeyB64 },
    Pong { from_agent: AgentPubKeyB64 },
}

// AliceUI->|ping([bob_pubkey])|AliceNode
// AliceNode->|remote_signal(bob_key, ping)|BobNode
// BobNode->|remote_signal(alice_key, pong|)AliceNode
// AliceNode->|emit_signal(bob_pong)|AliceUI

#[hdk_extern]
pub fn init(_: ()) -> ExternResult<InitCallbackResult> {
    let mut functions = BTreeSet::new();
    functions.insert((zome_info()?.name, FunctionName("recv_remote_signal".into())));
    let cap_grant_entry: CapGrantEntry = CapGrantEntry::new(
        String::from("ping pong signals"), // A string by which to later query for saved grants.
        ().into(), // Unrestricted access means any external agent can call the extern
        functions,
    );

    create_cap_grant(cap_grant_entry)?;
    Ok(InitCallbackResult::Pass)
}

#[hdk_extern]
pub fn ping(agents_pub_keys: Vec<AgentPubKeyB64>) -> ExternResult<()> {
    let signal_payload = SignalPayload::Ping {
        from_agent: agent_info()?.agent_initial_pubkey.into(),
    };

    let agents = agents_pub_keys
        .into_iter()
        .map(|pub_key| AgentPubKey::from(pub_key))
        .collect();

    remote_signal(ExternIO::encode(signal_payload)?, agents)
}

#[hdk_extern]
pub fn recv_remote_signal(signal: ExternIO) -> ExternResult<()> {
    let signal_payload: SignalPayload = signal.decode()?;

    match signal_payload.clone() {
        SignalPayload::Ping { from_agent } => pong(from_agent),
        SignalPayload::Pong { .. } => emit_signal(signal_payload),
    }
}

pub fn pong(from_agent: AgentPubKeyB64) -> ExternResult<()> {
    let signal_payload = SignalPayload::Pong {
        from_agent: agent_info()?.agent_initial_pubkey.into(),
    };

    remote_signal(ExternIO::encode(signal_payload)?, vec![from_agent.into()])
}
