"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[8862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,v=p["".concat(c,".").concat(h)]||p[h]||u[h]||n;return r?i.createElement(v,o(o({ref:t},d),{},{components:r})):i.createElement(v,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=r(3117),a=(r(7294),r(3905));const n={id:"privacy",title:"Privacy Design",sidebar_label:"overview"},o=void 0,s={unversionedId:"product/privacy/privacy",id:"product/privacy/privacy",title:"Privacy Design",description:"Intro",source:"@site/docs/product/privacy/overview.md",sourceDirName:"product/privacy",slug:"/product/privacy/privacy",permalink:"/docs/next/product/privacy/privacy",draft:!1,editUrl:"https://github.com/upstter/docs/product/privacy/overview.md",tags:[],version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660422095,formattedLastUpdatedAt:"Aug 13, 2022",frontMatter:{id:"privacy",title:"Privacy Design",sidebar_label:"overview"}},c={},l=[{value:"Intro",id:"intro",level:2},{value:"Overview",id:"overview",level:2},{value:"Users Identity Privacy",id:"users-identity-privacy",level:2},{value:"Service Providers Identity Privacy",id:"service-providers-identity-privacy",level:2},{value:"Wallet Addresses Privacy",id:"wallet-addresses-privacy",level:2},{value:"Mining Rewards Privacy",id:"mining-rewards-privacy",level:2},{value:"Users Content Privacy",id:"users-content-privacy",level:2},{value:"Group Memberships Privacy",id:"group-memberships-privacy",level:2},{value:"Status updates subscribers",id:"status-updates-subscribers",level:2},{value:"Communications Metadata Privacy",id:"communications-metadata-privacy",level:2},{value:"Technology Measures",id:"technology-measures",level:3},{value:"Legal Measures",id:"legal-measures",level:3},{value:"Public Information",id:"public-information",level:2}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Privacy is complex and information leakage is surprisingly easy. Privacy-preserving systems need to be extremely strong to ensure reasonable amounts of protection. Unfortunately, they often fail in practice simply because they are cumbersome to use, causing people to revert to convenience. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.grin.mw/about-grin/privacy/"},"Source"),".")),(0,a.kt)("p",null,"Striking the right balance between users convenience and privacy considerations is an unsolved problem in distributed systems design. Subnet proposes a unique protocol and network designs that aim to provide good user privacy guarantees without compromising to much users user-experience. Privacy is one of the platform's core design goals which we attempt to optimize for."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Subnet network protocol is a permissionless protocol which is designed to be used in the permissionless network settings. The protocol provides strong privacy guarantees."),(0,a.kt)("p",null,"The actual privacy level of a Subnet network depends on the actual behavior of the network's service providers which provide the p2p nodes which implement the server-to-server parts of the protocol."),(0,a.kt)("p",null,"The security assumption of a Subnet network is 2/3+ of service providers are honest, in the sense that they do not deviate their behavior from what is specified in the Subnet protocol."),(0,a.kt)("p",null,"Under these assumptions, in the worse case of 1/3 malicious service providers, a Subnet network provides 88% privacy for communications meta-data and 100% privacy for communications content. The communications metadata privacy can be higher based on the actual number of honest service providers on the network beyond the worse-case scenario of 1/3 being malicious."),(0,a.kt)("p",null,"In this new schema of things, ",(0,a.kt)("inlineCode",{parentName:"p"},"don't be evil")," is still applicable but changes from being a requirement for a service provider corporation to a collective requirement from an open group of service providers. Network's which claim ",(0,a.kt)("inlineCode",{parentName:"p"},"can't be evil")," are dishonest regarding the fundamental fact that in a permissionless network, a large enough minority of nodes can always be evil by subverting from the protocol."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Subnet protocol does provide ",(0,a.kt)("inlineCode",{parentName:"p"},"can't be evil")," guarantees regarding other aspects of the network such as users billing according to agreed upon service terms and unlike centralized systems that promise the won't be evil, but still lock-in the users to them and are free to change their terms without notice and at any time, the protocol is designed so users in a Subnet network will be able to exchange their network service provider with another one at any time with minimal service disruptions.")),(0,a.kt)("h2",{id:"users-identity-privacy"},"Users Identity Privacy"),(0,a.kt)("p",null,"Subnet users identity is not related to any personal identifiable information unless the identity chooses to disclose personal identifiable information. Identities are related to crypto ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet addresses")," on to transactions on a Subnet network ledger."),(0,a.kt)("h2",{id:"service-providers-identity-privacy"},"Service Providers Identity Privacy"),(0,a.kt)("p",null,"Service Providers are free to decide which organizational information to associated with their"),(0,a.kt)("h2",{id:"wallet-addresses-privacy"},"Wallet Addresses Privacy"),(0,a.kt)("p",null,"Wallet addresses are only related to personal identifiable information if a coins seller required a buyer to provide such information and is associating this information with buyer's wallet address. In this release of the platforms, users should protect themselves by purchasing coins from identities that do not require personal identifiable information."),(0,a.kt)("h2",{id:"mining-rewards-privacy"},"Mining Rewards Privacy"),(0,a.kt)("p",null,"Miner rewards wallet addresses can be associated by a third party who monitors the network's blockchain with a public IP address. Miners can ensure rewards privacy by transferring rewards coins wallet addresses to annoymous wallet addresses."),(0,a.kt)("h2",{id:"users-content-privacy"},"Users Content Privacy"),(0,a.kt)("p",null,"All content exchanged in a Subnet network, e.g. direct text messages, status updates, group messages, etc... is 100% end-to-end private using strong encryption measures. Only a designated entity can read content authored by another entity and shared with entity by the author."),(0,a.kt)("p",null,"There are also no implicit entities who may read authored content. In other words, all entities must be explicitly approved by content publisher in order to be able to read the content. this means, for example, that to join a group, user has to request group creator to approve his join request and that he can only read group content after being admitted to the group."),(0,a.kt)("h2",{id:"group-memberships-privacy"},"Group Memberships Privacy"),(0,a.kt)("p",null,"Group members identities are only known to other group members."),(0,a.kt)("h2",{id:"status-updates-subscribers"},"Status updates subscribers"),(0,a.kt)("p",null,"The identity of status updates subscribers is only known to the status updates publisher."),(0,a.kt)("h2",{id:"communications-metadata-privacy"},"Communications Metadata Privacy"),(0,a.kt)("h3",{id:"technology-measures"},"Technology Measures"),(0,a.kt)("p",null,"When 2 users Alice and Bob communicate with each other and when each user has a different service provider SPA and SPB, SPA has records about Alice is sending message through it to SPB, but no record that Alice communicates with Bob.\nSPB has a record that SPA forwarded a message from another entity to Bob but no record of Alice's identity.\nThe only way to identify that Alice and Bob are communicating is for SPA and SPB to collude, analyze and store information about messages to and and from their user's using a protocol outside of the Subnet protocol. In other words, they are dishonest malicious service providers as far as the protocol is concerned."),(0,a.kt)("p",null,"The basic security assumption is that there's 2/3+ honest majority of service providers on a Subnet network. Under these assumptions, a Subnet network provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"89% guarantee that meta-data about messages exchanges between user remains private"),". To obtain meta-data about communications between users, both of the user's providers must be malicious and they also need to explicitly collude with each other."),(0,a.kt)("p",null,"A healthy Subnet network is designed to have hundreds service providers from all over the world. Users are free to choose any service provider so in practice two users who communicate with each other may have the same service provider. In this case, the communications meta-data between these two users is as private as the provider's meta-data disclosure policy and practice to legal authorities in the jurisdiction it is operating at."),(0,a.kt)("p",null,"In order to estimate which users are talking with each other, a powerful adversary that can monitor the global Internet needs to correlate between a sending user sent messages timing and size and a receving user incoming messages timing and size. Additional measures will be used to increase meta-data privacy from even a powefull global adversary that can monitor the global Internet traffic. When a service provider forwards one of its serviced users messages to another service provider, it bundles several such recent messages into one message and can randomize the sending time, to make it harded for the adversary to analyize network traffic in order to conclude which users are exchanging messages. The number of these messages per minute increases with the number of users on the network and the number of users serviced by providers. It is expected that providers will service many thousands of indvidual users. The more messages are bundled between providers in this way, the harder it is to estimate which users are talking with each other. In addition, when a user pulls messages designated to him from other users from its provider, it gets all pending messages in one network message - this masks it harder for the adversary to estimate which user are talking with other users."),(0,a.kt)("h3",{id:"legal-measures"},"Legal Measures"),(0,a.kt)("p",null,"Subnet providers an additional legal level of defense beyond the technological one. Users are free to join any service provider on a Subnet network and to switch to a different service provider at any time. Users who cares about communications privacy, should not join a service provider who doesn't guarantee in its terms of service that he will not collude with another service provider to track users communications and that these terms may never change."),(0,a.kt)("p",null,"A service provider which tracks users under these service terms by colluding with one or more other service providers is breaking the service provider agreement between it and its users. When such a breach occurs, user is free to switch to another service providers and has legal grounds to sue the malicious provider for breach of terms."),(0,a.kt)("h2",{id:"public-information"},"Public Information"),(0,a.kt)("p",null,"The following information is public on a Subnet network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Users public identifiers."),(0,a.kt)("li",{parentName:"ul"},"Service Providers public identifiers."),(0,a.kt)("li",{parentName:"ul"},"Any information that user or service provider chooses to associate with their own public identifiers."),(0,a.kt)("li",{parentName:"ul"},"Public identifier of users current and past service providers."),(0,a.kt)("li",{parentName:"ul"},"Wallet address(es) associated with public identifiers."),(0,a.kt)("li",{parentName:"ul"},"Wallet address's coin transactions."),(0,a.kt)("li",{parentName:"ul"},"Wallet address's payments to service providers.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This release of the Subnet protocol doesn't provide specifications for private coin transactions. The next releae of the protocol may include private transactions capabilities.")))}u.isMDXComponent=!0}}]);