"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=l(n),m=i,u=c["".concat(d,".").concat(m)]||c[m]||h[m]||s;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(3117),i=(n(7294),n(3905));const s={id:"messaging",title:"Sending Messages",sidebar_label:"Sending Messages"},o=void 0,r={unversionedId:"unp/messaging",id:"unp/messaging",title:"Sending Messages",description:"Intro",source:"@site/docs/unp/messaging.md",sourceDirName:"unp",slug:"/unp/messaging",permalink:"/docs/next/unp/messaging",draft:!1,editUrl:"https://github.com/upstter/docs/unp/messaging.md",tags:[],version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660422095,formattedLastUpdatedAt:"Aug 13, 2022",frontMatter:{id:"messaging",title:"Sending Messages",sidebar_label:"Sending Messages"},sidebar:"someSidebar",previous:{title:"Technology",permalink:"/docs/next/intro/tech"},next:{title:"Receiving Messages",permalink:"/docs/next/unp/receiving_msgs"}},d={},l=[{value:"Intro",id:"intro",level:2},{value:"Overview",id:"overview",level:2},{value:"Network Entities",id:"network-entities",level:3},{value:"Building Blocks",id:"building-blocks",level:3},{value:"Preliminaries",id:"preliminaries",level:3},{value:"Message Sending Algorithm",id:"message-sending-algorithm",level:2},{value:"Step 1 - A Gets B and SB Bundles",id:"step-1---a-gets-b-and-sb-bundles",level:3},{value:"Step 2 - SA returns Bundle(B, SB)",id:"step-2---sa-returns-bundleb-sb",level:3},{value:"Step 3 - Store Bundles",id:"step-3---store-bundles",level:3},{value:"Step 4 - Message M1 Creation",id:"step-4---message-m1-creation",level:3},{value:"Step 5 - Message M2 Creation",id:"step-5---message-m2-creation",level:3},{value:"Step 6 - Payment Authorization",id:"step-6---payment-authorization",level:3},{value:"Step 7 - Message from A to SA",id:"step-7---message-from-a-to-sa",level:3},{value:"Step 8 - SA Message Processing",id:"step-8---sa-message-processing",level:3},{value:"Step 9 - Message from SA to SB",id:"step-9---message-from-sa-to-sb",level:3},{value:"Step 10 - SB Message Processing",id:"step-10---sb-message-processing",level:3},{value:"Step 11 - Delivery Confirmation",id:"step-11---delivery-confirmation",level:3},{value:"Next Steps - Message Delivery to B",id:"next-steps---message-delivery-to-b",level:2},{value:"Design Notes",id:"design-notes",level:2},{value:"Anonymity Guarantees",id:"anonymity-guarantees",level:2},{value:"Single Service Provider Algorithm",id:"single-service-provider-algorithm",level:2},{value:"Step 1 - Bundles Discovery",id:"step-1---bundles-discovery",level:3},{value:"Step 2 - Message to B",id:"step-2---message-to-b",level:3},{value:"Step 3 - Message to SA",id:"step-3---message-to-sa",level:3},{value:"Step 4 - Message Processing",id:"step-4---message-processing",level:3}],p={toc:l};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"The Subnet Network Protocol (a.k.a SNP) is a message-oriented protocol built on-top of TCP/IP. A direct message is a 1:1 message sent from one entity (sender) to another entity (receiver) using the SNP network protocol. An entity is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Provider Node")," operated by a service provider, or a user's ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," running on his mobile device or computer. This document described how direct messages are sent in SNP."),(0,i.kt)("p",null,"SNP doesn't make strong assumptions regarding clients Inetrnet connectivity. It is assumed that clients use mobile devices, may not be able to receive incoming TCP/IP connections requests, go offline and online often and frequently change their IP address. These assumptions is based on the actuall typical configuration and usage patterns of mobile devices."),(0,i.kt)("p",null,"The core direct messaging algorithm described in this document is one of the fundamental networking algorithms in SNP. Many platform features and higher-level SNP algorithms utilize the core direct messaging algorithm. For example,  the ",(0,i.kt)("inlineCode",{parentName:"p"},"status updates")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"group messaging")," algorithms."),(0,i.kt)("p",null,"This is enabled by a design that specifies that the encrypted message payload sent between two parties using the core messaging algorithm is ",(0,i.kt)("em",{parentName:"p"},"an arbitrary communication protocol message")," and not just a user-generated message. So, for example, a private direct message content may be an ",(0,i.kt)("inlineCode",{parentName:"p"},"instant message")," from one user to another user, or any other kind of message in another higher-level SNP communication protocol between two users, such as status updates and group messages, between a user and its service provider, or between two service providers."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"SNP guarantees messages delivery to frequently-offline clients without compromising their privacy and security. This goal is achieved by the design of both the ",(0,i.kt)("inlineCode",{parentName:"p"},"message sending algorithm")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"message receiving algorithm"),". When done reading this document which describes the sending algorithm, head over and review the ",(0,i.kt)("a",{parentName:"p",href:"/docs/unp/receiving_msgs"},"Receiving Messages Algorithm"),".")),(0,i.kt)("p",null,"The following algorithm describes the flow of ",(0,i.kt)("inlineCode",{parentName:"p"},"sending a message with arbitrary content from a user to another"),". The sequence to send a message from any entity to another entity, such as between two services providers is very similar with some minor changes."),(0,i.kt)("p",null,"The algorithm is a bit involved, but is necessary for SNP to meet its design goals regarding messages delivery, security, forward security, backward security, privacy and support for frequent-offline non-routable clients."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Subnet has built a prototype and a playground that demonstrate the capabilities, correctness and feasabiliity of the message sending and receiving algroithms.")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("h3",{id:"network-entities"},"Network Entities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"A")," - Alice's SNP client app."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"B")," - Bob's SNP client app."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BNode")," - SNP Bootstrap Node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SA")," - service provider node servicing A."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SB")," - service provider node servicing B."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IKA")," - A's public identity identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IKB")," - B's public identity identifier.")),(0,i.kt)("h3",{id:"building-blocks"},"Building Blocks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X2DH")," - a custom, extended diffie-hellman two-party algorithm inspired by ",(0,i.kt)("a",{parentName:"li",href:"https://signal.org/docs/specifications/x3dh/x3dh.pdf"},"X3DH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DR")," - The ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Double_Ratchet_Algorithm"},"double-ratchet algorithm"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DR Session")," - a two-party double-ratchet session."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Payload")," - an arbitrary self-describing message payload."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Payment Authorization")," - a payment authorization signed by a user authorizing a payment amount from a user's account to its service provider cryptocurrency account. (todo: add links to payments here)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bundle(B, SB)")," - Client B identity bundle and SB identity and net-info bundle signed by SB.")),(0,i.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,i.kt)("p",null,"A and B exchanged ",(0,i.kt)("inlineCode",{parentName:"p"},"IKA")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IKB")," between them. For example, via clients QR-codes scanning like in Signal, or via any digital or analog communications channel, or at least B has shared IKB with A over any communications channel."),(0,i.kt)("p",null,"Both A and B have completed their own ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/features/onboarding/overview"},"network bootstrapping sequence")," with service providers nodes SA and SB respectively. So SA is A's service provider and SB is B's service provider and both A and B are serviced users."),(0,i.kt)("p",null,"The algorithm uses a modified version of ",(0,i.kt)("inlineCode",{parentName:"p"},"X2DH")," that doesn't rely on a centralized server to manage, certify, and publish users keys. Unlike the ",(0,i.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/x3dh/x3dh.pdf"},"X3DH protocol"),", the algorithm we use doesn't leak the initiating party's public identity. We employ this design for privacy reasons. SNP provides full two-party message authentication without revealing the message sender public id, using an alternative method which are described below."),(0,i.kt)("p",null,"In this algorithm, A sends a first message to B. We assume that A and B didn't exchange messages between themselves previously on the network, so they don't have an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"DR Session")," between them. In other words, the sequence described here is the first message from A to B."),(0,i.kt)("p",null,"The first message from A to B is used to establish a virtual, secure, tow-party ",(0,i.kt)("inlineCode",{parentName:"p"},"DR Session")," between themselves by using the DR and X2DH algorithms."),(0,i.kt)("p",null,"Once X2DH and DR session initiation is executed by the parties, they each have DR key-chains that enable them to exchange any number of messages between themselves with good security properties such as forward and backward security. All messages between A and B are protected using one-time symmetric message keys. See the ",(0,i.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/doubleratchet/doubleratchet.pdf"},"DR algorithm paper")," for background and additional details."),(0,i.kt)("p",null,"The algorithm is also designed to ensure that each of SA and SB would not be able to determine individually or individually have evidence that A is messaging with B without attempting and succeeding to obtain information via a collusion outside of SNP."),(0,i.kt)("p",null,"Informally, ",(0,i.kt)("em",{parentName:"p"},"SA knows that A wants to send a message via SB, but it doesn't know the final message destination B. SB knows that a message was received via SA on behalf of one of its clients (or itself), and is designated to its client B. However, it doesn't know A's identity.")," In addition, this is achieved without scarifying message authentication for A and B. B can verify that a message from A was authored by A, and A can verify from B was authored by B."),(0,i.kt)("admonition",{title:"Message Content",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The actual message payload sent from A to B is in a higher-level network protocol and has a context defined by that protocol. The context can be ",(0,i.kt)("inlineCode",{parentName:"p"},"a 1:1 messaging session"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"a private status feed")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"a group message"),". For simplicity sake, we describe in this document a simple 1:1 text message. Messages sent in other contexts use the same algorithm. In other words, the message payload is opaque to the core messaging delivery algorithm.")),(0,i.kt)("h2",{id:"message-sending-algorithm"},"Message Sending Algorithm"),(0,i.kt)("img",{style:{backgroundColor:"white"},src:"/seqs/send_msg.sequence.svg"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"step-1---a-gets-b-and-sb-bundles"},"Step 1 - A Gets B and SB Bundles"),(0,i.kt)("p",null,"A sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"GetClientBundleId(B)")," message to SA. The message is encrypted in a DR session between A and SA."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As an alternative, A can also obtain B's ",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle(B, SB)")," by quering any entity which provides the SNP public blockchain API such as community public SNP blockchain nodes or SNP bootstrap nodes. SNP bootstrap nodes all run SNP blockchain nodes.")),(0,i.kt)("h3",{id:"step-2---sa-returns-bundleb-sb"},"Step 2 - SA returns Bundle(B, SB)"),(0,i.kt)("p",null,"When B started being serviced by SB, SB published ",(0,i.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientIdentityBundle(SB, B)")," to the SNP blockchain via a store client bundle transaction."),(0,i.kt)("p",null,"SA queries the SNP blockchain to get ",(0,i.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientIdentityBundle(SB, B)")," and returns it to A. SA, and other service providers run an SNP blockchain node and so can read the requested data from their node's API. ",(0,i.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientIdentityBundle(SB, B)")," is stored on the SNP blockchain as part of the client's bootstrap process with thier service providers. So the data is already available to SA in its SNP blockchain global state and it doesn't need to use the network to obtain it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Provider published client bundle - includes provider signature on the data.\nmessage ProviderSignedClientIdentityBundle {\n    ClientIdentityBundle client_bundle = 1;\n    Signature signature = 2; // provider attests all data\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Client published bundle specifying current provider and x2dh pre-keys.\n// Client represents a pseudo-anon identity that has its private key.\nmessage ClientIdentityBundle {\n    uint64 time_stamp = 1;\n    EntityId client_id = 2; // cryptographic id - public key - ika...\n    Address address = 3; // client's payment address\n    ProviderIdentityBundle provider_bundle = 4; // client's current provider\n    PreKey pre_key = 5; // client's current x2dh pre-key\n    repeated PreKey one_time_keys = 6; // x2dh one-time keys (optional)\n    MediaContent profile_image = 7; // profile data. e.g. profile image\n    Signature signature = 8; // client signature on all other data fields\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientIdentityBundle")," includes its current provider ",(0,i.kt)("inlineCode",{parentName:"p"},"ProviderIdentityBundle")," and is signed by the client.\nThe provider signs ",(0,i.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientIdentityBundle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ProviderIdentityBundle"),". So, when a client gets a ",(0,i.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientIdentityBundle")," it verifies the signatures to be assured that both client and provider data is authentic and that the client is serviced by the service provider. Bundles are stored in the SNP Blockchain.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"One may argue that we should have chosen to design the algorithm in a way that B has shared a public X2DH pre-keys (and even one-time key) with A when it shared IKB (its public id) with A. However, this design is not very flexible and a bit inconvenient as sharing two keys between people is harder than sharing just one."),(0,i.kt)("p",{parentName:"admonition"},"In addition, A needs to locate SB on the network in order to send a message to B, and ",(0,i.kt)("em",{parentName:"p"},"SB's identity may change from time to time as B is free to replace SB with a new service provider at any time"),". So, it is more flexible for A to query the network for an up-to-date ",(0,i.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientIdentityBundle(SB, B)")," which includes current dial-up information for SB and the current B's provider identity. A can cache this data locally and only attempt to retrieve it from the network if SA fails to deliver a message to B via SB on its behalf.")),(0,i.kt)("h3",{id:"step-3---store-bundles"},"Step 3 - Store Bundles"),(0,i.kt)("p",null,"A stores ",(0,i.kt)("inlineCode",{parentName:"p"},"(k = B, v = (ProviderSignedClientIdentityBundle(SB, B), ttl))")," in its local key/value data store and uses this value until the ttl expiration time."),(0,i.kt)("h3",{id:"step-4---message-m1-creation"},"Step 4 - Message M1 Creation"),(0,i.kt)("p",null,"A prepares a message to B to be sent to it via SA and SB. A creates a message which includes the input to a 2XDH protocol between A and B, as well as a first message to B encrypted with a DR session using a shared secret created by the 2XDH algorithm execution. This establishes a DR session between A and B and and enables B to decrypt A's message and respond to it."),(0,i.kt)("p",null,"Let's assume that the message is the text message ",(0,i.kt)("inlineCode",{parentName:"p"},"Hi Bob, this is Alice"),". The clients agree and implement an ",(0,i.kt)("inlineCode",{parentName:"p"},"application-level message type")," for a ",(0,i.kt)("inlineCode",{parentName:"p"},"text-messaging protocol")," which includes a simple message type that contains the sender's text. This message is encoded to binary data and A creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"TypedMessage")," for it using the following syntax:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Typed Message")," is a self-described message in a specific protocol, designated to a specific receiver, where all data is attested by by the sender. It enables dynamic decoding of a protobuf encoded messages to a specific runtime type which is needed because ",(0,i.kt)("inlineCode",{parentName:"p"},"protobuf 3"),", which SNP uses to define RPC messages and service, does not support self-describing messages.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TypedMessage {\n    uint64 time_stamp = 1; // message creation time signed by sender (to avoid later replays)\n    MessageType msg_type = 2; // message type (enum)\n    bytes message = 3; // Serialized protobuf message of msg_type\n    EntityId receiver = 4; // Message designated receiver long-term public key\n    EntityId sender = 5; // Message sender long-term public key\n    Signature signature = 6; // Sender's signature on all other fields - authenticating the message content\n}\n")),(0,i.kt)("p",null,"A starts a ",(0,i.kt)("inlineCode",{parentName:"p"},"2XDH session")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"DR session")," with B, and creates the a ",(0,i.kt)("inlineCode",{parentName:"p"},"NewSessionRequest")," message using the sessions' data. This message is denoted ",(0,i.kt)("inlineCode",{parentName:"p"},"M1 := NewSession (B, MSG)")," in the sequence diagram."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that only B can decrypt M1 by executing the 2XDH and DR algorithms and it only needs data in M1 and its private identity keys to decrypt it.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"// A 2-party DR session request using the X2DH protocol. Can be sent by Alice to Bob.\n// Can also be sent as an inner message sent from Alice to Bob designated to Charlie.\n// So receiver may be Bob or Charlie. DR is bootstrapped using shared secret and AD computed via the X2DH protocol.\nmessage NewSessionRequest {\n    uint64 time_stamp = 1; // request time signed by sender (to avoid replay later on)\n    EntityId sender = 2; // Alice public identity\n    EntityId receiver = 3; // Bob public identity\n    PublicKey sender_ephemeral_key = 4; // Alice's x25519 protocol pub key. see X2DH protocol.\n    uint64 receiver_bundle_id = 5; // Bob's bundle id used by sender. Also identifies the pre-key.\n    uint64 receiver_one_time_prekey_id = 6; // one time pre-key Bob should use for session (optional)\n    Message message = 7; // First message from Alice to Receiver. Encrypted in DR protocol in a new DR session Alice created with Receiver. The cleartext is a TypedMessage.\n    Signature sender_signature = 8; // Alice's signature on all of the above\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"// A message has a DR header and an encrypted TypedMessage, encrypted using DR. See DR protocol for more info\n// Note that if we are able to decrypt a message using the DR info then it means\n// that the sender is the entity which established the DR session with us and there's\n// no need to check signatures on this message to verify it authenticity which helps to reduce complexity.\nmessage Message {\n    DRSessionHeader header = 1; // DR protocol unencrypted header\n    bytes enc_typed_msg = 2; // a DR encrypted TypedMessage\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"message DRSessionHeader { // DR session header (see x2dh protocol for more info)\n    EntityId sender_id = 1; // Sender public id - needed for receiver to locate the session\n    PublicKey dr_pub_key = 2; // the public ratchet key currently in use by the sender\n    uint32 prev_count= 3;  // number of messages in the previous sending chain\n    uint32 count = 4; // number of messages in the current sending chain\n}\n")),(0,i.kt)("h3",{id:"step-5---message-m2-creation"},"Step 5 - Message M2 Creation"),(0,i.kt)("p",null,"A creates a message ",(0,i.kt)("inlineCode",{parentName:"p"},"M2 := ForwardMessage(SB, M1)")," to SA which includes in its payload M1 and requests B to use the SendMessage app-level protocol to send M1 to B as well as SB signed bundle which includes SB dial-up info. The process here is similar - A is executing the X2DH if it doesn't have a DR session with SA or using its existing DR session with SA. M2 is encrypted with this DR session. So the ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," sent from SA to SB is a ",(0,i.kt)("inlineCode",{parentName:"p"},"SendUserMessage")," protocol message with M1 as its data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"// The sender is requesting the receiver to forward the message to one of the entities it is providing a service for.\n// Payload is encrypted using key and ad obtained from EDH and can be a NewSessionRequest sent to a client that\n// the receiver is providing service for or a Message to that client.\n// Sender should create a new ephemeral key for each such message and destroy the private key once\n// the message was sent - it should be a one time key\n// >>> there is no DR session created between sender and receiver only a 1 time key to decrypt the payload\n// The enc/dec key is obtained by doing DH with receiver public pre-key and sender ephemeral key\nmessage ForwardMessageRequest {\n    EntityId receiver = 1; // Provider receiver id - long term public key\n    uint64 receiver_bundle_id = 2; // Receiver's bundle id used by sender. Also identifies the pre-key.\n    PublicKey sender_ephemeral_key = 3; // Sender's x25519 protocol pub key. see 2XDH protocol\n    bytes enc_payload = 4; // binary ForwardMessagePayload message\n}\n\n// Payload is a NewSessionRequest or a Message request\n// to another entity that the ForwardMessage receiver\nmessage ForwardMessagePayload {\n    EntityId receiver = 1; // Receiver id - long term public key\n    oneof data {\n        NewSessionRequest new_session_request = 2;\n        Message message = 3;\n    };\n}\n")),(0,i.kt)("h3",{id:"step-6---payment-authorization"},"Step 6 - Payment Authorization"),(0,i.kt)("p",null,"A creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"payment authorization")," that authorizes a payment for the message delivery to SA. The payment amount is  based on the effective ",(0,i.kt)("inlineCode",{parentName:"p"},"SA's service pricing terms")," which A agreed to when A started to be serviced by SA, and properties of the cypher-text message to B such as message total byte-size."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A only needs to create a payment if he's served on a pay-per-use plan by SA. If A has a ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed-monthly-fee service plan")," with SA then this step is skipped.")),(0,i.kt)("h3",{id:"step-7---message-from-a-to-sa"},"Step 7 - Message from A to SA"),(0,i.kt)("p",null,"A creates and signs a ",(0,i.kt)("inlineCode",{parentName:"p"},"Message(payment, RouteMessage(SB, M2))")," designated to SA and sends it to SA using their existing DR session."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Payment authorizations are signed by the payer and are used by the payee service provider for billing users.")),(0,i.kt)("h3",{id:"step-8---sa-message-processing"},"Step 8 - SA Message Processing"),(0,i.kt)("p",null,"SA receives the message, verifies the payment using the algorithm described in the billing section (todo: add link here) and stores it in it's local A's billing ledger. In a nutshell, SA accepts the payment if A's ",(0,i.kt)("inlineCode",{parentName:"p"},"current free balance")," with SA is greater than the payment amount and it deducts the payment from A's current free balance."),(0,i.kt)("h3",{id:"step-9---message-from-sa-to-sb"},"Step 9 - Message from SA to SB"),(0,i.kt)("p",null,"SA obtains {",(0,i.kt)("inlineCode",{parentName:"p"},"RouteMessage(SB, M2)"),", SB and M2} from the message it received from A and it creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForwardMessage(M2)")," message to SB. SA creates a new DR session with SB or uses an existing session between them to community and sends the message to SB."),(0,i.kt)("h3",{id:"step-10---sb-message-processing"},"Step 10 - SB Message Processing"),(0,i.kt)("p",null,"SB verifies that SA operates a ",(0,i.kt)("inlineCode",{parentName:"p"},"Cryptocurrency Node")," which recently participated in the network's blockchain consensus (See ",(0,i.kt)("inlineCode",{parentName:"p"},"proof of useful work")," verification) by looking at on-chain data which is in consensus, and it aborts the protocol if verification fails."),(0,i.kt)("p",null,"SB decrypts M2 to obtain M1 and verifies it is serving B as specified in M1."),(0,i.kt)("p",null,"SB stores ",(0,i.kt)("inlineCode",{parentName:"p"},"(key = B, key_2nd = now, value = M1, ttl)")," in its local key value store and sends an ",(0,i.kt)("inlineCode",{parentName:"p"},"ACK(id)")," message to SA acknowledging that it has stored the message to B and is going to send it to B."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that M1 binary payload is protected with a one time shared session key between A and B established via a new or an existing double-ratchet session between A and B, so only B can decrypt it. SB can't read the message content and only knows the message's recipient ID which is B.")),(0,i.kt)("h3",{id:"step-11---delivery-confirmation"},"Step 11 - Delivery Confirmation"),(0,i.kt)("p",null,"SA sends ",(0,i.kt)("inlineCode",{parentName:"p"},"ACK(id)")," message to A to confirm the message delivery (but not open or read as B didn't see the message yet)."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that SB doesn't know that the message came from A, only that it is designated to B, and that SA doesn't know that the message is to B, only that it is from A and should be delivered to SB.")),(0,i.kt)("h2",{id:"next-steps---message-delivery-to-b"},"Next Steps - Message Delivery to B"),(0,i.kt)("p",null,"If B recently communicated with SB then they should have an active secure full-duplex network connection between them. In this case, SB notifies B that it has a new message for it. This is a form of a ",(0,i.kt)("inlineCode",{parentName:"p"},"push pattern"),". Otherwise, SB notifies B about the message the next time B connects to to query for new messages. This is a form of a ",(0,i.kt)("inlineCode",{parentName:"p"},"pull pattern"),"."),(0,i.kt)("p",null,"For additional information about the final message delivery, please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/unp/receiving_msgs"},"Receiving Messages Walk-through"),"."),(0,i.kt)("h2",{id:"design-notes"},"Design Notes"),(0,i.kt)("p",null,"Conceptually the message A sends to SA has the following structure."),(0,i.kt)("img",{style:{width:"75%"},src:"/static/direct_message_structure.png"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"This somewhat involved algorithm is required to ensure privacy and forward secrecy."),(0,i.kt)("p",null,"All messages between two parties are encrypted using the DR two-party algorithm. This means that A's message to SB and to B needs to use an existing double-ratchet session between the parties or that A needs to create a new session with SB and B. The X2DH information A has about SB and B enables it to do so. A is able to do perform these encryptions due to access to ",(0,i.kt)("inlineCode",{parentName:"p"},"X2DH(B, SB)"),". This bundle allows A to establish a shared double-ratchet session with both B and with SB. It already has a double-ratchet session with SA as part of the bootstrap process. This design ensures that SA doesn't know that A is sending a message to B as A only asks it to send a message through SB and doesn't reveal B's identity to SA. SB doesn't know that A is sending a message to B because it only knows that SA asked it to send a message to B ",(0,i.kt)("inlineCode",{parentName:"p"},"on behalf of a client")," and it has no access to A's identity."),(0,i.kt)("p",null,"Note that only SB public info, and an ephemeral public key are visible to SA. All other data is encrypted. Only SB is able to decrypt the payload to get message M2. In M2, only B public info and an ephemeral public key are in cleartext. Only B can decrypt the encrypted parts of this payload with its keys."),(0,i.kt)("p",null,"It is expected that both SA and SB serve many hundreds or even thousands of clients such as A and B and not just A and B. So deciding that a message sent from SA to SB is on behalf of A and is designated to B is informally hard and requires collusion between SA and SB. Also note that the platform's core security assumption is an honest majority of full nodes which not collude to reduce the privacy of client messages."),(0,i.kt)("p",null,"This X2DH part of the algorithm is in some ways similar to Telegram and Signal use of the X3DH protocol\nThe main difference is that in SNP ",(0,i.kt)("inlineCode",{parentName:"p"},"there is no central server that is used for the initial key exchange")," and the distributed permissionless p2p nodes SA and SB are used instead. In Signal and Telegram, X3DH bundles are stored on a centralized server operated by one company. The server operator knows about every user request to communicate with another user and can also censor some users from having their keys available to anyone (or to a sub-group) of other users."),(0,i.kt)("p",null,"Im SNP, there's also ",(0,i.kt)("inlineCode",{parentName:"p"},"no central server that knows that a message M is sent between A and B"),". Obtaining such knowledge requires obtaining meta-data from both SA and SB."),(0,i.kt)("p",null,"Unlike Signal and Whatsapp, messages cleartext sent over the Internet doesn't include the sender's identity (as required by the X3DH protocol), so much less meta-data about the sender is available for men in the middle."),(0,i.kt)("p",null,"SNP design also makes proxying message exchanged between A and B via a server in the case that both of them are not-routable unnecessary. In the case of a proxy, it has full information regarding the identity of conversing parties, the number of exchanged messages, and time of each message exchanged between the two users."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"anonymity-guarantees"},"Anonymity Guarantees"),(0,i.kt)("p",null,"An attacker can determine that A sent a message to B and provide evidence of that fact, if it can access and analyze information that both SA and SB had during the sequence execution. I.e. it broke both A-SA and SB-B double ratchet protected messages or it has convinced SA and SB to provide that information to it."),(0,i.kt)("p",null,"The security assumption ",(0,i.kt)("inlineCode",{parentName:"p"},"2/3+ honest majority of full nodes participating in the protocol on the network"),", includes not sharing clients messaging data or meta-data with each other or with any 3rd party. So, under the network's core security assumption, the probability of both SA and SB being dishonest in the sense that they both reveal their message routing data about A and B to the same party is ",(0,i.kt)("inlineCode",{parentName:"p"},"0.111...")),(0,i.kt)("p",null,"So, the algorithm described in this sequence provides anonymity for a single message from A to B with a probability of ",(0,i.kt)("inlineCode",{parentName:"p"},"0.888...")," which is high but not overwhelmingly high."),(0,i.kt)("p",null,"This guarantee holds for any number of messages between A and B as long as one of them didn't replace its service provider with a new one."),(0,i.kt)("p",null,"Note that anonymity with overwhelming probability of 0.99 or better typically requires a much more complex and expensive messaging protocol that involves each full node on the network to constantly sending messages to other full nodes at the same high rate. For example see Orchid protocol and Whisper protocol."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"single-service-provider-algorithm"},"Single Service Provider Algorithm"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Alice and Bob may be served by the same service provider. In this case sending a message from Alice to Bob and back flow is greatly simplified.")),(0,i.kt)("img",{style:{backgroundColor:"white"},src:"/seqs/send_msg_same_provider.sequence.svg"}),(0,i.kt)("h3",{id:"step-1---bundles-discovery"},"Step 1 - Bundles Discovery"),(0,i.kt)("p",null,"A queries SA for Bundle(B, SA) which SA has in its local data store since it is servicing B. SA returns it to A."),(0,i.kt)("h3",{id:"step-2---message-to-b"},"Step 2 - Message to B"),(0,i.kt)("p",null,"A creates the message to B and wraps it in a ",(0,i.kt)("inlineCode",{parentName:"p"},"NewSession")," method if there is no existing DR session between the parties, or in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," method if it has an existing DR session with B."),(0,i.kt)("h3",{id:"step-3---message-to-sa"},"Step 3 - Message to SA"),(0,i.kt)("p",null,"It creates and signs a ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageToServicedClientRequest")," with its body set to the message to B. It prepares and sign ",(0,i.kt)("inlineCode",{parentName:"p"},"payment authorization")," for the message delivery fee, adds it to the message and sends it to SA."),(0,i.kt)("h3",{id:"step-4---message-processing"},"Step 4 - Message Processing"),(0,i.kt)("p",null,"SA gets the message, verifies the payment authorization, verifies that it serves both A and B and store\u05d3 the message to B for delivery next time B connects to it, or alternatively, push it to B if B is online is connected to SA when the message from A is received."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that in this case, SA knows that A and B, both clients it is serving are communicating with each other but not the content of their messages with is private between A and B.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Read about ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/unp/receiving_msgs"},"Receiving Messages"))))}h.isMDXComponent=!0}}]);