"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[45],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),y=o,m=u["".concat(c,".").concat(y)]||u[y]||p[y]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(3117),o=(r(7294),r(3905));const a={id:"design",title:"Cryptocurrency Payments Design",sidebar_label:"Design"},i=void 0,s={unversionedId:"features/payments/design",id:"features/payments/design",title:"Cryptocurrency Payments Design",description:"Base Coin - $SNP",source:"@site/docs/features/payments/design.md",sourceDirName:"features/payments",slug:"/features/payments/design",permalink:"/docs/next/features/payments/design",draft:!1,editUrl:"https://github.com/upstter/docs/features/payments/design.md",tags:[],version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660422095,formattedLastUpdatedAt:"Aug 13, 2022",frontMatter:{id:"design",title:"Cryptocurrency Payments Design",sidebar_label:"Design"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/next/features/payments/cryptocurrency"},next:{title:"Design Goals",permalink:"/docs/next/features/feeds/goals"}},c={},l=[{value:"Base Coin - $SNP",id:"base-coin---snp",level:3},{value:"Blockchain Architecture",id:"blockchain-architecture",level:3},{value:"Cryptocurrency Nodes",id:"cryptocurrency-nodes",level:4},{value:"Users Transactions",id:"users-transactions",level:4},{value:"Security Assumptions",id:"security-assumptions",level:4},{value:"Blockchain Design",id:"blockchain-design",level:3},{value:"Validators",id:"validators",level:4},{value:"Block Generation and Submission",id:"block-generation-and-submission",level:4},{value:"Block Finalization",id:"block-finalization",level:4},{value:"Validators Bonds",id:"validators-bonds",level:4},{value:"Runtime Updates",id:"runtime-updates",level:4},{value:"Proof of Blockchain Work",id:"proof-of-blockchain-work",level:4},{value:"Cryptocurrency API",id:"cryptocurrency-api",level:4},{value:"Transactions Types",id:"transactions-types",level:4},{value:"Blockchain Transactions Summary - Release v0.1.0",id:"blockchain-transactions-summary---release-v010",level:2},{value:"Onetime Transactions",id:"onetime-transactions",level:3},{value:"Reoccurring Transactions",id:"reoccurring-transactions",level:3}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"base-coin---snp"},"Base Coin - $SNP"),(0,o.kt)("p",null,"The Subnet platform uses its own native cryptocurrency $SNP."),(0,o.kt)("p",null,"The native cryptocurrency is awarded to servers for maintaining the core platform's ledger and other services. Service provider nodes (who don't opt-out) participate in permissionless consensus protocol to agree on a core platform's cryptocurrency ledger."),(0,o.kt)("p",null,"The base currency tracked on ledger of the blockchain that providers maintain between them. Providers get rewarded in the base coin for creating and validating blocks and running a full blockchain node. The production network protocol may require providers to bond an amount of the currency."),(0,o.kt)("h3",{id:"blockchain-architecture"},"Blockchain Architecture"),(0,o.kt)("p",null,"Service Providers operate a blockchain network between them called the ",(0,o.kt)("inlineCode",{parentName:"p"},"Subnet Blockchain"),". Subnet blockchain is permissionless, so any party, provider or not, can become a block producer and a validator. However, every service provider must be a block producer and a validator. The reason for that is that we want the blockchain to mainly be operated by service providers but we want to keep it permissionless."),(0,o.kt)("p",null,"Providers run ",(0,o.kt)("inlineCode",{parentName:"p"},"CryptoCurrency Nodes")," to maintain the blockchain. Cryptocurrency node are blockchain p2p full nodes."),(0,o.kt)("admonition",{title:"0.1.0 Release Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Subnet Blockchain's ledger supports only the core cryptocurrency ($SNP). This release doesn't support a stable decentralized currency, custom tokens or an L2 payment network. These features will be added in future releases. Our long-term roadmap is for users to use stable coins and not a volatile cryptocurrency for payments to providers and to other users.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Clients should not start being serviced by a new service provider before validating recent participation as blockchain validator. The Cryptocurrency API provides means to obtain this data from any 'Cryptocurrency Node' via its ",(0,o.kt)("inlineCode",{parentName:"p"},"Cryptocurrency API"),".")),(0,o.kt)("h4",{id:"cryptocurrency-nodes"},"Cryptocurrency Nodes"),(0,o.kt)("p",null,"Cryptocurrency Node is the software component that operates the Subnet cryptocurrency and payment functionality. Cryptocurrency Nodes are permissionless - anyone can run them without any limitation."),(0,o.kt)("p",null,"Service Provider operate one or more Cryptocurrency Nodes in addition to a provider node. This is design for deployment flexibility and scalability. e.g A provider may run 2 cryptocurrency nodes and 1 provider node and provide infrastructure for each component based on its runtime requirements."),(0,o.kt)("h4",{id:"users-transactions"},"Users Transactions"),(0,o.kt)("p",null,"::info\nUsers execute Subnet Blockchain transactions in several payment scenarios. Users can send transaction data to their providers for submission to the blockchain memory pool for processing, or send it to any available Cryptocurrency Node via its Cryptocurrency API.\n:::"),(0,o.kt)("h4",{id:"security-assumptions"},"Security Assumptions"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The basic security assumption of the platform is an honest majority of validators (2/3+) and of service providers (2/3+). This means that users should always be able to find a honest service provider to provide the service for them if their current provider is misbehaving and should always be able to execute blockchain transactions.")),(0,o.kt)("h3",{id:"blockchain-design"},"Blockchain Design"),(0,o.kt)("h4",{id:"validators"},"Validators"),(0,o.kt)("h4",{id:"block-generation-and-submission"},"Block Generation and Submission"),(0,o.kt)("h4",{id:"block-finalization"},"Block Finalization"),(0,o.kt)("h4",{id:"validators-bonds"},"Validators Bonds"),(0,o.kt)("h4",{id:"runtime-updates"},"Runtime Updates"),(0,o.kt)("h4",{id:"proof-of-blockchain-work"},"Proof of Blockchain Work"),(0,o.kt)("p",null,"A proof obtained by using the Blockchain API that includes a list of the most recent block production and finalization operations performed by a service provider."),(0,o.kt)("h4",{id:"cryptocurrency-api"},"Cryptocurrency API"),(0,o.kt)("h4",{id:"transactions-types"},"Transactions Types"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"blockchain-transactions-summary---release-v010"},"Blockchain Transactions Summary - Release v0.1.0"),(0,o.kt)("h3",{id:"onetime-transactions"},"Onetime Transactions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"One transaction per user on-ramp from $SNP seller to create user's on-chain account."),(0,o.kt)("li",{parentName:"ol"},"One transaction with credit from service provider when switching a service provider.")),(0,o.kt)("h3",{id:"reoccurring-transactions"},"Reoccurring Transactions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"One transaction per user per to maintain required free balance. Ideally, once every about 3 calendar months."),(0,o.kt)("li",{parentName:"ol"},"One transaction per user-to-user purchase or direct payment.")))}p.isMDXComponent=!0}}]);