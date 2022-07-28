import { html, fixture, expect } from '@open-wc/testing';
import { setupApolloClientMock } from './mocks';
import { HodCreateStatusForm } from '../dist';
import { setupApolloClientElement } from '@holochain-open-dev/common';

describe('HodCreateStatusForm', () => {
  it('create status has a placeholder', async () => {
    const client = await setupApolloClientMock();

    customElements.define(
      'hod-create-status-form',
      setupApolloClientElement(HodCreateStatusForm, client)
    );

    const el = await fixture(
      html` <hod-create-status-form></hod-create-status-form> `
    );

    expect(el.shadowRoot.innerHTML).to.include('CREATE PROFILE');
  });
});
