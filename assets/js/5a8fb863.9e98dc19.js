"use strict";(self.webpackChunknode_git_server=self.webpackChunknode_git_server||[]).push([[8176],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=p,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6647:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(7462),p=(r(7294),r(3905));const o={id:"node-git-server.httpduplex.req",hide_title:!0,custom_edit_url:null,title:"HttpDuplex.req property"},i=void 0,a={unversionedId:"api/node-git-server.httpduplex.req",id:"api/node-git-server.httpduplex.req",title:"HttpDuplex.req property",description:"Home > node-git-server > HttpDuplex > req",source:"@site/docs/api/node-git-server.httpduplex.req.md",sourceDirName:"api",slug:"/api/node-git-server.httpduplex.req",permalink:"/node-git-server/docs/api/node-git-server.httpduplex.req",editUrl:null,tags:[],version:"current",frontMatter:{id:"node-git-server.httpduplex.req",hide_title:!0,custom_edit_url:null,title:"HttpDuplex.req property"},sidebar:"tutorialSidebar",previous:{title:"HttpDuplex.repo property",permalink:"/node-git-server/docs/api/node-git-server.httpduplex.repo"},next:{title:"HttpDuplex.res property",permalink:"/node-git-server/docs/api/node-git-server.httpduplex.res"}},l=[{value:"HttpDuplex.req property",id:"httpduplexreq-property",children:[],level:2}],u={toc:l};function s(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/node-git-server/docs/"},"Home")," > ",(0,p.kt)("a",{parentName:"p",href:"/node-git-server/docs/api/node-git-server"},"node-git-server")," > ",(0,p.kt)("a",{parentName:"p",href:"/node-git-server/docs/api/node-git-server.httpduplex"},"HttpDuplex")," > ",(0,p.kt)("a",{parentName:"p",href:"/node-git-server/docs/api/node-git-server.httpduplex.req"},"req")),(0,p.kt)("h2",{id:"httpduplexreq-property"},"HttpDuplex.req property"),(0,p.kt)("p",null,"A IncomingMessage created by http.Server or http.ClientRequest usually passed as the first parameter to the 'request' and 'response' events. Implements Readable Stream interface but may not be a decendant thereof."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"req: http.IncomingMessage;\n")))}s.isMDXComponent=!0}}]);