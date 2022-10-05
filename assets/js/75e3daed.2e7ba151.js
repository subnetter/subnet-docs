"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[6234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,b=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return n?o.createElement(b,a(a({ref:t},d),{},{components:n})):o.createElement(b,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(3117),r=(n(7294),n(3905));const i={id:"tech",title:"Technology",sidebar_label:"Technology"},a=void 0,s={unversionedId:"intro/tech",id:"version-0.1.0/intro/tech",title:"Technology",description:"Subnet Conceptual Network Architecture",source:"@site/versioned_docs/version-0.1.0/intro/tech.md",sourceDirName:"intro",slug:"/intro/tech",permalink:"/docs/intro/tech",draft:!1,editUrl:"https://github.com/upstter/versioned_docs/version-0.1.0/intro/tech.md",tags:[],version:"0.1.0",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1664950521,formattedLastUpdatedAt:"Oct 5, 2022",frontMatter:{id:"tech",title:"Technology",sidebar_label:"Technology"},sidebar:"version-0.1.0/someSidebar",previous:{title:"Business Model",permalink:"/docs/intro/bizmodel"},next:{title:"Core Protocol",permalink:"/docs/unp/network_protocol"}},c={},l=[{value:"Subnet Conceptual Network Architecture",id:"subnet-conceptual-network-architecture",level:3},{value:"Network Entities",id:"network-entities",level:3},{value:"Service Providers Nodes",id:"service-providers-nodes",level:3},{value:"The Subnet Blockchain",id:"the-subnet-blockchain",level:3},{value:"Bootstrap Nodes",id:"bootstrap-nodes",level:3},{value:"Clients",id:"clients",level:3},{value:"Subnet Technology Overview",id:"subnet-technology-overview",level:3},{value:"Building Blocks",id:"building-blocks",level:2},{value:"Subnet Blockchain",id:"subnet-blockchain",level:3},{value:"Account Model",id:"account-model",level:4},{value:"Proof of Useful Work (PoUW)",id:"proof-of-useful-work-pouw",level:3},{value:"The X2DH Protocol",id:"the-x2dh-protocol",level:3},{value:"The Double Ratchet Algorithm",id:"the-double-ratchet-algorithm",level:3}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"subnet-conceptual-network-architecture"},"Subnet Conceptual Network Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2784).Z,width:"5200",height:"3600"})),(0,r.kt)("h3",{id:"network-entities"},"Network Entities"),(0,r.kt)("p",null,"The platform includes 5 main distinct network entities:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Service Providers p2p Nodes"),(0,r.kt)("li",{parentName:"ol"},"Service Bootstrap p2p Nodes"),(0,r.kt)("li",{parentName:"ol"},"Subnet blockchain p2p Nodes"),(0,r.kt)("li",{parentName:"ol"},"Client Apps"),(0,r.kt)("li",{parentName:"ol"},"Bootstrap p2p Nodes")),(0,r.kt)("h3",{id:"service-providers-nodes"},"Service Providers Nodes"),(0,r.kt)("p",null,"Service Providers nodes are servers running a release of Subnetter - the Subnet p2p software for service providers. Service providers nodes must be online 24x7 and IPV4 or IPV6 Internet-routable so they can receive incoming connections from clients and other nodes over the Internet."),(0,r.kt)("p",null,"Service providers do not have access to any content sent or received on the network between users. Users are able to verify the authenticity and security of messages sent on the network without having to trust providers nodes."),(0,r.kt)("p",null,"Service Providers Nodes are designed enable any two users to exchange data in higher-level communication protocols under the assumptions that user's client software is non-routable and often offline."),(0,r.kt)("p",null,"Client software apps operated by users connect to providers nodes in order to send and receive messages. Subnet is desgined to support non-routable and often offline clients. Provider nodes provide the federated backbone of the Subnet network. Providers nodes route messages to thier users sent from other nodes."),(0,r.kt)("p",null,"As part of routing, providers nodes store users messages on a temporary ttl-based basis, and forward user messages to other nodes when a user's client goes online and sends a request for messages designated to it."),(0,r.kt)("p",null,"Service Providers node also store encrypted user data that enable users to easily migrate from client to client and to migrate their account to another service provider."),(0,r.kt)("h3",{id:"the-subnet-blockchain"},"The Subnet Blockchain"),(0,r.kt)("p",null,"Each Service Provider entity runs at least one SUB blockchain p2p node. These nodes run a blockchain p2p protocol between them and reach agreement on an ",(0,r.kt)("inlineCode",{parentName:"p"},"immutable global shared state")," via a consensus protocol. Service Providers nodes are configured to use a blockchains node for cryptocurrency, identity and other Subnet data functionality. The Subnet blockchain maintains users' and providers' coin accounts balances, identity bundles and providers' service terms."),(0,r.kt)("p",null,"It supports the core $SUB cryptocurrency and $SST, Subnet stable token. The Subnet blockchain is a globally replicated database that is updated by an honest majority of Subnet blockchain nodes. Anyone, without limitation, can run an SUB blockchain node and provide the 'Blockchain Service' to the network. In other words, the Sunnet Blockchain is permisionless."),(0,r.kt)("h3",{id:"bootstrap-nodes"},"Bootstrap Nodes"),(0,r.kt)("p",null,"Bootstrap nodes are custom service providers nodes which are configured to provide public Subnet APIs to anyone. Bootstrap nodes do not provide non-public user-specific APIs as they do not provide specific network services to end-users. These are provided by service providers nodes. The public Subnet APIs enable users to locate service providers and to obtain data from the Subnet blockchain such as providers coin balances, users coin balances, users identity and providers identity."),(0,r.kt)("p",null,"Using a bootstrap node, any identity can find the identity of any entity on the network and update its identity bundle it shares on the network at any time. Bootstrap nodes are a public utility on the Subnet network and will be operated by the Subnet Dao as a community service."),(0,r.kt)("p",null,"Using bootstrap nodes, users can locate available service providers to provide them with network services."),(0,r.kt)("h3",{id:"clients"},"Clients"),(0,r.kt)("p",null,"The client is a software application used by people to use network services provided on the Subnet platform. We foresee web-based clients, native desktop clients and mobile native clients."),(0,r.kt)("p",null,"Clients provide the user interface for the applications provided on the platform and include a wallet that maintains user private keys and enables users to sign transactions, messages and other commitments."),(0,r.kt)("p",null,"Clients are not required to be Internet-routable, they only need to be able to connect to their service provider's node. Providers nodes may provide a websocket connection for clients, others may provide a json/http or a grpc endpoint. Clients can be honest or byzantine. ",(0,r.kt)("inlineCode",{parentName:"p"},"Honest Clients")," implement the Subnet public protocols and APIs and ",(0,r.kt)("inlineCode",{parentName:"p"},"Byzantine Clients")," do not. This concept is used in the Subnet security analysis."),(0,r.kt)("h3",{id:"subnet-technology-overview"},"Subnet Technology Overview"),(0,r.kt)("p",null,"Subnet integrates four fundamental decentralization technologies to deliver the platform's design goals."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Blockchain Serice")," used for name resolution and network services discovery, implemented using a permisionless blockchain.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A blockchain-style ",(0,r.kt)("inlineCode",{parentName:"p"},"consensus protocol")," over a cryptocurrency ledger with built-in support to a small and well-defined set of transaction types, a ",(0,r.kt)("inlineCode",{parentName:"p"},"native cryptocurrency")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"decentralized stable coin"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A modern ",(0,r.kt)("inlineCode",{parentName:"p"},"p2p messaging protocol")," built on top of core Internet protocols supporting authentication, encryption, custom app-level protocols and both push and pull models of communications. The p2p protocol uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"X3DH-like protocol")," we call ",(0,r.kt)("inlineCode",{parentName:"p"},"X2DH")," for async, ephemeral key exchange and authentication we adapted to a server-less decentralized context. Learn more about ","[X3DH]","((",(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/x3dh/"},"https://signal.org/docs/specifications/x3dh/"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The p2p protocol makes extensive use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Double Ratchet")," encryption algorithm to secure communications on the platform."))),(0,r.kt)("p",null,"Subnet replaces centralized managed network servers used in legacy internet service provisioning, with decentralized and incentivized full p2p nodes which provide network services to end-users. The Subnet native cryptocurrency is used to incentivize servers on the network to achieve consensus on the cryptocurrency ledger."),(0,r.kt)("h2",{id:"building-blocks"},"Building Blocks"),(0,r.kt)("h3",{id:"subnet-blockchain"},"Subnet Blockchain"),(0,r.kt)("p",null,"Subnet blockchain nodes run a distributed consensus protocol and agree on a canonical ledger between them. The simple ledger includes identity bundles, accounts $SUB coin and token balances. The ledger is where $SUB coin balances settle. For example, clients deposit funds to service providers by sending $SUB coin to provider's blockchain account via a blockchain transaction and preriodical users bills are settled on the SUB blockchain."),(0,r.kt)("h4",{id:"account-model"},"Account Model"),(0,r.kt)("p",null,"An account model is more appropriate for the subnet blockchain instead of UTXO model."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TODO detail support for ",(0,r.kt)("inlineCode",{parentName:"p"},"hash-locked accounts")," - enabling the priority inbox app and deposits.")),(0,r.kt)("h3",{id:"proof-of-useful-work-pouw"},"Proof of Useful Work (PoUW)"),(0,r.kt)("p",null,"Subnet blockchain nodes use ",(0,r.kt)("inlineCode",{parentName:"p"},"proofs of useful work")," (PoUW) when deciding how to act on messages that only other service providers send them according to SUB. This helps spam prevension, storage waste and protocol abuse. Proof of useful work can be easily verified with on-chain data that provides evidence of good behavior and work according to the Subnet blockchain consensus protocol - e.g. blocks production, participation in consensus protocol over a period of time, and getting coin awards for honest useful behavior. In other words, service providers must run Subnet blockchain nodes and prove that to other providers when sending messages to them."),(0,r.kt)("h3",{id:"the-x2dh-protocol"},"The X2DH Protocol"),(0,r.kt)("p",null,"Employed between 2 entities to exchange public keys used for creating shared secrets between entities which are further used to secure communications between entities."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We chose to use X2DH over X3DH as X3DH leaks message senders identity. X2DH enables receiver to authenticate sender without leaking sender's identity to other entities.")),(0,r.kt)("h3",{id:"the-double-ratchet-algorithm"},"The Double Ratchet Algorithm"),(0,r.kt)("p",null,"We employ a modifed version of the Double Ratchet algorithm to create secure communications channel between any to entities on the SUB network. Two entities use a 2XDH generated shared secret to create three chains of encryption keys which are used to secure messages between them: a root chain, a send chain and a receive chain. In addition, message headers are encrypted using header encryption.\n","[todo: For more information... link to double-ratchet spec here...]"))}p.isMDXComponent=!0},2784:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/network_diagram-0d6152ae479cc94e56c4e21f1d7e39c5.png"}}]);