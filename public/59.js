webpackJsonp([59],{"0K+m":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".tag[data-v-1e059139]{padding:.2rem;height:1.3rem;font-size:1rem;margin:.1rem .2rem .1rem 0}.tag .delete[data-v-1e059139]{margin-left:.2rem}.tag[data-v-1e059139]:last{margin-right:auto}",""])},"2MNw":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"tag is-link"},[e._v("\n    "+e._s(e.label)+"\n    "),a("a",{staticClass:"delete is-small",on:{click:function(t){e.$emit("remove")}}})])},staticRenderFns:[]}},"4cXU":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,'.icon.angle[data-v-cd322aca]{-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.icon.angle[aria-hidden=true][data-v-cd322aca]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.dropdown[data-v-cd322aca]{position:relative;width:100%}.dropdown .dropdown-trigger[data-v-cd322aca]{width:100%}.dropdown .dropdown-trigger.is-danger .button[data-v-cd322aca]{border-color:#e50800;border:#e50800}.dropdown .dropdown-trigger .button[data-v-cd322aca]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;min-height:2.25em;height:auto;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;padding:calc(.375em - 1px) calc(.625em - 1px)}.dropdown .dropdown-trigger .button .select-value[data-v-cd322aca]{max-width:calc(100% - 2.5em);white-space:normal;text-align:left}.dropdown .dropdown-trigger .button .select-value .select-input[data-v-cd322aca]{border:0;height:1.5em;box-shadow:unset;-webkit-box-shadow:unset;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:unset}.dropdown .dropdown-trigger .button .select-value .angle[data-v-cd322aca]{position:absolute;top:.25rem;right:.6rem}.dropdown .dropdown-trigger .button .select-value .delete[data-v-cd322aca]{position:absolute;right:1.7rem;top:.55rem}.dropdown .dropdown-trigger .button .select-value .is-loading[data-v-cd322aca]{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:"";display:block;height:1em;position:relative;width:1em;position:absolute!important;right:1.7rem;top:.55em;z-index:4}.dropdown .control[data-v-cd322aca],.dropdown .dropdown-menu[data-v-cd322aca]{width:100%}.dropdown .dropdown-menu .dropdown-content[data-v-cd322aca]{max-height:13rem;overflow-y:auto}.dropdown .dropdown-menu .dropdown-content a.dropdown-item[data-v-cd322aca]{text-overflow:ellipsis;overflow-x:hidden;padding-right:2rem}.dropdown .dropdown-menu .dropdown-content a.dropdown-item .label.tag[data-v-cd322aca]{position:absolute;padding:.3rem;height:1.3rem;z-index:1;right:1rem}.dropdown .dropdown-menu .dropdown-content a.dropdown-item .icon.selected[data-v-cd322aca]{position:absolute;z-index:1;right:1rem}',""])},E2Ov:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("NYxO");throw new Error('Cannot find module "@fortawesome/fontawesome"')},Ib5x:function(e,t,a){var s=a("4cXU");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("4275a424",s,!0,{})},NahY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Tag",props:{label:{type:String,default:null}}}},O6On:function(e,t,a){var s=a("VU/8")(a("E2Ov"),a("kM9V"),!1,function(e){a("tD5R")},null,null);e.exports=s.exports},RVgh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("O4Lo"),n=(a.n(s),a("T+v0"));a.n(n);throw new Error('Cannot find module "@fortawesome/fontawesome"')},S7e7:function(e,t,a){var s=a("VU/8")(a("NahY"),a("2MNw"),!1,function(e){a("haYV")},"data-v-1e059139",null);e.exports=s.exports},YjYz:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideDropdown,expression:"hideDropdown"}],class:["dropdown",{"is-active":e.dropdown}]},[a("div",{class:["dropdown-trigger",{"is-danger":e.hasError}]},[a("div",{staticClass:"button",attrs:{tabindex:"0",disabled:e.disabled},on:{click:e.showDropdown,focus:e.showDropdown}},[a("div",{staticClass:"select-value"},[e.multiple?a("span",e._l(e.selected,function(t,s){return a("tag",{key:s,attrs:{label:t[e.label]},on:{remove:function(a){e.remove(t[e.trackBy])}}})})):e._e(),e._v(" "),e.dropdown||e.multiple&&e.hasSelection?e._e():a("span",[e._v("\n                    "+e._s(e.hasSelection?e.selected:e.optionList.length>0?e.i18n(e.placeholder):e.i18n(e.labels.noOptions))+"\n                ")]),e._v(" "),e.dropdown?a("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"input select-input",attrs:{type:"text",placeholder:e.i18n(e.placeholder)},domProps:{value:e.query},on:{input:[function(t){t.target.composing||(e.query=t.target.value)},function(t){e.getData()}],keydown:[function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.hideDropdown(t):null},function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.keyDown(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.keyUp(t):null},function(t){return"button"in t||!e._k(t.keyCode,"tab",9,t.key,"Tab")?e.hideDropdown(t):null},function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault(),e.hit()}]}}):e._e(),e._v(" "),e.loading?a("span",{staticClass:"is-loading"}):e._e(),e._v(" "),e.disableClear||e.loading||!e.hasSelection||e.disabled?e._e():a("a",{staticClass:"delete is-small",on:{mousedown:function(t){return t.preventDefault(),t.target!==t.currentTarget?null:e.clear(t)}}}),e._v(" "),a("span",{staticClass:"icon is-small angle",attrs:{"aria-hidden":e.dropdown}},[a("fa",{attrs:{icon:"angle-up"}})],1)])])]),e._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu",role:"menu"}},[a("div",{staticClass:"dropdown-content"},[e._l(e.filteredOptions,function(t,s){return a("a",{key:s,staticClass:"dropdown-item",class:{"is-active":e.position===s},on:{mousemove:function(t){e.position=s},click:function(t){t.preventDefault(),e.hit()}}},[a("span",{domProps:{innerHTML:e._s(e.highlight(t[e.label]))}}),e._v(" "),s===e.position?a("span",{class:["label tag",e.isSelected(t)?"is-warning":"is-success"]},[e.isSelected(t)?a("span",[e._v(e._s(e.i18n(e.labels.deselect)))]):a("span",[e._v(e._s(e.i18n(e.labels.select)))])]):e.isSelected(t)?a("span",{staticClass:"icon is-small selected has-text-success"},[a("fa",{attrs:{icon:"check"}})],1):e._e()])}),e._v(" "),0===e.filteredOptions.length?a("a",{staticClass:"dropdown-item",on:{click:function(t){e.taggable&&e.$emit("add-tag",e.query)}}},[e._v("\n                "+e._s(e.i18n(e.labels.noResults))+"\n                "),e.taggable?a("span",{staticClass:"label tag is-info"},[e._v("\n                    "+e._s(e.i18n(e.labels.addTag))+"\n                ")]):e._e()]):e._e()],2)])])},staticRenderFns:[]}},haYV:function(e,t,a){var s=a("0K+m");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("09e1fe90",s,!0,{})},kM9V:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"box"},[a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column"},[a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-half"},[a("vue-select",{attrs:{options:e.locales,placeholder:e.__("Choose language")},on:{input:function(t){e.getLangFile()}},model:{value:e.selectedLocale,callback:function(t){e.selectedLocale=t},expression:"selectedLocale"}})],1),e._v(" "),e.selectedLocale?a("div",{staticClass:"column is-half has-text-right animated fadeIn is-hidden-mobile"},[a("p",{staticClass:"has-padding-top-small"},[a("b",[e._v(e._s(e.keysCount))]),e._v(" "+e._s(e.__("keys found"))+"\n                        ")])]):e._e(),e._v(" "),e.selectedLocale?a("div",{staticClass:"column animated fadeIn"},[a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"select-on-focus",rawName:"v-select-on-focus"},{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"input",attrs:{type:"text",placeholder:e.__("Search")},domProps:{value:e.query},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.isNewKey?e.addKey():e.focusIt(null)},input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._v(" "),a("span",{staticClass:"icon is-small is-left"},[a("fa",{attrs:{icon:"search"}})],1)])])]):e._e()])]),e._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"columns is-mobile has-text-centered"},[e.selectedLocale?a("div",{staticClass:"column is-half"},[e.isNewKey?a("button",{staticClass:"button is-success is-fullwidth",on:{click:function(t){e.addKey()}}},[e._v("\n                            "+e._s(e.__("Add Key"))+"\n                        ")]):e._e()]):e._e(),e._v(" "),e.selectedLocale||"local"!==e.meta.env?e._e():a("div",{staticClass:"column is-half"},[e.canAccess("system.localisation.merge")?a("button",{staticClass:"button is-warning",on:{click:function(t){e.merge()}}},[e._v("\n                            "+e._s(e.__("Merge all localisation files"))+"\n                        ")]):e._e()]),e._v(" "),e.selectedLocale?a("div",{staticClass:"column is-half"},[a("button",{staticClass:"button is-success is-fullwidth",class:{"is-loading":e.loading},on:{click:function(t){e.saveLangFile()}}},[e._v("\n                            "+e._s(e.__("Update"))+"\n                        ")])]):e._e()]),e._v(" "),e.selectedLocale?a("div",{staticClass:"columns is-mobile has-text-right"},[a("div",{staticClass:"column"},[a("label",{staticClass:"label"},[e._v(e._s(e.__("Core"))+"\n                            "),a("vue-switch",{staticClass:"has-margin-left-medium has-margin-right-medium",attrs:{size:"is-large"},model:{value:e.filterCore,callback:function(t){e.filterCore=t},expression:"filterCore"}}),e._v("\n                            "+e._s(e.__("App"))+"\n                        ")],1)]),e._v(" "),a("div",{staticClass:"column"},[a("label",{staticClass:"label"},[e._v(e._s(e.__("Only missing"))+"\n                            "),a("vue-switch",{staticClass:"has-margin-left-medium",attrs:{size:"is-large"},model:{value:e.filterMissing,callback:function(t){e.filterMissing=t},expression:"filterMissing"}})],1)])]):e._e()])])]),e._v(" "),e.selectedLocale?a("div",{staticClass:"box"},[a("div",{staticClass:"columns is-hidden-mobile has-shadow-bottom"},[a("div",{staticClass:"column is-half has-text-centered"},[a("h6",{staticClass:"title is-6"},[e._v(e._s(e.__("Key")))])]),e._v(" "),a("div",{staticClass:"column is-half has-text-centered"},[a("h6",{staticClass:"title is-6"},[e._v(e._s(e.__("Value")))])])]),e._v(" "),a("div",{style:e.styleObject},e._l(e.filteredKeys,function(t,s){return a("div",{key:s,staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("input",{staticClass:"input",attrs:{type:"text",readonly:""},domProps:{value:t}})]),e._v(" "),a("div",{staticClass:"column is-half"},[a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"select-on-focus",rawName:"v-select-on-focus"},{name:"model",rawName:"v-model",value:e.langFile[t],expression:"langFile[key]"}],staticClass:"input",attrs:{type:"text",id:t},domProps:{value:e.langFile[t]},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.focusIt("search-input")},input:function(a){a.target.composing||e.$set(e.langFile,t,a.target.value)}}})]),e._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-outlined is-danger",on:{click:function(a){e.removeKey(t)}}},[a("span",{staticClass:"icon is-small"},[a("fa",{attrs:{icon:"trash-alt"}})],1)])])])])])}))]):e._e()])},staticRenderFns:[]}},tD5R:function(e,t,a){var s=a("zhq8");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("1ff4b115",s,!0,{})},wpGG:function(e,t,a){var s=a("VU/8")(a("RVgh"),a("YjYz"),!1,function(e){a("Ib5x")},"data-v-cd322aca",null);e.exports=s.exports},zhq8:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".has-shadow-bottom{-webkit-box-shadow:0 3px 5px -4px #d3d3d3;box-shadow:0 3px 5px -4px #d3d3d3}",""])}});
//# sourceMappingURL=59.js.map