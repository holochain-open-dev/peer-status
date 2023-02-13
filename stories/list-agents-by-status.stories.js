import { html } from "lit-html";
import "@holochain-open-dev/profiles/profiles-context";
import {
  ProfilesZomeMock,
  demoProfiles,
} from "@holochain-open-dev/profiles/mocks";
import { PeerStatusMock } from "@holochain-open-dev/peer-status/mocks";
import { ProfilesStore, ProfilesClient } from "@holochain-open-dev/profiles";
import {
  PeerStatusStore,
  PeerStatusClient,
} from "@holochain-open-dev/peer-status";
import "@holochain-open-dev/peer-status/peer-status-context";
import "@holochain-open-dev/peer-status/list-agents-by-status";

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
          new PeerStatusClient(new PeerStatusMock())
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
