import{r as m,A as u,R as i,a as f,g as p,b as h}from"./index.15aca06f.js";const E="modulepreload",g={},w="/tmagic-editor/playground/runtime/react/",P=function(t,c){return!c||c.length===0?t():Promise.all(c.map(o=>{if(o=`${w}${o}`,o in g)return;g[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":E,a||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),a)return new Promise((e,s)=>{r.addEventListener("load",e),r.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function v(){var c,o;const n=m.exports.useContext(u);if(!((c=n==null?void 0:n.page)!=null&&c.data))return null;const t=n.resolveComponent("page");return i.createElement(t,{config:(o=n==null?void 0:n.page)==null?void 0:o.data})}P(()=>import("./comp-entry.eeedb3f4.js"),["assets/comp-entry.eeedb3f4.js","assets/index.15aca06f.js"]).then(()=>{var r;const{components:n}=window.magicPresetComponents,t=new f({config:{},curPage:p("page")});let c="";const o=e=>{t==null||t.setConfig(e),a()},a=()=>{h.render(i.createElement(i.StrictMode,null,i.createElement(u.Provider,{value:t},i.createElement(v,null))),document.getElementById("root")),setTimeout(()=>{window.magic.onPageElUpdate(document.querySelector(".magic-ui-page"))})},l={getApp(){return t},updateRootConfig(e){console.log("update root config",e),t==null||t.setConfig(e)},updatePageId(e){console.log("update page id",e),c=e,t==null||t.setPage(c),a()},getSnapElementQuerySelector(){return"[class*=magic-ui][id]"},select(e){console.log("select config",e);const s=document.getElementById(e);return s||new Promise(d=>{setTimeout(()=>{d(document.getElementById(e))},0)})},add({root:e}){console.log("add config",e),o(e)},update({root:e}){console.log("update config",e),o(e)},sortNode({root:e}){console.log("sort config",e),o(e)},remove({root:e}){console.log("remove config",e),o(e)}};Object.keys(n).forEach(e=>t.registerComponent(e,n[e])),(r=window.magic)==null||r.onRuntimeReady(l)});
//# sourceMappingURL=playground.js.map
