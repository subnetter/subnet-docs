"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[8354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(3117),o=(n(7294),n(3905));const r={id:"design_goals",title:"Design Goals",sidebar_label:"Design Goals"},a=void 0,s={unversionedId:"intro/design_goals",id:"intro/design_goals",title:"Design Goals",description:"Subnet is designed with great care to meet specific, concrete and well-defined design goals.",source:"@site/docs/intro/design_goals.md",sourceDirName:"intro",slug:"/intro/design_goals",permalink:"/docs/next/intro/design_goals",draft:!1,editUrl:"https://github.com/upstter/docs/intro/design_goals.md",tags:[],version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660509385,formattedLastUpdatedAt:"Aug 14, 2022",frontMatter:{id:"design_goals",title:"Design Goals",sidebar_label:"Design Goals"},sidebar:"someSidebar",previous:{title:"Introducing Subnet",permalink:"/docs/next/"},next:{title:"Business Model",permalink:"/docs/next/intro/bizmodel"}},l={},c=[{value:"Optimal Pricing",id:"optimal-pricing",level:3},{value:"Sustainability",id:"sustainability",level:3},{value:"Incentive Compatibility",id:"incentive-compatibility",level:3},{value:"Decentralized Identities",id:"decentralized-identities",level:3},{value:"Anonymity",id:"anonymity",level:3},{value:"Decentralization",id:"decentralization",level:3},{value:"Spam Mitigation",id:"spam-mitigation",level:3},{value:"Privacy",id:"privacy",level:3},{value:"Uncensorable Payments",id:"uncensorable-payments",level:3},{value:"Robustness",id:"robustness",level:3},{value:"Scalability",id:"scalability",level:3},{value:"Modern Mobile Internet",id:"modern-mobile-internet",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Subnet is designed with great care to meet specific, concrete and well-defined design goals.")),(0,o.kt)("h3",{id:"optimal-pricing"},"Optimal Pricing"),(0,o.kt)("p",null,"A built-in free market mechanism in which service providers compete with each-other on offering services to clients is designed so the network discovers the optimal price for the provided services. The pricing model is designed to keep service providers profitable while keeping service fees low for end users. Arguably, the network finds the optimal real value for instant messaging, and other forms of digital communications between people and organizations, and has a business model which doesn't involve toxic and harmful business practices."),(0,o.kt)("h3",{id:"sustainability"},"Sustainability"),(0,o.kt)("p",null,"Users pay a ",(0,o.kt)("inlineCode",{parentName:"p"},"nano-fee")," to send messages to and to receive messages from service providers which provide them with message routing and storage services. This helps mitigating spam as there's a cost for every client message and published data. These costs should cover servie providers operational costs and make the network sustainable without falling back to toxic private personal data sales or advertising business models."),(0,o.kt)("h3",{id:"incentive-compatibility"},"Incentive Compatibility"),(0,o.kt)("p",null,"Service providers are incentivized to provide clients with services and to behave according to the SUB network protocol and not deviate from it. As servie providers are paid by clients for services, per action performed, they have a strong incentive to provide the service as clients are always free to replace them with another service provider available on the network. Incentive-compatibility helps to achieve sustainability."),(0,o.kt)("h3",{id:"decentralized-identities"},"Decentralized Identities"),(0,o.kt)("p",null,"The major vulnerability in all digital communication systems is identity. Subnet aims to build a decentralized identity system where the security model does not depend on root certificate authorities, or on trust in any one company / authority. We aim to replace DNS and TLS/SSL with better modern decentralized alternatives. In Subnet, users are 100% in control of their identity and personal data."),(0,o.kt)("h3",{id:"anonymity"},"Anonymity"),(0,o.kt)("p",null,"In Subnet, no single service provider on the network can decide and produce evidence by itself that two clients are communicating with each other. This is achieved without the heavy price of each server having to send o(n^2) network messages every short time period. Anonymity is guaranteed unless tow service providers, serving two users collude to create evidence about the two users communicating which is other. Under a 2/3+ honest service providers' majority, the network provides total anonymity for users 88% of the time. This is not perfect but much better than present-day service providers such as Twitter, Telegram, Facebook and Signal which ALL require personaly identiable-information such as mobile phone number for signup."),(0,o.kt)("p",null,"In Subnet, users decide how annoymous or personally identifable they want to be and the platform itself is neutral by design abou this aspect."),(0,o.kt)("h3",{id:"decentralization"},"Decentralization"),(0,o.kt)("p",null,"In Subnet, there is no central server or a single point of failure in the system. By design, users can choose to receive network services from one of several available providers based on well-defined provider published service terms, and to migrate from provider to provider at any time, if they don't receive the services promised by the provider terms. There is also a low-barrier from anyone to become a service provider if he chooses to do so - there is no party than needs to auhtorize an organization to become a service providers. This is enabled because service providers is a permisionless federation of entities that agree on a common network protocol between them to maintain the Subnet network."),(0,o.kt)("h3",{id:"spam-mitigation"},"Spam Mitigation"),(0,o.kt)("p",null,"Subnet aims to provide spam mitigation measures to minimize the amount of spam messages that users receive. There's a cost associated with each message sent on the network by users. So, sending bulk messages (messages with low click-through rate) to a large number of human receibers is uneconomical."),(0,o.kt)("h3",{id:"privacy"},"Privacy"),(0,o.kt)("p",null,"Beyond anonymity, Subnet aims to provide strong privacy guarantees by making it hard for any third party or man-in-the-middle to obtain the content of messages sent or exchanged on the platform between any number of entities. Subnet employes modern cryptography techniques to provide backward, forward secrecy to all content exchanged between users on it. Unlike other communications protocol, security and privacy features are designed at the core level of the protocol and not bolted on a non-secure and non-private network protocol."),(0,o.kt)("h3",{id:"uncensorable-payments"},"Uncensorable Payments"),(0,o.kt)("p",null,"Subnet enables instant cryptocurrency payments between any two people or entities in the world without any exceptions. As long as a client can connect to the Internet and to at least one honest service provider, it can pay or get paid by any other user or entity on the network without requiring any third party involvement or authorization."),(0,o.kt)("h3",{id:"robustness"},"Robustness"),(0,o.kt)("p",null,"Subnet is designed in a way that enables a full range of end-user communications and social media apps to be in a straightforward way. In other words, SUB protocol is an open low-level digital communications protocol which is designed to enable a wide-range of communications patterns and apps."),(0,o.kt)("h3",{id:"scalability"},"Scalability"),(0,o.kt)("p",null,"Subnet is designed to enable communications and social media apps to hundreds of millions of people and entities. Its decentralized design of federated service providers is highly-scalable. We envision thousands of service providers on the Subnet network."),(0,o.kt)("h3",{id:"modern-mobile-internet"},"Modern Mobile Internet"),(0,o.kt)("p",null,"Subnet design assumes that users' client software frequently goes offline, and that users Internet connection is fragile, unreliable and at times slow and limited. We strongly believe that future digital communication networks should not require client software to be online 24x7 nor users to have fast and reliable Internet connection."),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);