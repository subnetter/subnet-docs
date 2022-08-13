"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[3387],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>u});var n=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(s),u=a,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return s?n.createElement(g,r(r({ref:t},d),{},{components:s})):n.createElement(g,r({ref:t},d))}));function u(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=s.length,r=new Array(i);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=s[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},599:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=s(3117),a=(s(7294),s(3905));const i={id:"receiving_msgs",title:"Receiving Messages",sidebar_label:"Receiving Messages"},r=void 0,o={unversionedId:"unp/receiving_msgs",id:"unp/receiving_msgs",title:"Receiving Messages",description:"Pull and Push Message Delivery",source:"@site/docs/unp/receiving_msgs.md",sourceDirName:"unp",slug:"/unp/receiving_msgs",permalink:"/docs/next/unp/receiving_msgs",draft:!1,editUrl:"https://github.com/upstter/docs/unp/receiving_msgs.md",tags:[],version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660422095,formattedLastUpdatedAt:"Aug 13, 2022",frontMatter:{id:"receiving_msgs",title:"Receiving Messages",sidebar_label:"Receiving Messages"},sidebar:"someSidebar",previous:{title:"Sending Messages",permalink:"/docs/next/unp/messaging"},next:{title:"Identity Bundles",permalink:"/docs/next/unp/identity_bundles"}},l={},p=[{value:"Pull and Push Message Delivery",id:"pull-and-push-message-delivery",level:2},{value:"Algorithm 1 - Pull",id:"algorithm-1---pull",level:2},{value:"Step 1 - Metadata Request",id:"step-1---metadata-request",level:3},{value:"Step 2 - Meta Data Delivery",id:"step-2---meta-data-delivery",level:3},{value:"Step 3 - Receive Message Creation",id:"step-3---receive-message-creation",level:3},{value:"Step 4 - Receive Message Sending",id:"step-4---receive-message-sending",level:3},{value:"Step 5 - Receive Message Processing",id:"step-5---receive-message-processing",level:3},{value:"Step 6 - Incoming Messages Processing",id:"step-6---incoming-messages-processing",level:3},{value:"Algorithm 2 - Push",id:"algorithm-2---push",level:2},{value:"Step 1 - Subscribe on Server Stream",id:"step-1---subscribe-on-server-stream",level:3},{value:"Step 2",id:"step-2",level:3}],d={toc:p};function c(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pull-and-push-message-delivery"},"Pull and Push Message Delivery"),(0,a.kt)("p",null,"In the 2 algorithms described on this page, B retrieves messages sent to him by another user A. Messages are messages in a higher-level application protocol that both A and B understand. It is generalized to receiving messages from any number of other users."),(0,a.kt)("p",null,"In the first algorithm, B requests meta-data about new messages SB has for it when it goes online. This is a form of a ",(0,a.kt)("inlineCode",{parentName:"p"},"pull pattern"),"."),(0,a.kt)("p",null,"If B already has an active full-duplex bi-directional network connection with its provider SB such as an active GRPC RPC protocol stream, then SB pushes new messages meta-data to B that triggers message delivery to B over the connection. This is a form of a ",(0,a.kt)("inlineCode",{parentName:"p"},"push pattern"),". In this case, B doesn't need to pull messages meta-data from its provider and they are delivered to him automatically. See Algorithm 2 blow."),(0,a.kt)("h2",{id:"algorithm-1---pull"},"Algorithm 1 - Pull"),(0,a.kt)("p",null,"We assume that B is not currently connected to SB.  B executes this algorithm as soon as it connects to the network and decides that it wants to check for new incoming messages that SB may have for it."),(0,a.kt)("img",{style:{backgroundColor:"white"},src:"/seqs/get_msgs.sequence.svg"}),(0,a.kt)("h3",{id:"step-1---metadata-request"},"Step 1 - Metadata Request"),(0,a.kt)("p",null,"B goes online after being offline. It calls ",(0,a.kt)("inlineCode",{parentName:"p"},"NewSession(GetMessages(B, t))")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Message(GetMessages(B, t))")," on SB's ",(0,a.kt)("inlineCode",{parentName:"p"},"client service api endpoint"),". B can decide to ask SB to start a new DR session with him at any time by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"NewSession"),". If it decides to use an existing DR session with SB, then it calls ",(0,a.kt)("inlineCode",{parentName:"p"},"Message")," using the DR session. ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," is a timestamp which indicates the minimum time of new messages. It is based on the time of the last messages delivery from SB to B."),(0,a.kt)("h3",{id:"step-2---meta-data-delivery"},"Step 2 - Meta Data Delivery"),(0,a.kt)("p",null,"SB responds with a list of new messages metadata ",(0,a.kt)("inlineCode",{parentName:"p"},"{msg_metadata...}")," that it has available for B. The meta-data includes unique message id and message binary byte size. The metadata includes the ids of all messages designated to B that other service providers sent to SB and were not already delivered to B."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Note that SB doesn't know the identity of message senders, only the size and the id of messages.")),(0,a.kt)("h3",{id:"step-3---receive-message-creation"},"Step 3 - Receive Message Creation"),(0,a.kt)("p",null,"B prepares the data for a ",(0,a.kt)("inlineCode",{parentName:"p"},"Receive({msg_id...}, payment)")," message that it is going to send to SB."),(0,a.kt)("p",null,"B decides which messages it wants to download from SB. If B is on a pay-per-usage service plan then it creates and signs a ",(0,a.kt)("inlineCode",{parentName:"p"},"payment authorization")," for the total cost of messages based delivery on pricing in the current ",(0,a.kt)("inlineCode",{parentName:"p"},"effective service terms")," it has with SB.\nIf B is on a fixed-monthly plan then it can skip this step."),(0,a.kt)("h3",{id:"step-4---receive-message-sending"},"Step 4 - Receive Message Sending"),(0,a.kt)("p",null,"B sends the ",(0,a.kt)("inlineCode",{parentName:"p"},"Receive")," message with the data it prepared in the previous step to SB."),(0,a.kt)("h3",{id:"step-5---receive-message-processing"},"Step 5 - Receive Message Processing"),(0,a.kt)("p",null,"If B is on a payer-per-usage plan then SB verifies the payment based on B ",(0,a.kt)("inlineCode",{parentName:"p"},"current free balance"),", otherwise it just checks that B is a serviced client with an effective monthly-payment service plan."),(0,a.kt)("p",null,"It sends ",(0,a.kt)("inlineCode",{parentName:"p"},"{msg...}")," back to B - the set of messages B requested back to B. Note that these are encrypted messages that only B can decrypt. The messages are sent over the secure communications virtual channel between B and SB that is protected by a DR session."),(0,a.kt)("h3",{id:"step-6---incoming-messages-processing"},"Step 6 - Incoming Messages Processing"),(0,a.kt)("p",null,"B stores the messages locally with a ttl (messages may set to expire by sender) and executes the client-side message handler code based on the message type. It also updates ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," - the last time it pulled messages from SB so it can use a newer t for future GetMessages() calls to SB."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"algorithm-2---push"},"Algorithm 2 - Push"),(0,a.kt)("p",null,"SB provides messages meta-data streaming option for B in B's service terms."),(0,a.kt)("h3",{id:"step-1---subscribe-on-server-stream"},"Step 1 - Subscribe on Server Stream"),(0,a.kt)("p",null,"B requests SB to subscribe to new messages automatically by subscribing on SB's ",(0,a.kt)("inlineCode",{parentName:"p"},"GetClientMessages")," server streaming API endpoint.\nOnce B is subscribed to new messages stream, SB sends ",(0,a.kt)("inlineCode",{parentName:"p"},"{msg_metadata...}")," - meta data about new messages designated to B, over that stream and B determines which ones to request."),(0,a.kt)("h3",{id:"step-2"},"Step 2"),(0,a.kt)("p",null,"The algorithm execution continuous from Algorithm 1, step 3 above."))}c.isMDXComponent=!0}}]);