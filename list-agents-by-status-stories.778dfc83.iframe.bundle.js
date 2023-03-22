(self.webpackChunk_holochain_open_dev_peer_status_dev=self.webpackChunk_holochain_open_dev_peer_status_dev||[]).push([[510],{"./stories/list-agents-by-status.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>list_agents_by_status_stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),mocks=__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/mocks.js"),dist_mocks=__webpack_require__("./ui/dist/mocks.js"),dist=__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/index.js"),ui_dist=__webpack_require__("./ui/dist/index.js"),tslib_es6=(__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/elements/profiles-context.js"),__webpack_require__("./ui/dist/elements/peer-status-context.js"),__webpack_require__("./node_modules/tslib/tslib.es6.js")),lit=__webpack_require__("./node_modules/lit/index.js"),stores_dist=__webpack_require__("./node_modules/@holochain-open-dev/stores/dist/index.js"),elements_dist=__webpack_require__("./node_modules/@holochain-open-dev/elements/dist/index.js"),context=__webpack_require__("./node_modules/@lit-labs/context/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),utils_dist=__webpack_require__("./node_modules/@holochain-open-dev/utils/dist/index.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js");__webpack_require__("./node_modules/@holochain-open-dev/profiles/dist/elements/agent-avatar.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/skeleton/skeleton.js");let ProfileListItemSkeleton=class ProfileListItemSkeleton extends lit.oi{render(){return lit.dy`<div class="row" style="align-items: center; width: 150px">
      <sl-skeleton
        effect="sheen"
        style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
      ></sl-skeleton
      ><sl-skeleton
        effect="sheen"
        style="flex: 1; margin: 8px; border-radius: 12px"
      >
      </sl-skeleton>
    </div>`}static get styles(){return[elements_dist.FG,lit.iv`
        :host {
          display: flex;
        }
      `]}};ProfileListItemSkeleton=(0,tslib_es6.gn)([(0,decorators.Mo)("profile-list-item-skeleton")],ProfileListItemSkeleton);__webpack_require__("./node_modules/@holochain-open-dev/elements/dist/elements/display-error.js");var peer_status_store=__webpack_require__("./ui/dist/peer-status-store.js"),dist_context=__webpack_require__("./ui/dist/context.js");__webpack_require__("./ui/dist/elements/avatar-with-status.js");let ListAgentsByStatus=class ListAgentsByStatus extends lit.oi{constructor(){super(...arguments),this._profiles=new stores_dist.oA(this,(()=>this.profilesStore.agentsProfiles(this.agents))),this._onlineAgents=new stores_dist.oA(this,(()=>(0,stores_dist.nK)((0,stores_dist._S)((0,utils_dist.tP)(this.store.agentsStatus,this.agents)),(agentsStatus=>Array.from((0,utils_dist.D9)(agentsStatus,((status,_key)=>status===peer_status_store.q.Online)).keys()))))),this._offlineAgents=new stores_dist.oA(this,(()=>(0,stores_dist.nK)((0,stores_dist._S)((0,utils_dist.tP)(this.store.agentsStatus,this.agents)),(agentsStatus=>Array.from((0,utils_dist.D9)(agentsStatus,((status,_key)=>status===peer_status_store.q.Offline)).keys())))))}renderOnlineAgents(profiles,agentPubKeys){return 0===agentPubKeys.length?lit.dy`<span
        class="placeholder"
        style="text-align: center; padding: 16px;"
        >${(0,lit_localize.WI)("There are no agents online")}</span
      >`:lit.dy`
      <div class="column" style="flex: 1;">
        ${agentPubKeys.map((agentPubKey=>{var _a;return lit.dy` <div
            class="row"
            style="align-items: center; margin-top: 8px; margin-bottom: 8px"
          >
            <agent-avatar
              slot="start"
              .agentPubKey=${agentPubKey}
            ></agent-avatar>
            <span style="margin-left: 8px"
              >${null===(_a=profiles.get(agentPubKey))||void 0===_a?void 0:_a.nickname}</span
            >
          </div>`}))}
      </div>
    `}renderOfflineAgents(profiles,agentPubKeys){return 0===agentPubKeys.length?lit.dy`<span
        class="placeholder"
        style="text-align: center; padding: 16px;"
        >${(0,lit_localize.WI)("There are no agents offline")}</span
      >`:lit.dy`
      <div class="column" style="flex: 1; opacity: 0.5;">
        ${agentPubKeys.map((agentPubKey=>{var _a;return lit.dy` <div
            class="row"
            style="align-items: center; margin-top: 8px; margin-bottom: 8px"
          >
            <agent-avatar
              slot="start"
              .agentPubKey=${agentPubKey}
            ></agent-avatar>
            <span style="margin-left: 8px"
              >${null===(_a=profiles.get(agentPubKey))||void 0===_a?void 0:_a.nickname}</span
            >
          </div>`}))}
      </div>
    `}renderHeading(){return lit.dy`
      <span class="title"
        >${(0,lit_localize.WI)("Online")}${void 0!==this._onlineAgents.value?` - ${this._onlineAgents.value.length}`:""}</span
      >
    `}renderAgents(){switch(this._profiles.value.status){case"pending":return lit.dy`<div class="column">
          ${Array(3).map((()=>lit.dy`<profile-list-item-skeleton></profile-list-item-skeleton>`))}
        </div> `;case"complete":return lit.dy`
          ${this.renderOnlineAgents(this._profiles.value.value,this._onlineAgents.value)}
          <span class="title" style="margin-top: 8px;"
            >${(0,lit_localize.WI)("Offline")}${void 0!==this._offlineAgents.value?` - ${this._offlineAgents.value.length}`:""}</span
          >
          ${this.renderOfflineAgents(this._profiles.value.value,this._offlineAgents.value)}
        `;case"error":return lit.dy`
          <display-error
            .error=${this._profiles.value.error.data.data}
          ></display-error>
        `}}render(){return lit.dy`
      <div class="column" style="flex: 1">
        ${this.renderHeading()} ${this.renderAgents()}
      </div>
    `}};ListAgentsByStatus.styles=[elements_dist.FG,lit.iv`
      :host {
        display: flex;
      }
    `],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Array})],ListAgentsByStatus.prototype,"agents",void 0),(0,tslib_es6.gn)([(0,context.F_)({context:dist_context.F,subscribe:!0}),(0,decorators.Cb)({type:Object})],ListAgentsByStatus.prototype,"store",void 0),(0,tslib_es6.gn)([(0,context.F_)({context:dist.MX,subscribe:!0}),(0,decorators.Cb)({type:Object})],ListAgentsByStatus.prototype,"profilesStore",void 0),ListAgentsByStatus=(0,tslib_es6.gn)([(0,lit_localize.kI)(),(0,decorators.Mo)("list-agents-by-status")],ListAgentsByStatus);const profiles=(0,mocks.O)(),profilesStore=new dist._p(new dist.Y3(new mocks.M(profiles))),list_agents_by_status_stories={title:"Frontend/Elements/list-agents-by-status",tags:["autodocs"],component:"list-agents-by-status",render:args=>lit_html.dy` <profiles-context .store=${profilesStore}>
      <peer-status-context
        .store=${new ui_dist.o4(new ui_dist.qt(new dist_mocks.v))}
      >
        <list-agents-by-status
          .agents=${Array.from(profiles.keys())}
        ></list-agents-by-status>
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
//# sourceMappingURL=list-agents-by-status-stories.778dfc83.iframe.bundle.js.map