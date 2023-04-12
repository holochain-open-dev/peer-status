import { html } from "lit-html";
import {
  ProfilesZomeMock,
  demoProfiles,
} from "@holochain-open-dev/profiles/dist/mocks.js";
import { PeerStatusZomeMock } from "@holochain-open-dev/peer-status/dist/mocks.js";
import { ProfilesStore, ProfilesClient } from "@holochain-open-dev/profiles";
import {
  PeerStatusStore,
  PeerStatusClient,
} from "@holochain-open-dev/peer-status";
import "@holochain-open-dev/profiles/dist/elements/profiles-context.js";
import "@holochain-open-dev/peer-status/dist/elements/peer-status-context.js";
import "@holochain-open-dev/peer-status/dist/elements/list-agents-by-status.js";

const profiles = demoProfiles();
const profilesStore = new ProfilesStore(
  new ProfilesClient(new ProfilesZomeMock(profiles))
);

// More on how to set up stories at: https://storybook.js.org/docs/7.0/web-components/writing-stories/introduction
export default {
  title: "Frontend/Elements/list-agents-by-status",
  tags: ["autodocs"],
  component: "list-agents-by-status",
  render: (args) =>
    html` <profiles-context .store=${profilesStore}>
      <peer-status-context
        .store=${new PeerStatusStore(
          new PeerStatusClient(new PeerStatusZomeMock())
        )}
      >
        <list-agents-by-status
          .agents=${Array.from(profiles.keys())}
        ></list-agents-by-status>
      </peer-status-context>
    </profiles-context>`,
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/web-components/writing-stories/args
export const Demo = {};
