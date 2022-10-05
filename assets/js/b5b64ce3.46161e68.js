"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[8855],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),f=s,m=p["".concat(c,".").concat(f)]||p[f]||l[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(3117),s=(r(7294),r(3905));const a={id:"design",title:"Feeds Design",sidebar_label:"Feeds Design"},o=void 0,i={unversionedId:"features/feeds/design",id:"version-0.1.0/features/feeds/design",title:"Feeds Design",description:"Feeds are a client-only abstraction. Feeds are not published but only consumed. They are created by users on their clients by specifying one or more status feeds and groups that the user has access to.",source:"@site/versioned_docs/version-0.1.0/features/feeds/design.md",sourceDirName:"features/feeds",slug:"/features/feeds/design",permalink:"/docs/features/feeds/design",draft:!1,editUrl:"https://github.com/upstter/versioned_docs/version-0.1.0/features/feeds/design.md",tags:[],version:"0.1.0",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660422095,formattedLastUpdatedAt:"Aug 13, 2022",frontMatter:{id:"design",title:"Feeds Design",sidebar_label:"Feeds Design"},sidebar:"version-0.1.0/someSidebar",previous:{title:"Design Goals",permalink:"/docs/features/feeds/goals"},next:{title:"\ud83d\ude4d\u200d\u2642\ufe0f Onboarding",permalink:"/docs/product/onboarding"}},c={},d=[],u={toc:d};function l(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Feeds are a client-only abstraction. Feeds are not published but only consumed. They are created by users on their clients by specifying one or more status feeds and groups that the user has access to."),(0,s.kt)("p",null,"A feed contains a set of groups that the user is member of and status updates from other users that the user is subscribed. User's client should pull feed items by querying its service provider for new content items in each of the sources and combine them to one view."),(0,s.kt)("p",null,"When a client receives and decodes status update messages and group messages, it associates them with feeds so they can be viewed in the context of feeds by its user."),(0,s.kt)("p",null,"Associating new messages with feeds in the client is trivially done by using channel id which is part of a message's meta-data and feed's meta-data."))}l.isMDXComponent=!0}}]);