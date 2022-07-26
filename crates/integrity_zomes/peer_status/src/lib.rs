//! ## hc_zome_presences
//!
//! Presence zome for any Holochain app.
//!
//! If you need to manage presence you can directly include this zome in your DNA.
//!
//! Read about how to include both this zome and its frontend module in your application [here](https://holochain-open-dev.github.io/presence).

use hdi::prelude::*;

#[derive(Serialize, Deserialize, SerializedBytes, Debug, Clone)]
#[serde(tag = "type")]
pub enum SignalPayload {
    Ping { from_agent: AgentPubKey },
    Pong { from_agent: AgentPubKey },
}


#[hdk_extern]
pub fn validate(_op: Op) -> ExternResult<ValidateCallbackResult> {
  Ok(ValidateCallbackResult::Valid)
}