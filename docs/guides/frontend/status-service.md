# Frontend Docs >> StatusService ||30

The `StatusService` is a state-less class that provides typings wrapping the zome calls that can be made to `hc_zome_peer_status`.

```js
import { StatusService } from '@holochain-open-dev/status';

const service = new StatusService(cellClient);

service.getMyStatus().then(myStatus => console.log(myStatus));
```

Learn more about the services [here](https://holochain-open-dev.github.io/reusable-modules/frontend/using/#services). 