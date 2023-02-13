import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { css, html, LitElement } from "lit";
import { AgentAvatar } from "@holochain-open-dev/profiles";
import { AgentPubKey } from "@holochain/client";
import { sharedStyles, hashProperty } from "@holochain-open-dev/elements";

import { property } from "lit/decorators.js";
import { PeerStatus } from "./peer-status";

export class AvatarWithStatus extends ScopedElementsMixin(LitElement) {
  /** Public properties */

  /**
   * REQUIRED. The public key identifying the agent whose presence is going to be shown.
   */
  @property(hashProperty("agent-pub-key"))
  agentPubKey!: AgentPubKey;

  render() {
    return html`<agent-avatar .agentPubKey=${this.agentPubKey}>
      <peer-status .agentPubKey=${this.agentPubKey} slot="badge"></peer-status>
    </agent-avatar>`;
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: flex;
      }
    `,
  ];

  static get scopedElements() {
    return {
      "agent-avatar": AgentAvatar,
      "peer-status": PeerStatus,
    };
  }
}
