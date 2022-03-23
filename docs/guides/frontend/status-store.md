# Frontend Docs >> StatusStore ||20

The `StatusStore` is a JS class that contains `svelte` stores, to which you can subscribe to get reactive updates in your elements.

```js
import { StatusStore } from "@holochain-open-dev/status";

const config = {
  avatarMode: "identicon",
  additionalFields: ["Location", "Bio"], // Custom app level status fields
};
const store = new StatusStore(cellClient, config);
```

> Learn how to setup the `CellClient` object [here](https://www.npmjs.com/package/@holochain-open-dev/cell-client).

The config for the `StatusStore` has these options:

```ts
export interface StatusConfig {
  zomeName: string; // default: 'status'
  avatarMode: "identicon" | "avatar"; // default: 'avatar'
  additionalFields: string[]; // default: []
  minNicknameLength: number; // default: 3
}
```

Learn more about the stores and how to integrate them in different frameworks [here](https://holochain-open-dev.github.io/reusable-modules/frontend/using/#stores).
