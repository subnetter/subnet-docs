"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[4897],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>h});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function a(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(s),h=r,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||i;return s?n.createElement(m,o(o({ref:t},c),{},{components:s})):n.createElement(m,o({ref:t},c))}));function h(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=s.length,o=new Array(i);o[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<i;l++)o[l]=s[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},1389:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(3117),r=(s(7294),s(3905));const i={id:"network_protocol",title:"The Subnet Network Protocol",sidebar_label:"Core Protocol"},o=void 0,a={unversionedId:"unp/network_protocol",id:"unp/network_protocol",title:"The Subnet Network Protocol",description:"This document provides an overview of the core Subnet network protocol, a.k.a SNP as well as protobuf3 service definitions.",source:"@site/docs/unp/network_protocol.md",sourceDirName:"unp",slug:"/unp/network_protocol",permalink:"/docs/next/unp/network_protocol",draft:!1,editUrl:"https://github.com/upstter/docs/unp/network_protocol.md",tags:[],version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660422095,formattedLastUpdatedAt:"Aug 13, 2022",frontMatter:{id:"network_protocol",title:"The Subnet Network Protocol",sidebar_label:"Core Protocol"},sidebar:"someSidebar",previous:{title:"Providers Terms of Service",permalink:"/docs/next/unp/service_bundles"},next:{title:"\ud83d\udcbb Clients",permalink:"/docs/next/product/clients"}},d={},l=[{value:"SNP Network Stack",id:"snp-network-stack",level:2},{value:"Provider Core Service",id:"provider-core-service",level:2},{value:"NewSession",id:"newsession",level:3},{value:"Message",id:"message",level:3},{value:"SubscribeToClientMessages",id:"subscribetoclientmessages",level:3},{value:"GetIdentityBundle",id:"getidentitybundle",level:3},{value:"GetTermsOfService",id:"gettermsofservice",level:3},{value:"Protocol Versioning",id:"protocol-versioning",level:2},{value:"Messages Routing Protocol",id:"messages-routing-protocol",level:2},{value:"Design Pattern",id:"design-pattern",level:3},{value:"The RouteMessage Method",id:"the-routemessage-method",level:3},{value:"ForwardMessageRequest",id:"forwardmessagerequest",level:3},{value:"ForwardMessageResponse",id:"forwardmessageresponse",level:3},{value:"The SendMessageToServicedClient Method",id:"the-sendmessagetoservicedclient-method",level:2},{value:"SendMessageToServicedClientRequest",id:"sendmessagetoservicedclientrequest",level:3},{value:"SendMessageToServicedClientResponse",id:"sendmessagetoservicedclientresponse",level:3}],c={toc:l};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document provides an overview of the core Subnet network protocol, a.k.a SNP as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"protobuf3")," service definitions."),(0,r.kt)("h2",{id:"snp-network-stack"},"SNP Network Stack"),(0,r.kt)("p",null,"The following diagram outline the SNP network stack:"),(0,r.kt)("img",{align:"center",width:"75%",src:"/net_stack.png"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"App protocol")," is a Subnet communications protocol defined as a set of typed messages that provide app-specific functionality. Typically messages are ",(0,r.kt)("inlineCode",{parentName:"p"},"request messages"),", initiated by an entity who starts an operation, and ",(0,r.kt)("inlineCode",{parentName:"p"},"response messages")," which returns data requested in a request. Messages are asynchronous and response messages may be received in any order. When needed, response messages includes an identifier of a request message to enable receiver to associate the response with a request. Messages are defined using the protobuf3 rpc definition language using protobuf messages data type."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ProviderCore")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc service")," implemented by service providers nodes to receive messages from other network entities. In SNP, network entities are users's client software and service providers nodes. These entities form a virtual SNP network over the Internet. Each network is identified by an id designed to enable several SNP networks to operate concurrently and separately over the Internet."),(0,r.kt)("p",null,"ProviderCoreService uses HTTP/2 and TCP/IP for transport."),(0,r.kt)("h2",{id:"provider-core-service"},"Provider Core Service"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Service Providers Nodes")," provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderCoreService")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"GRPC service")," over the Internet. The service is public and is designed to be used by any network entity such as clients and other service providers nodes as the main interface for communicating with a service provider node which implements it."),(0,r.kt)("p",null,"The service provides methods for sending messages in any ",(0,r.kt)("inlineCode",{parentName:"p"},"app-level protocol")," to the node. These service define communications between clients and service providers."),(0,r.kt)("p",null,"The service endpoint for a provider is advertised in the provider's public identity bundle. The service should be provided over TCP/IP without any transport encryption such as TLS. The Subnet network stack does not use TLS certificates by design. SNP is designed to work over any TPC/IP network without relying on web-services security protocol which requires trust in centralized certificate authorities and for nodes to mange and configure certificates. SNP provides its own message authentication and encryption mechanisms. These are implemented directly over GRPC which is in itself implemented over HTTP/2 TCP/IP."),(0,r.kt)("p",null,"The service is defined using the following protobuf3 service definition language."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// ProviderService is a GRPC service provided by a provider to clients or other providers over the Internet\n\nservice ProviderCoreService {\n  rpc NewSession(NewSessionRequest) returns (NewSessionResponse);\n  rpc Message(MessageRequest) returns (MessageResponse);\n  rpc SubscribeToClientMessages(SubscribeToClientMessagesRequest) returns (stream DRMessage);\n  rpc GetIdentityBundle(GetIdentityBundleRequest) returns (GetIdentityBundleResponse);\n  rpc GetTermsOfService(GetTermsOfServiceRequest) returns (GetTermsOfServiceResponse);\n}\n")),(0,r.kt)("h3",{id:"newsession"},"NewSession"),(0,r.kt)("p",null,"A network entity (such as Subnet client software or another service provider node) requests to create a new double-ratchet two-party message encryption session with the service provider node which implements this method and to process a first higher-level SNP message which is encrypted in the double-ratchet session."),(0,r.kt)("h3",{id:"message"},"Message"),(0,r.kt)("p",null,"A network entity (such as Subnet client software or another service provider node) sends a higher-level SNP message to the provider node which implements this method which is encrypted in an existing double-ratchet session between the entity and the node."),(0,r.kt)("h3",{id:"subscribetoclientmessages"},"SubscribeToClientMessages"),(0,r.kt)("p",null,"This method enables a client to create a gRPC network stream with its service provider nodes. Once this stream is established, the node's sends messages to the client over it so client does not need to pull the node for new messages while it is online. gRPC streams are implemented over standard web sockets."),(0,r.kt)("p",null,"Clients should be configured to call this method when they go online. The stream is taken down when the client disconnects from the Internet or shuts down."),(0,r.kt)("p",null,"The provider node implementing this method, authenticates the calling client and only establishes the stream if the client calling it is a client of a currently served user by the provider and it should reject the request for any other caller."),(0,r.kt)("h3",{id:"getidentitybundle"},"GetIdentityBundle"),(0,r.kt)("p",null,"GetIdentityBundle is a public utility method designed to let other entities easily obtain the provider's current identity bundle directly from the provider's node based on only its Internet dial-up info without having to use Subnet blockchain. Implementation should return the provider's current identity bundle without doing any request authentication or version checks."),(0,r.kt)("h3",{id:"gettermsofservice"},"GetTermsOfService"),(0,r.kt)("p",null,"GetTermsOfService is a public utility method designed to let other entities easily obtain the provider's current terms of service for new users directly from the provider's node based on only its Internet dial-up info without having to use the Subnet blockchain. Implementation should return the provider's current terms of service for new users without doing any request authentication or version checks."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"protocol-versioning"},"Protocol Versioning"),(0,r.kt)("p",null,"SNP implementations use semantic versioning to indicate the protocol they implement. This version includes the definitions of all SNP services and app communications protocol."),(0,r.kt)("p",null,"SNP Double-ratchet encrypted messages (which wrap all application-level messages) include the protocol version of their creator implementation, and by an integer network identifier. The Subnet protocol is designed to support multiple Subnet networks over the Internet. Each network is identified by an integer network id."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSession"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SubscribeToClientMessages")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," rpc methods implementation should drop incoming double-ratchet messages which are sent with a network identifier which is different than the node's own network identifier or which are in a protocol version which is incompatible with the node's own SNP protocol implemented version. This is designed so Subnet nodes only communicate with compatible entities on a specific Subnet network."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"messages-routing-protocol"},"Messages Routing Protocol"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Message Routing Protocol")," is an app-protocol designed to provide network services to other service providers' nodes, and to clients of users serviced by the provider. The functionality provided by this service is used in the various SNP core messaging algorithms."),(0,r.kt)("h3",{id:"design-pattern"},"Design Pattern"),(0,r.kt)("p",null,"The Messages Routing Service is an SNP ",(0,r.kt)("inlineCode",{parentName:"p"},"app-protocol")," provided over the base ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderService"),". It is designed as a set of logical methods. Each method provides a different functionality to service clients and is defined by a pair of ",(0,r.kt)("inlineCode",{parentName:"p"},"request messages")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"response messages"),"."),(0,r.kt)("p",null,"These message pairs are specified using the ",(0,r.kt)("inlineCode",{parentName:"p"},"protobuf3")," messages syntax. So, for example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteMessage")," method provides message routing capabilities to service clients, and is specified using ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteMessageRequest")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteMessageResponse")," protobuf3 messages."),(0,r.kt)("p",null,"These messages are always sent encrypted in a two-party double-ratchet session using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSession")," methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider Service"),". Also note that the messages are fully asynchronous so responses may be received out of order."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This design pattern is used in the design all other SNP app-level protocols.")),(0,r.kt)("h3",{id:"the-routemessage-method"},"The RouteMessage Method"),(0,r.kt)("p",null,"This method is the main method used to deliver an app-protocol messages from a user's client to another user's client and therefore used in many use cases."),(0,r.kt)("p",null,"A client requests its service provider to forward a message to another service provider for delivery to one of that provider's serviced clients. The request message payload contains the message for delivery. The request message is encrypted using ",(0,r.kt)("inlineCode",{parentName:"p"},"eph-dh")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"ephemeral diffie-hellman encryption session")," between the sending client and the other client's provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message RouteMessageRequest {\n    // message to the destination service provider\n    ForwardMessageRequest forward_message = 1;\n    // destination service provider dial-up info\n    DialupInfo dialup_info = 2;\n}\n\nmessage RouteMessageResponse {\n    // empty as it only includes status code\n}\n")),(0,r.kt)("h3",{id:"forwardmessagerequest"},"ForwardMessageRequest"),(0,r.kt)("p",null,"This message is a message from the sending client to the service provider of the message's final designated receiving client. The message requests the service provider to forward a message to the receiving client it provides service for."),(0,r.kt)("p",null,"This message is sent to the sending client's service provider in a ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteMessageRequest"),"."),(0,r.kt)("p",null,"The message payload is encrypted using key and ad obtained from EDH. The unencrypted payload (cleartext) of the payload is a ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSessionRequest")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," designated the receiving client. The sender client should create a new ephemeral key for each such message and destroy the private key once the message was sent - it should be a one time key. There is no DR session created between the sender and the receiver service provider, only a one time key for the receiving service provider to decrypt the payload. The encryption/decryption key is obtained by executing diffie-hellman with receiver's public pre-key and sender's ephemeral key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ForwardMessageRequest {\n    EntityId receiver = 1; // Provider receiver id - long term public key\n    uint64 receiver_bundle_id = 2; // Receiver's bundle id used by sender. Also identifies the pre-key.\n    PublicKey sender_ephemeral_key = 3; // Sender's x25519 protocol pub key. see 2XDH protocol\n    bytes enc_payload = 4; // a binary ForwardMessagePayload message\n}\n\n// Payload is a NewSessionRequest or a Message to the final ForwardMessage receiver\nmessage ForwardMessagePayload {\n    EntityId receiver = 1; // we need this because Message doesn't have receiver id in it for privacy, and provider needs it.\n    DRMessage dr_message = 2;\n}\n\n// A DRMessage is a NewSessionRequest or a Message\nmessage DRMessage {\n    oneof data {\n        NewSessionRequest new_session_request = 1;\n        Message message = 2;\n    };\n}\n\n// A message that a service provider delivers to its client in a DR Session between them. It is a message from another client designated to this client.\nmessage ForwardedMessage {\n    // the message from another sender to the receiver\n    DRMessage dr_message = 1;\n}\n")),(0,r.kt)("h3",{id:"forwardmessageresponse"},"ForwardMessageResponse"),(0,r.kt)("p",null,"The response includes status that indicates the message delivery status to its final receiving client destination. Client should use the received response as message delivery confirmation. The service provider may return multiple such responses, each with a different delivery status. e.g. Message received or message delivered to destination client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ForwardMessageResponse {}\n")),(0,r.kt)("h2",{id:"the-sendmessagetoservicedclient-method"},"The SendMessageToServicedClient Method"),(0,r.kt)("h3",{id:"sendmessagetoservicedclientrequest"},"SendMessageToServicedClientRequest"),(0,r.kt)("p",null,"This method is designed to send a message between two clients that are served by the same service provider. The sending client sends this request to its service provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message SendMessageToServicedClientRequest {\n    DRMessage dr_message = 1; // new session request or message to receiving client\n}\n")),(0,r.kt)("h3",{id:"sendmessagetoservicedclientresponse"},"SendMessageToServicedClientResponse"),(0,r.kt)("p",null,"The response indicates the delivery status. Provider may send multiple such response messages to the sender client to indicate the current delivery status. e.g. message received, message delivered to client, etc..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message SendMessageToServicedClientResponse {\n}\n")))}p.isMDXComponent=!0}}]);