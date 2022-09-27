"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[8110],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(i),h=n,y=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return i?r.createElement(y,s(s({ref:t},d),{},{components:i})):r.createElement(y,s({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<a;c++)s[c]=i[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6821:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=i(3117),n=(i(7294),i(3905));const a={id:"design",title:"Priority Inbox",sidebar_label:"Design"},s=void 0,o={unversionedId:"features/priority_inbox/design",id:"version-0.1.0/features/priority_inbox/design",title:"Priority Inbox",description:"Priority Inbox Messages",source:"@site/versioned_docs/version-0.1.0/features/priority_inbox/design.md",sourceDirName:"features/priority_inbox",slug:"/features/priority_inbox/design",permalink:"/docs/features/priority_inbox/design",draft:!1,editUrl:"https://github.com/upstter/versioned_docs/version-0.1.0/features/priority_inbox/design.md",tags:[],version:"0.1.0",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660422095,formattedLastUpdatedAt:"Aug 13, 2022",frontMatter:{id:"design",title:"Priority Inbox",sidebar_label:"Design"},sidebar:"version-0.1.0/someSidebar",previous:{title:"Design Goals",permalink:"/docs/features/priority_inbox/goals"},next:{title:"overview",permalink:"/docs/product/privacy/privacy"}},l={},c=[{value:"Priority Inbox Messages",id:"priority-inbox-messages",level:2},{value:"Setup",id:"setup",level:2},{value:"Sending a Message",id:"sending-a-message",level:2},{value:"Priority Inbox Display",id:"priority-inbox-display",level:2},{value:"Message Display",id:"message-display",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"priority-inbox-messages"},"Priority Inbox Messages"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Priority inbox messages are similar in content to user-to-user messages. e.g. they may have rich text, multimedia content and links to paid content items, in addition they have a subject text field that is designed to provide a summary for display in inboxes.")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User decides if he'd like to enable the priority inbox feature. When enabled, user is able to receive priority inbox messages and get paid for openning them. When disabled, other users can't send the user priority inbox messages."),(0,n.kt)("li",{parentName:"ol"},"User is prompted to enter the price in coin per message he opens and reads."),(0,n.kt)("li",{parentName:"ol"},"Feature availability and price is added to the user's identity bundle and is published with it.")),(0,n.kt)("h2",{id:"sending-a-message"},"Sending a Message"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Sender creates message designated to the receiving user's priority inbox. Sender decides how many coins to pay for the receiver if he opens the message and reads it."),(0,n.kt)("li",{parentName:"ol"},"Sender's client creates, signs and submits to the transactions mem-pool a transaction to move funds to a new hash-locked account with the payment amount specified by the sender. The hash-locked account funds can only be redeemed by receiver's user using his private wallet key and the hash's preimage."),(0,n.kt)("li",{parentName:"ol"},"Sender's client waits for the hash-locked account to be created on-chain and sends a message to the receiver user with the hash-lock preimage. The preimage enables the receiver to issue a blockchain transaction to redeem the funds locked in the hash-lock account using his wallet account private key.")),(0,n.kt)("h2",{id:"priority-inbox-display"},"Priority Inbox Display"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Receiver's client receives a priority message. It checks that the hash-lock account exists onchain before adding it to the receiver's priority inbox."),(0,n.kt)("li",{parentName:"ol"},"Priority Inbox messages appears in the recipient's inbox. The inbox displays the message's subject, sender's nickname, price paid for an open, and icon.")),(0,n.kt)("h2",{id:"message-display"},"Message Display"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Receiver user opens the message and reads it."),(0,n.kt)("li",{parentName:"ol"},"In response to the message openning interaction, receiver's client sends a blockchain transaction to move the funds locked in the hash-locked account to the receiver's acount. This requires sending the pre-image and signing the transaction with the user's account private key specified in the hash-locked account.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"TODO: think about pay-for-reply."))}p.isMDXComponent=!0}}]);