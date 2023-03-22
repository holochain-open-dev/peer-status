(self.webpackChunk_holochain_open_dev_peer_status_dev=self.webpackChunk_holochain_open_dev_peer_status_dev||[]).push([[755],{"./stories/avatar-with-status.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_holochain_open_dev_profiles_mocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/mocks.js"),_holochain_open_dev_peer_status_mocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/dist/mocks.js"),_holochain_open_dev_profiles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/index.js"),_holochain_open_dev_peer_status__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/dist/index.js");__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/elements/profiles-context.js"),__webpack_require__("./ui/dist/elements/peer-status-context.js"),__webpack_require__("./ui/dist/elements/avatar-with-status.js");const profiles=(0,_holochain_open_dev_profiles_mocks__WEBPACK_IMPORTED_MODULE_1__.O)(),profilesStore=new _holochain_open_dev_profiles__WEBPACK_IMPORTED_MODULE_3__._p(new _holochain_open_dev_profiles__WEBPACK_IMPORTED_MODULE_3__.Y3(new _holochain_open_dev_profiles_mocks__WEBPACK_IMPORTED_MODULE_1__.M(profiles))),__WEBPACK_DEFAULT_EXPORT__={title:"Frontend/Elements/avatar-with-status",tags:["autodocs"],component:"avatar-with-status",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy` <profiles-context .store=${profilesStore}>
      <peer-status-context
        .store=${new _holochain_open_dev_peer_status__WEBPACK_IMPORTED_MODULE_4__.o4(new _holochain_open_dev_peer_status__WEBPACK_IMPORTED_MODULE_4__.qt(new _holochain_open_dev_peer_status_mocks__WEBPACK_IMPORTED_MODULE_2__.v))}
      >
        <avatar-with-status
          .agentPubKey=${Array.from(profiles.keys())[0]}
        ></avatar-with-status>
      </peer-status-context>
    </profiles-context>`},Demo={};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]},"./ui/dist/config.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>defaultConfig});const defaultConfig={pingIntervalMs:2e3,onlineThresholdMs:5e3,idleThresholdMs:2e4}},"./ui/dist/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>peerStatusStoreContext});const peerStatusStoreContext=(0,__webpack_require__("./node_modules/@lit-labs/context/index.js").kr)("hc_zome_peer_status/store")},"./ui/dist/elements/avatar-with-status.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@holochain-open-dev/elements/dist/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/decorators.js");__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/elements/agent-avatar.js"),__webpack_require__("./ui/dist/elements/peer-status.js");let AvatarWithStatus=class AvatarWithStatus extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{render(){return lit__WEBPACK_IMPORTED_MODULE_0__.dy`<agent-avatar .agentPubKey=${this.agentPubKey}>
      <peer-status .agentPubKey=${this.agentPubKey} slot="badge"></peer-status>
    </agent-avatar>`}};AvatarWithStatus.styles=[_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_1__.FG,lit__WEBPACK_IMPORTED_MODULE_0__.iv`
      :host {
        display: flex;
      }
    `],(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.Cb)((0,_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_1__.uA)("agent-pub-key"))],AvatarWithStatus.prototype,"agentPubKey",void 0),AvatarWithStatus=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.Mo)("avatar-with-status")],AvatarWithStatus)},"./ui/dist/elements/peer-status-context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),_lit_labs_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@lit-labs/context/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/decorators.js"),_context_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/dist/context.js");let PeerStatusContext=class PeerStatusContext extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{render(){return lit__WEBPACK_IMPORTED_MODULE_0__.dy`<slot></slot>`}};PeerStatusContext.styles=lit__WEBPACK_IMPORTED_MODULE_0__.iv`
    :host {
      display: contents;
    }
  `,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_lit_labs_context__WEBPACK_IMPORTED_MODULE_1__.JJ)({context:_context_js__WEBPACK_IMPORTED_MODULE_3__.F}),(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.Cb)({type:Object})],PeerStatusContext.prototype,"store",void 0),PeerStatusContext=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.Mo)("peer-status-context")],PeerStatusContext)},"./ui/dist/elements/peer-status.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_lit_labs_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@lit-labs/context/index.js"),_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@holochain-open-dev/stores/dist/index.js"),lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/index.js"),_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@holochain-open-dev/elements/dist/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),_context_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/dist/context.js");let PeerStatus=class PeerStatus extends lit__WEBPACK_IMPORTED_MODULE_2__.oi{constructor(){super(...arguments),this._status=new _holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_1__.oA(this,(()=>this.store.agentsStatus.get(this.agentPubKey)))}render(){return lit__WEBPACK_IMPORTED_MODULE_2__.dy`<div class="outer">
      <div class=${this._status.value}></div>
    </div>`}};PeerStatus.styles=[_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_3__.FG,lit__WEBPACK_IMPORTED_MODULE_2__.iv`
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
    `],(0,tslib__WEBPACK_IMPORTED_MODULE_6__.gn)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.Cb)((0,_holochain_open_dev_elements__WEBPACK_IMPORTED_MODULE_3__.uA)("agent-pub-key"))],PeerStatus.prototype,"agentPubKey",void 0),(0,tslib__WEBPACK_IMPORTED_MODULE_6__.gn)([(0,_lit_labs_context__WEBPACK_IMPORTED_MODULE_0__.F_)({context:_context_js__WEBPACK_IMPORTED_MODULE_5__.F,subscribe:!0}),(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({type:Object})],PeerStatus.prototype,"store",void 0),PeerStatus=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.gn)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.Mo)("peer-status")],PeerStatus)},"./ui/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qt:()=>PeerStatusClient,o4:()=>peer_status_store.o});__webpack_require__("./ui/dist/context.js");var dist=__webpack_require__("./node_modules/@holochain-open-dev/utils/dist/index.js");class PeerStatusClient extends dist.M${constructor(client,roleName,zomeName="peer_status"){super(client,roleName,zomeName),this.client=client,this.roleName=roleName,this.zomeName=zomeName}async ping(agentPubKeys){return this.callZome("ping",agentPubKeys)}}var peer_status_store=__webpack_require__("./ui/dist/peer-status-store.js");__webpack_require__("./ui/dist/config.js")},"./ui/dist/mocks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>PeerStatusZomeMock});var _holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@holochain-open-dev/utils/dist/index.js");class PeerStatusZomeMock extends _holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_0__.a1{async ping(_agents){}}},"./ui/dist/peer-status-store.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>PeerStatusStore,q:()=>Status});var Status,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@holochain-open-dev/stores/dist/index.js"),_holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@holochain-open-dev/utils/dist/index.js"),_config_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/dist/config.js");!function(Status){Status.Online="online",Status.Idle="idle",Status.Offline="offline"}(Status||(Status={}));class PeerStatusStore{constructor(client,config={}){this.client=client,this.agentsLastSeen=new _holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_1__.c_((agent=>(0,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_0__.PX)(void 0,(set=>{const interval=setInterval((()=>this.client.ping([agent])),this.config.pingIntervalMs),unsubscribe=this.client.onSignal((peerStatusSignal=>{"Pong"===peerStatusSignal.type&&peerStatusSignal.from_agent.toString()===agent.toString()&&set(Date.now())}));return()=>{clearInterval(interval),unsubscribe()}})))),this.agentsStatus=(0,_holochain_open_dev_utils__WEBPACK_IMPORTED_MODULE_1__.wq)(this.agentsLastSeen,(r=>(0,_holochain_open_dev_stores__WEBPACK_IMPORTED_MODULE_0__.nK)(r,(lastSeen=>function lastSeenToStatus(lastSeen,config){if(void 0===lastSeen)return Status.Offline;const now=Date.now();return now-lastSeen<config.onlineThresholdMs?Status.Online:now-lastSeen<config.idleThresholdMs?Status.Idle:Status.Offline}(lastSeen,this.config))))),this.config={..._config_js__WEBPACK_IMPORTED_MODULE_2__.u,...config}}}},"?dba7":()=>{}}]);
//# sourceMappingURL=avatar-with-status-stories.3cdcd81f.iframe.bundle.js.map