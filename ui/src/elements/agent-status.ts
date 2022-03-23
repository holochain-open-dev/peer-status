import { AgentPubKeyB64 } from '@holochain-open-dev/core-types';
import { contextProvided } from '@holochain-open-dev/context';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { statusStoreContext } from '../context';
import { StatusStore, Status } from '../status-store';
import { SlAvatar, SlSkeleton } from '@scoped-elements/shoelace';
import { StoreSubscriber } from 'lit-svelte-stores';
import { sharedStyles } from './utils/shared-styles';

export class AgentStatus extends ScopedElementsMixin(LitElement) {
  /** Public properties */

  /**
   * REQUIRED. The public key identifying the agent whose presence is going to be shown.
   */
  @property({
    attribute: 'agent-pub-key',
    type: String,
  })
  agentPubKey!: AgentPubKeyB64;

  /** Dependencies */

  /**
   * `PresenceStore` that is requested via context.
   * Only set this property if you want to override the store requested via context.
   */
  @contextProvided({ context: statusStoreContext })
  @property({ type: Object })
  store!: StatusStore;

  private _status = new StoreSubscriber(this, () =>
    this.store.subscribeToAgentStatus(this.agentPubKey)
  );

  renderStatusColor() {
    switch (this._status.value) {
      case Status.Online:
        return 'green';
      case Status.Idle:
        return 'yellow';
      default:
        return 'grey';
    }
  }

  render() {
    return html`<div
      class="status"
      style="background-color: ${this.renderStatusColor()}"
    ></div>`;
  }

  static styles = [
    sharedStyles,
    css`
      .status {
        height: 8px;
        width: 8px;
        border-radius: 50%;
        border-color: black;
        border-width: 1px;
      }
    `,
  ];
}
