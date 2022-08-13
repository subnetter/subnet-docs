"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[5789],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=s,y=p["".concat(l,".").concat(f)]||p[f]||u[f]||n;return r?a.createElement(y,o(o({ref:t},d),{},{components:r})):a.createElement(y,o({ref:t},d))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(3117),s=(r(7294),r(3905));const n={id:"goals",title:"User Data Design Goals",sidebar_label:"Design Goals"},o=void 0,i={unversionedId:"features/data/goals",id:"version-0.1.0/features/data/goals",title:"User Data Design Goals",description:"User should have complete control over their data. This means is that unless their identity secret keys are compromised, nobody should have access to user data besides users that the user has explicitly shared data with.",source:"@site/versioned_docs/version-0.1.0/features/data/goals.md",sourceDirName:"features/data",slug:"/features/data/goals",permalink:"/docs/features/data/goals",draft:!1,editUrl:"https://github.com/upstter/versioned_docs/version-0.1.0/features/data/goals.md",tags:[],version:"0.1.0",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660422095,formattedLastUpdatedAt:"Aug 13, 2022",frontMatter:{id:"goals",title:"User Data Design Goals",sidebar_label:"Design Goals"},sidebar:"version-0.1.0/someSidebar",previous:{title:"User Data",permalink:"/docs/features/data/design"},next:{title:"Design Goals",permalink:"/docs/features/groups/goals"}},l={},c=[],d={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"User should have complete control over their data. This means is that unless their identity secret keys are compromised, nobody should have access to user data besides users that the user has explicitly shared data with."),(0,s.kt)("p",null,"Providers should never have access to user's data on user clients and  user's data stored on provider servers."),(0,s.kt)("p",null,"User should be able to easily restore their data to a new client any time they chose to do so by using data backed up to his provider or to any other storage device accessible to him."))}u.isMDXComponent=!0}}]);