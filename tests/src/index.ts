import { Config, InstallAgentsHapps, Orchestrator } from "@holochain/tryorama";
import Base64 from "js-base64";
import path from "path";

const conductorConfig = Config.gen();

// Construct proper paths for your DNAs
const statusDna = path.join(__dirname, "../../workdir/dna/status-test.dna");

// create an InstallAgentsHapps array with your DNAs to tell tryorama what
// to install into the conductor.
const installation: InstallAgentsHapps = [
  // agent 0
  [
    // happ 0
    [statusDna],
  ],
  [
    // happ 0
    [statusDna],
  ],
];

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(null), ms));

function serializeHash(hash) {
  return `u${Base64.fromUint8Array(hash, true)}`;
}

const zomeName = 'peer_status';

let orchestrator = new Orchestrator();

orchestrator.registerScenario("create a status and get it", async (s, t) => {
  const [alice, bob] = await s.players([conductorConfig]);

  // install your happs into the coductors and destructuring the returned happ data using the same
  // array structure as you created in your installation array.
  const [[alice_statuss], [bob_statuss]] = await alice.installAgentsHapps(
    installation
  );


  let alicePubkeyB64 = serializeHash(alice_statuss.agent);
  let bobPubKeyB64 = serializeHash(bob_statuss.agent);

  let myStatus = await alice_statuss.cells[0].call(
    zomeName,
    "get_my_status",
    null
  );
  t.notOk(myStatus);

  let statusHash = await alice_statuss.cells[0].call(
    zomeName,
    "create_status",
    {
      nickname: "alice",
      fields: {
        avatar: "aliceavatar",
      },
    }
  );
  t.ok(statusHash);

  await sleep(500);

  // set nickname as alice to make sure bob's is not getting deleted
  // with alice's update
  statusHash = await bob_statuss.cells[0].call(zomeName, "create_status", {
    nickname: "alice_bob",
    fields: {
      avatar: "bobboavatar",
    },
  });
  t.ok(statusHash);

  await sleep(5000);

  statusHash = await alice_statuss.cells[0].call(
    zomeName,
    "update_status",
    {
      nickname: "alice2",
      fields: {
        avatar: "aliceavatar2",
        update: "somenewfield",
      },
    }
  );
  t.ok(statusHash);

  myStatus = await alice_statuss.cells[0].call(
    zomeName,
    "get_my_status",
    null
  );
  t.ok(myStatus.agentPubKey);
  t.equal(myStatus.status.nickname, "alice2");

  let allstatus = await bob_statuss.cells[0].call(
    zomeName,
    "get_all_statuss",
    null
  );
  t.equal(allstatus.length, 2);

  let multipleStatus = await bob_statuss.cells[0].call(
    zomeName,
    "get_agents_status",
    [alicePubkeyB64, bobPubKeyB64]
  );
  t.equal(multipleStatus.length, 2);

  let status = await bob_statuss.cells[0].call(
    zomeName,
    "search_statuss",
    {
      nicknamePrefix: "sdf",
    }
  );
  t.equal(status.length, 0);

  status = await bob_statuss.cells[0].call(zomeName, "search_statuss", {
    nicknamePrefix: "alic",
  });
  t.equal(status.length, 2);
  t.ok(status[0].agentPubKey);
  t.equal(status[1].status.nickname, "alice2");

  status = await bob_statuss.cells[0].call(zomeName, "search_statuss", {
    nicknamePrefix: "ali",
  });
  t.equal(status.length, 2);
  t.ok(status[0].agentPubKey);
  t.equal(status[1].status.nickname, "alice2");
  t.equal(status[1].status.fields.avatar, "aliceavatar2");

  status = await bob_statuss.cells[0].call(zomeName, "search_statuss", {
    nicknamePrefix: "alice",
  });
  t.equal(status.length, 2);
  t.ok(status[1].agentPubKey);
  t.equal(status[1].status.nickname, "alice2");

  status = await bob_statuss.cells[0].call(zomeName, "search_statuss", {
    nicknamePrefix: "alice_",
  });
  t.equal(status.length, 2);
  t.ok(status[0].agentPubKey);
  t.equal(status[0].status.nickname, "alice_bob");
  t.equal(status[0].status.fields.avatar, "bobboavatar");
});

orchestrator.run();
orchestrator = new Orchestrator();

orchestrator.registerScenario(
  "create a status with upper case and search it with lower case",
  async (s, t) => {
    const [alice, bob] = await s.players([conductorConfig]);

    // install your happs into the coductors and destructuring the returned happ data using the same
    // array structure as you created in your installation array.
    const [[alice_statuss], [bob_statuss]] = await alice.installAgentsHapps(
      installation
    );

    let statusHash = await alice_statuss.cells[0].call(
      zomeName,
      "create_status",
      {
        nickname: "ALIce",
        fields: {
          avatar: "aliceavatar",
        },
      }
    );
    t.ok(statusHash);
    await sleep(5000);

    let status = await bob_statuss.cells[0].call(
      zomeName,
      "search_statuss",
      {
        nicknamePrefix: "ali",
      }
    );
    t.equal(status.length, 1);
    t.ok(status[0].agentPubKey);
    t.equal(status[0].status.nickname, "ALIce");

    status = await bob_statuss.cells[0].call(zomeName, "search_statuss", {
      nicknamePrefix: "aLI",
    });
    t.equal(status.length, 1);
    t.ok(status[0].agentPubKey);
    t.equal(status[0].status.nickname, "ALIce");

    status = await bob_statuss.cells[0].call(zomeName, "search_statuss", {
      nicknamePrefix: "AlI",
    });
    t.equal(status.length, 1);
    t.ok(status[0].agentPubKey);
    t.equal(status[0].status.nickname, "ALIce");

    status = await bob_statuss.cells[0].call(zomeName, "search_statuss", {
      nicknamePrefix: "ALI",
    });
    t.equal(status.length, 1);
    t.ok(status[0].agentPubKey);
    t.equal(status[0].status.nickname, "ALIce");
  }
);

orchestrator.run();
