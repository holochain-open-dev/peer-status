use std::collections::BTreeMap;

use hdk::prelude::holo_hash::AgentPubKeyB64;
use hdk::prelude::*;

/// Status entry definition.
///
/// The status must include at a minimum the nickname of the agent
/// in order to be able to search for agents by nickname.
#[hdk_entry(id = "status", visibility = "public")]
#[derive(Clone)]
#[serde(rename_all = "camelCase")]
pub struct Status {
    pub nickname: String,
    pub fields: BTreeMap<String, String>,
}

/// Used as a return type of all functions.
#[derive(Clone, Serialize, Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub struct AgentStatus {
    pub agent_pub_key: AgentPubKeyB64,
    pub status: Status,
}

/// Input for the `search_statuss` zome function.
/// 
/// The nickname prefix must be of at least 3 characters.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SearchStatusInput {
    pub nickname_prefix: String,
}
