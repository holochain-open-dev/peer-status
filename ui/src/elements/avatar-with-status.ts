import { css, html, LitElement } from "lit";
import { AgentPubKey } from "@holochain/client";
import { sharedStyles, hashProperty } from "@holochain-open-dev/elements";
import { customElement, property } from "lit/decorators.js";

import "@holochain-open-dev/profiles/dist/elements/agent-avatar.js";
import "./peer-status.js";

@customElement("avatar-with-status")
export class AvatarWithStatus extends LitElement {
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
}
