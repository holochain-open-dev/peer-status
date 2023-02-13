(self.webpackChunk_holochain_open_dev_peer_status_dev=self.webpackChunk_holochain_open_dev_peer_status_dev||[]).push([[510],{"./stories/list-agents-by-status.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>list_agents_by_status_stories});__webpack_require__("./node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js");var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),mocks=(__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/definitions/profiles-context.js"),__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/mocks.js")),dist_mocks=__webpack_require__("./ui/dist/mocks.js"),dist=__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/index.js"),ui_dist=__webpack_require__("./ui/dist/index.js"),tslib_es6=(__webpack_require__("./ui/dist/definitions/peer-status-context.js"),__webpack_require__("./node_modules/tslib/tslib.es6.js")),decorators=__webpack_require__("./node_modules/lit/decorators.js"),list_agents_by_status=__webpack_require__("./ui/dist/elements/list-agents-by-status.js");let LABS=class LABS extends list_agents_by_status.Q{};LABS=(0,tslib_es6.gn)([(0,decorators.Mo)("list-agents-by-status")],LABS);const profiles=(0,mocks.O)(),profilesStore=new dist._p(new dist.Y3(new mocks.M(profiles))),list_agents_by_status_stories={title:"Frontend/Elements/list-agents-by-status",tags:["autodocs"],component:"list-agents-by-status",render:args=>lit_html.dy` <profiles-context .store=${profilesStore}>
      <peer-status-context
        .store=${new ui_dist.o4(new ui_dist.qt(new dist_mocks.v))}
      >
        <list-agents-by-status
          .agents=${Array.from(profiles.keys())}
        ></list-agents-by-status>
      </peer-status-context>
    </profiles-context>`},Demo={};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]},"./ui/dist/config.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>defaultConfig});const defaultConfig={pingIntervalMs:2e3,onlineThresholdMs:5e3,idleThresholdMs:2e4}},"./ui/dist/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>peerStatusStoreContext});const peerStatusStoreContext=(0,__webpack_require__("./node_modules/@lit-labs/context/index.js").kr)("hc_zome_peer_status/store")},"./ui/dist/definitions/peer-status-context.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/decorators.js"),_elements_peer_status_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/dist/elements/peer-status-context.js");let PSC=class PSC extends _elements_peer_status_context__WEBPACK_IMPORTED_MODULE_1__.q{};PSC=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.Mo)("peer-status-context")],PSC)},"./ui/dist/elements/avatar-with-status.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>AvatarWithStatus});var tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_open_wc_scoped_elements__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@open-wc/scoped-elements/index.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/index.js"),_holochain_open_dev_profiles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/index.js"),_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@holochain-open-dev/elements/dist/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),_peer_status__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/dist/elements/peer-status.js");class AvatarWithStatus extends((0,_open_wc_scoped_elements__WEBPACK_IMPORTED_MODULE_0__.f)(lit__WEBPACK_IMPORTED_MODULE_1__.oi)){render(){return lit__WEBPACK_IMPORTED_MODULE_1__.dy`<agent-avatar .agentPubKey=${this.agentPubKey}>
      <peer-status .agentPubKey=${this.agentPubKey} slot="badge"></peer-status>
    </agent-avatar>`}static get scopedElements(){return{"agent-avatar":_holochain_open_dev_profiles__WEBPACK_IMPORTED_MODULE_2__.IN,"peer-status":_peer_status__WEBPACK_IMPORTED_MODULE_5__.A}}}AvatarWithStatus.styles=[_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_3__.FG,lit__WEBPACK_IMPORTED_MODULE_1__.iv`
      :host {
        display: flex;
      }
    `],(0,tslib__WEBPACK_IMPORTED_MODULE_6__.gn)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.Cb)((0,_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_3__.uA)("agent-pub-key"))],AvatarWithStatus.prototype,"agentPubKey",void 0)},"./ui/dist/elements/list-agents-by-status.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ListAgentsByStatus});var tslib__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_open_wc_scoped_elements__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@open-wc/scoped-elements/index.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/index.js"),_holochain_open_dev_profiles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/index.js"),_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/node_modules/@holochain-open-dev/stores/dist/index.js"),_scoped_elements_material_web__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/node_modules/@scoped-elements/material-web/dist/index.js"),_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@holochain-open-dev/elements/dist/index.js"),_lit_labs_context__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@lit-labs/context/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),_holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ui/node_modules/@holochain-open-dev/utils/dist/index.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),_peer_status_store__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./ui/dist/peer-status-store.js"),_context__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./ui/dist/context.js"),_avatar_with_status__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./ui/dist/elements/avatar-with-status.js");let ListAgentsByStatus=class ListAgentsByStatus extends((0,_open_wc_scoped_elements__WEBPACK_IMPORTED_MODULE_0__.f)(lit__WEBPACK_IMPORTED_MODULE_1__.oi)){constructor(){super(...arguments),this._profiles=new _holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_3__.oA(this,(()=>this.profilesStore.agentsProfiles(this.agents))),this._onlineAgents=new _holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_3__.oA(this,(()=>(0,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_3__.nK)((0,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_3__._S)((0,_holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_8__.tP)(this.store.agentsStatus,this.agents)),(agentsStatus=>Array.from((0,_holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_8__.D9)(agentsStatus,((status,_key)=>status===_peer_status_store__WEBPACK_IMPORTED_MODULE_10__.q.Online)).keys()))))),this._offlineAgents=new _holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_3__.oA(this,(()=>(0,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_3__.nK)((0,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_3__._S)((0,_holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_8__.tP)(this.store.agentsStatus,this.agents)),(agentsStatus=>Array.from((0,_holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_8__.D9)(agentsStatus,((status,_key)=>status===_peer_status_store__WEBPACK_IMPORTED_MODULE_10__.q.Offline)).keys())))))}renderOnlineAgents(profiles,agentPubKeys){return 0===agentPubKeys.length?lit__WEBPACK_IMPORTED_MODULE_1__.dy`<span
        class="placeholder"
        style="text-align: center; padding: 16px;"
        >${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_9__.WI)("There are no agents online")}</span
      >`:lit__WEBPACK_IMPORTED_MODULE_1__.dy`
      <md-list style="flex: 1;">
        ${agentPubKeys.map((agentPubKey=>{var _a;return lit__WEBPACK_IMPORTED_MODULE_1__.dy` <md-list-item
            disabled
            .headline=${null===(_a=profiles.get(agentPubKey))||void 0===_a?void 0:_a.nickname}
          >
            <avatar-with-status
              slot="start"
              .agentPubKey=${agentPubKey}
            ></avatar-with-status>
          </md-list-item>`}))}
      </md-list>
    `}renderOfflineAgents(profiles,agentPubKeys){return 0===agentPubKeys.length?lit__WEBPACK_IMPORTED_MODULE_1__.dy`<span
        class="placeholder"
        style="text-align: center; padding: 16px;"
        >${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_9__.WI)("There are no agents offline")}</span
      >`:lit__WEBPACK_IMPORTED_MODULE_1__.dy`
      <md-list style="flex: 1; opacity: 0.5;">
        ${agentPubKeys.map((agentPubKey=>{var _a;return lit__WEBPACK_IMPORTED_MODULE_1__.dy` <md-list-item
            disabled
            .headline=${null===(_a=profiles.get(agentPubKey))||void 0===_a?void 0:_a.nickname}
          >
            <agent-avatar
              slot="start"
              .agentPubKey=${agentPubKey}
            ></agent-avatar>
          </md-list-item>`}))}
      </md-list>
    `}renderHeading(){return lit__WEBPACK_IMPORTED_MODULE_1__.dy`
      <span class="title"
        >${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_9__.WI)("Online")}${void 0!==this._onlineAgents.value?` - ${this._onlineAgents.value.length}`:""}</span
      >
    `}renderAgents(){switch(this._profiles.value.status){case"pending":return lit__WEBPACK_IMPORTED_MODULE_1__.dy`<div class="column">
          ${Array(3).map((()=>lit__WEBPACK_IMPORTED_MODULE_1__.dy`<profile-list-item-skeleton></profile-list-item-skeleton>`))}
        </div> `;case"complete":return lit__WEBPACK_IMPORTED_MODULE_1__.dy`
          ${this.renderOnlineAgents(this._profiles.value.value,this._onlineAgents.value)}
          ${this.renderOfflineAgents(this._profiles.value.value,this._offlineAgents.value)}
        `;case"error":return lit__WEBPACK_IMPORTED_MODULE_1__.dy`
          <display-error
            .error=${this._profiles.value.error.data.data}
          ></display-error>
        `}}render(){return lit__WEBPACK_IMPORTED_MODULE_1__.dy`
      <div class="column" style="flex: 1">
        ${this.renderHeading()} ${this.renderAgents()}
      </div>
    `}static get scopedElements(){return{"avatar-with-status":_avatar_with_status__WEBPACK_IMPORTED_MODULE_12__.U,"agent-avatar":_holochain_open_dev_profiles__WEBPACK_IMPORTED_MODULE_2__.IN,"display-error":_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_5__.kC,"profile-list-item-skeleton":_holochain_open_dev_profiles__WEBPACK_IMPORTED_MODULE_2__.qU,"md-list":_scoped_elements_material_web__WEBPACK_IMPORTED_MODULE_4__.jG,"md-list-item":_scoped_elements_material_web__WEBPACK_IMPORTED_MODULE_4__.g8}}};ListAgentsByStatus.styles=[_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_5__.FG,lit__WEBPACK_IMPORTED_MODULE_1__.iv`
      :host {
        display: flex;
      }
    `],(0,tslib__WEBPACK_IMPORTED_MODULE_13__.gn)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.Cb)({type:Array})],ListAgentsByStatus.prototype,"agents",void 0),(0,tslib__WEBPACK_IMPORTED_MODULE_13__.gn)([(0,_lit_labs_context__WEBPACK_IMPORTED_MODULE_6__.F_)({context:_context__WEBPACK_IMPORTED_MODULE_11__.F,subscribe:!0}),(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.Cb)({type:Object})],ListAgentsByStatus.prototype,"store",void 0),(0,tslib__WEBPACK_IMPORTED_MODULE_13__.gn)([(0,_lit_labs_context__WEBPACK_IMPORTED_MODULE_6__.F_)({context:_holochain_open_dev_profiles__WEBPACK_IMPORTED_MODULE_2__.MX,subscribe:!0}),(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.Cb)({type:Object})],ListAgentsByStatus.prototype,"profilesStore",void 0),ListAgentsByStatus=(0,tslib__WEBPACK_IMPORTED_MODULE_13__.gn)([(0,_lit_localize__WEBPACK_IMPORTED_MODULE_9__.kI)()],ListAgentsByStatus)},"./ui/dist/elements/peer-status-context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>PeerStatusContext});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),_lit_labs_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@lit-labs/context/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/decorators.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/dist/context.js");class PeerStatusContext extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{render(){return lit__WEBPACK_IMPORTED_MODULE_0__.dy`<slot></slot>`}}PeerStatusContext.styles=lit__WEBPACK_IMPORTED_MODULE_0__.iv`
    :host {
      display: contents;
    }
  `,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_lit_labs_context__WEBPACK_IMPORTED_MODULE_1__.JJ)({context:_context__WEBPACK_IMPORTED_MODULE_3__.F}),(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.Cb)({type:Object})],PeerStatusContext.prototype,"store",void 0)},"./ui/dist/elements/peer-status.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>PeerStatus});var tslib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_lit_labs_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@lit-labs/context/index.js"),_open_wc_scoped_elements__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@open-wc/scoped-elements/index.js"),lit_svelte_stores__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-svelte-stores/dist/index.js"),lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/index.js"),_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@holochain-open-dev/elements/dist/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/decorators.js"),_context__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/dist/context.js");class PeerStatus extends((0,_open_wc_scoped_elements__WEBPACK_IMPORTED_MODULE_1__.f)(lit__WEBPACK_IMPORTED_MODULE_3__.oi)){constructor(){super(...arguments),this._status=new lit_svelte_stores__WEBPACK_IMPORTED_MODULE_2__.o(this,(()=>this.store.agentsStatus.get(this.agentPubKey)))}render(){return lit__WEBPACK_IMPORTED_MODULE_3__.dy`<div class="outer">
      <div class=${this._status.value}></div>
    </div>`}}PeerStatus.styles=[_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_4__.FG,lit__WEBPACK_IMPORTED_MODULE_3__.iv`
      .outer {
        position: relative;
        height: 15px;
        width: 15px;
        background-color: #666666;
      }

      .outer,
      .online,
      .idle,
      .offline {
        border-radius: 50%;
      }

      .online,
      .idle {
        top: 2px;
        left: 2px;
        position: absolute;
        height: 11px;
        width: 11px;
      }

      .online {
        background-color: #00ef00;
      }

      .idle {
        background-color: #df8600;
      }

      .offline {
        top: 2px;
        left: 2px;
        position: relative;
        height: 5px;
        width: 5px;
        background-color: #666666;
        border: 3px solid #a7a7a7;
      }
    `],(0,tslib__WEBPACK_IMPORTED_MODULE_7__.gn)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.Cb)((0,_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_4__.uA)("agent-pub-key"))],PeerStatus.prototype,"agentPubKey",void 0),(0,tslib__WEBPACK_IMPORTED_MODULE_7__.gn)([(0,_lit_labs_context__WEBPACK_IMPORTED_MODULE_0__.F_)({context:_context__WEBPACK_IMPORTED_MODULE_6__.F,subscribe:!0}),(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.Cb)({type:Object})],PeerStatus.prototype,"store",void 0)},"./ui/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qt:()=>PeerStatusClient,o4:()=>peer_status_store.o});__webpack_require__("./ui/dist/context.js"),__webpack_require__("./ui/dist/elements/peer-status.js"),__webpack_require__("./ui/dist/elements/peer-status-context.js"),__webpack_require__("./ui/dist/elements/avatar-with-status.js"),__webpack_require__("./ui/dist/elements/list-agents-by-status.js");var dist=__webpack_require__("./ui/node_modules/@holochain-open-dev/utils/dist/index.js");class PeerStatusClient{constructor(client,roleName,zomeName="peer_status"){this.client=client,this.roleName=roleName,this.zomeName=zomeName}on(eventName,listener){return this.client.on(eventName,(async signal=>{await(0,dist.dj)(this.client,this.roleName,signal)&&this.zomeName===signal.zome_name&&listener(signal.payload)}))}async ping(agentPubKeys){return this.callZome("ping",agentPubKeys)}callZome(fn_name,payload){return this.client.callZome({role_name:this.roleName,fn_name,zome_name:this.zomeName,payload})}}var peer_status_store=__webpack_require__("./ui/dist/peer-status-store.js");__webpack_require__("./ui/dist/config.js")},"./ui/dist/mocks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>PeerStatusZomeMock});var _holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/node_modules/@holochain-open-dev/utils/dist/index.js");class PeerStatusZomeMock extends _holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_0__.a1{async ping(_agents){}}},"./ui/dist/peer-status-store.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>PeerStatusStore,q:()=>Status});var Status,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/node_modules/@holochain-open-dev/stores/dist/index.js"),_holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/node_modules/@holochain-open-dev/utils/dist/index.js"),lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash-es/merge.js"),_config__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/dist/config.js");!function(Status){Status.Online="online",Status.Idle="idle",Status.Offline="offline"}(Status||(Status={}));class PeerStatusStore{constructor(client,config={}){this.client=client,this.agentsLastSeen=new _holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_1__.c_((agent=>(0,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_0__.PX)(void 0,(set=>{const interval=setInterval((()=>this.client.ping([agent])),this.config.pingIntervalMs),unsubscribe=this.client.on("signal",(peerStatusSignal=>{"Pong"===peerStatusSignal.type&&peerStatusSignal.from_agent.toString()===agent.toString()&&set(Date.now())}));return()=>{clearInterval(interval),unsubscribe()}})))),this.agentsStatus=(0,_holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_1__.wq)(this.agentsLastSeen,(r=>(0,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_0__.nK)(r,(lastSeen=>function lastSeenToStatus(lastSeen,config){if(void 0===lastSeen)return Status.Offline;const now=Date.now();return now-lastSeen<config.onlineThresholdMs?Status.Online:now-lastSeen<config.idleThresholdMs?Status.Idle:Status.Offline}(lastSeen,this.config))))),this.config=(0,lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__.Z)(_config__WEBPACK_IMPORTED_MODULE_2__.u,config)}}},"?dba7":()=>{}}]);
//# sourceMappingURL=list-agents-by-status-stories.362b09d3.iframe.bundle.js.map