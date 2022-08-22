# @holochain-open-dev/peer_status

Frontend module for the Holochain zomes `hc_zome_peer_status_integrity` and `hc_zome_peer_status_coordinator` .

This package includes types, a service and a store, and a collection of Custom Elements to build Holochain applications that automatically connect and interact with the `hc_zome_peer_status_coordinator` zome.

By using [Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements), this package exports frontend blocks reusable in any framework, that make it really easy for consuming web applications to include functionality to create and update status, or search for an agent in the DHT.

Read about how to include both the zome and this frontend module in your application here:

- https://holochain-open-dev.github.io/peer-status