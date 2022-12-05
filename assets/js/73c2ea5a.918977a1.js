"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65099:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(87462),a=r(67294),o=r(10412),i=r(86010),l=r(72389),s=r(67392),u=r(7094),c=r(12466);const d="tabItem_hGfb";var p=r(16550);function m(){const e=function(){const e=o.Z.canUseDOM?navigator.userAgent:"";return e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("X11")>-1?"UNIX":e.indexOf("Linux")>-1?"Linux":"Other"}();return"Windows"===e?"windows":"Mac"===e?"mac":"Linux"===e||"UNIX"===e?"python":"windows"}function f(e){var t;const{lazy:r,block:o,defaultValue:l,values:f,groupId:b,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=f??h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,s.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===l?l:l??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,u.U)(),{pathname:x,search:q}=(0,p.TH)(),E=function(e,t){const r=e.substring(1).split("&");for(let n=0;n<r.length;n++){let e=r[n].split("=");if(decodeURIComponent(e[0])==t)return decodeURIComponent(e[1])}return null}(q,"tab"),T=m(),[I,N]=(0,a.useState)(x.startsWith("/terminal/quickstart/installation")?E&&["mac","windows","python","docker"].includes(E)?E:T:w),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==I&&v.some((t=>t.value===e))&&N(e)}const B=e=>{const t=e.currentTarget,r=j.indexOf(t),n=v[r].value;n!==I&&(P(t),N(n),null!=b&&O(b,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"Enter":B(e);break;case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;r=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;r=j[t]??j[j.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("_group-tab list-none lg:-ml-7 my-6")},v.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>j.push(e),onKeyDown:C,onClick:B},o,{className:(0,i.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",d,null==o?void 0:o.className,{"border-b-2 pointer-events-none":I===t,"border-b-2 text-[#669dcb] border-[#669dcb]":I===t&&x.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":I===t&&x.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":I!==t&&x.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":I!==t&&x.startsWith("/terminal")})}),r??t)})),a.createElement("li",{className:"w-full border-b border-grey-400 pointer-events-none py-1 mb-[12px]"})),r?(0,a.cloneElement)(h.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function b(e){const t=(0,l.Z)();return a.createElement(f,(0,n.Z)({key:String(t)},e))}},33688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(65099),r(85162);const o={title:"Requirements",sidebar_position:1},i=void 0,l={unversionedId:"quickstart/requirements",id:"quickstart/requirements",title:"Requirements",description:"Installation of the OpenBB Terminal requires downloading around 2GB of data. Querying data (by running commands) does not require a lot of bandwidth but you will certainly have a more pleasant experience if you are on a fast internet connection. 4G networks provide a good enough experience so if you're traveling your personal hot-spot will do. While it's technically possible to use a subset of the functionality in off-line mode, you will not be able to use any data that is queried from the APIs of data providers and services.",source:"@site/content/terminal/quickstart/requirements.md",sourceDirName:"quickstart",slug:"/quickstart/requirements",permalink:"/terminal/quickstart/requirements",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/quickstart/requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Requirements",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/terminal/quickstart/installation"},next:{title:"FAQ",permalink:"/terminal/quickstart/faq"}},s={},u=[{value:"Minimum System Requirements",id:"minimum-system-requirements",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Installation of the OpenBB Terminal requires downloading around 2GB of data. Querying data (by running commands) does not require a lot of bandwidth but you will certainly have a more pleasant experience if you are on a fast internet connection. 4G networks provide a good enough experience so if you're traveling your personal hot-spot will do. While it's technically possible to use a subset of the functionality in off-line mode, you will not be able to use any data that is queried from the APIs of data providers and services."),(0,a.kt)("h3",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4GB RAM or more"),(0,a.kt)("li",{parentName:"ul"},"2GB free storage"),(0,a.kt)("li",{parentName:"ul"},"Internet connection")))}d.isMDXComponent=!0}}]);