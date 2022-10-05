"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[3547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(3117),r=(n(7294),n(3905));const a={id:"client_onboarding",title:"Onboarding Clients",sidebar_label:"Onboarding Clients"},o=void 0,s={unversionedId:"unp/client_onboarding",id:"version-0.1.0/unp/client_onboarding",title:"Onboarding Clients",description:"Overview",source:"@site/versioned_docs/version-0.1.0/unp/onboarding.md",sourceDirName:"unp",slug:"/unp/client_onboarding",permalink:"/docs/unp/client_onboarding",draft:!1,editUrl:"https://github.com/upstter/versioned_docs/version-0.1.0/unp/onboarding.md",tags:[],version:"0.1.0",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1664954121,formattedLastUpdatedAt:"Oct 5, 2022",frontMatter:{id:"client_onboarding",title:"Onboarding Clients",sidebar_label:"Onboarding Clients"},sidebar:"version-0.1.0/someSidebar",previous:{title:"Receiving Messages",permalink:"/docs/unp/receiving_msgs"},next:{title:"Identity Bundles",permalink:"/docs/unp/identity_bundles"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Entities",id:"entities",level:2},{value:"algorithms / building blocks",id:"algorithms--building-blocks",level:2},{value:"Initial Bootstrap Sequence - Using a Bootstrap Node",id:"initial-bootstrap-sequence---using-a-bootstrap-node",level:2},{value:"Provider Identity Bundle",id:"provider-identity-bundle",level:4},{value:"Provider Service Terms Bundle",id:"provider-service-terms-bundle",level:4},{value:"A Client Bundle",id:"a-client-bundle",level:3},{value:"Network State After Sequence Execution",id:"network-state-after-sequence-execution",level:2},{value:"Alternative Initial Bootstrap Sequence - Without using a Bootstrap Node",id:"alternative-initial-bootstrap-sequence---without-using-a-bootstrap-node",level:2},{value:"Client Bundle Update",id:"client-bundle-update",level:2},{value:"An Intuitive Incentives Segway",id:"an-intuitive-incentives-segway",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Clients are apps run by users on their digital devices. Clients go through the bootstrap sequence described here when connecting to the network for the first time. Clients may run the bootstrap sequence again at any time to replace the network provider that provides them with network services on the network with a different one."),(0,r.kt)("h2",{id:"entities"},"Entities"),(0,r.kt)("p",null,"The following entities are used in this walk-through and (as well as in many other platform walk-throughs):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- `A` - Alice's client app.\n- `B` - Bob's client app.\n- `BNode` - a SUB bootstrap node\n- `SA` - A's Service Provider\n- `SB` - B's Service Provider\n- `Chain` - a canonical ledger agreed upon by all honest service providers.\n")),(0,r.kt)("h2",{id:"algorithms--building-blocks"},"algorithms / building blocks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X2DH")," - an extended diffie-hellman algorithm based on X3DH."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DR")," - the Double Ratchet algorithm."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IKA")," - A's public identity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SKA")," - SA's public identity.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"initial-bootstrap-sequence---using-a-bootstrap-node"},"Initial Bootstrap Sequence - Using a Bootstrap Node"),(0,r.kt)("p",null,"In the flow below we describe a sequence which includes service providers discovery using a bootstrap node.  "),(0,r.kt)("p",null,"Alternatively, A might obtain SA dial up info outside the protocol, for example, via a services directory made available by the community. In this case, A can skip the step where it searches for a set providers close to it based on its identity which effectively provides random service providers to choose from."),(0,r.kt)("p",null,"Alternatively, A may obtain a service provider public id SA offline and use the bootstrap service to find the dial-up info of SA and skip the step of getting several providers in this flow."),(0,r.kt)("img",{style:{backgroundColor:"white"},src:"/seqs/bootstrap.sequence.svg"}),(0,r.kt)("p",null,"Service providers nodes and bootstrap nodes provide a well-defined public API over a well-known host and tcp port."),(0,r.kt)("p",null,"A generates an elliptical curve key-pair ",(0,r.kt)("inlineCode",{parentName:"p"},"(SKA, IKA)"),". For example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"ED25519"),". SKA is A private key and IKA is the corresponding public key which is used as A's identity in the network. This pair is A long-term identity on the network. Note that it is not tied to a device or to a personally identifiable information such as phone number."),(0,r.kt)("p",null,"A connects to the bootstrap node BNode directly via the BNode public API and sends a ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAvailableProviders()")," message to it.\nBnode is running an SUB Blockchain node which has an identity bundle published for all available providers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A know has a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderIdentityBundle")," bundle for all available providers. The bundle includes dialup information for connecting to each provider directly. ProviderIdentityBundle are periodically generated by service providers and distributed to the network using Kad.")),(0,r.kt)("h4",{id:"provider-identity-bundle"},"Provider Identity Bundle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Public service provider identity bundle.\n// See x2dh protocol for additional details.\n// Only include public data\nmessage ProviderIdentityBundle {\n    uint64 time_stamp = 1; // unique publishing time per provider\n    EntityId provider_id = 2; // This is IKb in x2dh terms for Bob\n    Address address = 3; // Provider account's address for payments\n    repeated DialupInfo dial_up_info = 4; // node dial-up info\n    PreKey pre_key = 5; // current x2dh pre-key (SPKb in x2dh protocol)\n    repeated PreKey one_time_keys = 6; // x2dh one-time keys (optional)\n    MediaContent profile_image = 7; // profile image\n    Signature node_signature = 8; // node attests for keys (provider has node private key)\n    Signature provider_signature = 9; // provider attests node id (node belongs to provider)\n}\n")),(0,r.kt)("p",null,"A connects directly to each of the providers and calls ",(0,r.kt)("inlineCode",{parentName:"p"},"GetServiceTerms()")," to get each provider current service terms for new users. It gets a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceTermsBundle")," from each provider, and presents them to Alice."),(0,r.kt)("p",null,"Alice decides which provider to use. In the sequence we show how A obtaining terms of service from one provider."),(0,r.kt)("h4",{id:"provider-service-terms-bundle"},"Provider Service Terms Bundle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ServiceTermsBundle {\n    EntityId provider_id = 1; // Provider public id\n    uint32 free_trial_period = 2; // free trial duration in hours for new users (can be 0)\n    Amount registration_amount = 3; // registration amount (can be 0) - required to register\n    Amount base_cost = 4; // Base cost per client message (can be 0)\n    Amount cost_per_byte_per_month = 5; // Cost to store 1 byte per month (can be 0)\n    uint64 max_user_bytes = 6; // max per account storage space\n    Amount cost_per_byte = 7; // Cost to relay 1 user-data byte (can be 0)\n    bytes public_content_terms_of_service = 8; // terms of service for public content hosting (public group, public channels).\n    uint32 wind_down_period = 9; // hours that provider will serve client request past client termination\n    uint32 wind_down_period_client_data = 10; // days until provider will not serve client related data to other providers\n    uint64 max_file_size = 11; // max user file size in bytes\n    uint64 valid_from = 12; // Timestamp\n    uint64 valid_until = 13; // Timestamp\n    Address payment_account = 14; // provider payment account (layer 2)\n    Signature signature = 15; // bundles are self contained and are signed\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The provider specifies if it supports a ",(0,r.kt)("inlineCode",{parentName:"p"},"free trial period")," for new users or if it requires a payment to start servicing A.")),(0,r.kt)("p",null,"A sets S0 as it it new service provider, based on Alice's input."),(0,r.kt)("p",null,"If SA doesn't provide a free trial period then A makes signs an SMP blockchain payment transaction to SA. This payment may include a one-time fee set in S0's terms of service and a deposit to the user's ledger maintained by S0.\n","[TODO: to learn more about service payments check...]"),(0,r.kt)("p",null,"A establishes a secure communications session with S0 by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSessionReqeust(StartService(ClientBundle(A,SA), Deposit transaction))"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In terms of encryption and security, NewSessionRequest works in the following way. A uses data in S0 ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderIdentityBundle")," to start a new double-ratchet session between it and SA. The double-ratchet session is bootstrapped via ",(0,r.kt)("inlineCode",{parentName:"p"},"X2DH"),". A diffie-hellman key exchange between A and S0. The ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSessionRequest")," method includes all the data for SA to create the double-ratchet session with A. ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSession")," is a public API end-point provided by each service providers in their public API service to receive ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSessionRequest"),"s.")),(0,r.kt)("p",null,"The signed payment transaction is sent as part of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// A 2-party DR session request using the X2DH protocol. Can be sent by Alice to Bob.\n// Can also be sent as an inner message sent from Alice to Bob designated to Charlie.\n// So receiver may be Bob or Charlie. DR is bootstrapped using shared secret and AD computed via the X2DH protocol.\n// Receiver should start a DR session with caller, decrypt the encrypted message\n// extract the caller id from the enc payload, verify signature on internal message\n// and only then associate dr session with the public long term id of the caller.\n// this is done so we don't leak sender public id in this clear-text network message.\nmessage NewSessionRequest {\n    uint64 time_stamp = 1; // request time signed by sender (to avoid replays at much later time)\n    EntityId receiver = 2; // Receiver's IKa - long term public key\n    PublicKey sender_ephemeral_key = 3; // Alice's x25519 protocol pub key 2. see X2DH protocol\n    uint64 receiver_bundle_id = 4; // Receiver's bundle id used by sender. Also identifies the pre-key.\n    uint64 receiver_one_time_prekey_id = 5; // one time prekey Bob should use for session (optional)\n    Message message = 6; // First message from Alice to Receiver. Enc in DR protocol in a new DR session Alice created with Receiver.\n    Signature sender_signature = 7; // on all of the above (with long-term id key inside message)\n}\n")),(0,r.kt)("p",null,"NewSessionRequest includes a first message in the new double-ratchet session between A and S0. In this flow, this is a ",(0,r.kt)("inlineCode",{parentName:"p"},"StartService")," request."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that by design, A's public ID is not included in the clear-text of NewSessionRequest which is sent unencrypted over the Internet to avoid man-in-the-middle from associating A current ip public address and its public identity A. SA authenticates A using information included in the the internal encrypted message which is signed by A.")),(0,r.kt)("p",null,"The StartService message includes a signed ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientIdentityBundle")," that A creates. The bundle attests that S0 is A's service provider."),(0,r.kt)("p",null,"Note that once A and S0 a double-ratchet session, A sends messages to SA without requesting to start a new session but it can at any time decide to request to start a new session with S0 which is good for security as new fresh keys are used and old ones are thrown away and not used anymore."),(0,r.kt)("h3",{id:"a-client-bundle"},"A Client Bundle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Client published bundle specifying current provider and x2dh pre-keys\n// Client represents a pseudo-anon identity that has its private key.\nmessage ClientIdentityBundle {\n    uint64 time_stamp = 1;\n    EntityId client_id = 2; // cryptographic id - public key - ika...\n    Address address = 3; // client current wallet address for payments\n    ProviderIdentityBundle provider_bundle = 4; // client's current provider\n    PreKey pre_key = 5; // client's current x2dh pre-key\n    repeated PreKey one_time_keys = 6; // x2dh one-time keys (optional)\n    MediaContent profile_image = 7; // profile data. e.g. profile image\n    Signature signature = 8; // client signature on all other data fields\n}\n")),(0,r.kt)("p",null,"S0 receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"StartService")," request. If it decides it wants to start servicing A. e.g. become its service provider then it creates a ProviderSignedClientIdentityBundle. In this bundle, SA attests that it is currently A's service provider to the network and to A."),(0,r.kt)("p",null,"In case of a required payment it submits the transaction for execution on the SUB blockchain and waits for payment confirmation from the SUB blockchain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Provider published client bundle - includes provider signature on the data\nmessage ProviderSignedClientIdentityBundle {\n    ClientIdentityBundle client_bundle = 1;\n    Signature signature = 2; // provider attests all data\n}\n")),(0,r.kt)("p",null,"S0 returns ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientIdentityBundle(A, S0)")," as a response to A's SetProvider() message using a message encrypted in the DR session between them. S0 also submits the bundle to the SUB blockchain so it is publicly available to anyone via the SUB blockchain public api."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"network-state-after-sequence-execution"},"Network State After Sequence Execution"),(0,r.kt)("p",null,"When the sequence completes via its happy path we have reached the following state:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A and S0 updated their local data to reflect the S0 is now A's service provider."),(0,r.kt)("li",{parentName:"ol"},"A and SA has a ProviderSignedClientIdentityBundle(A, s0) which includes S0's and A's bundles."),(0,r.kt)("li",{parentName:"ol"},"ProviderSignedClientIdentityBundle(A, S0) is published to the SUB blockchain and is available via the blockchain api."),(0,r.kt)("li",{parentName:"ol"},"S0 has received a start-of-service coin payment (when applicable)"),(0,r.kt)("li",{parentName:"ol"},"S0 has received a coin deposit from A that sets the initial A's balance in the ledger it maintains for A (when applicable).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We have basically published this authenticated information without resorting to a centralized server in a decentralized way which ensures that any client or server on the network may obtain this information if it knows IKA. A can publish its IKA on any channel on or off the network.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientBundle")," enables any network node to securely and privately send messages to S0 or to A via s0. Given A id IKA, any node can find ProviderSignedClientBundle(A, S0) and use it.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"alternative-initial-bootstrap-sequence---without-using-a-bootstrap-node"},"Alternative Initial Bootstrap Sequence - Without using a Bootstrap Node"),(0,r.kt)("p",null,"In this sequence A has obtained S0 dial-up info offline, Alice (A's user) has reviewed S0 terms of service and is interested in starting to be services by S0. E.g. make S0 her client's network service provider."),(0,r.kt)("img",{style:{backgroundColor:"white"},src:"/seqs/bootstrap1.sequence.svg"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A connects to S0 over S0 public API and calls ",(0,r.kt)("inlineCode",{parentName:"li"},"GetIdentityBundle()"),"."),(0,r.kt)("li",{parentName:"ol"},"S0 returns to A its current ",(0,r.kt)("inlineCode",{parentName:"li"},"ProviderIdentityBundle"),"."),(0,r.kt)("li",{parentName:"ol"},"The sequence continues as described in the previous sequence starting with the step where A sends a ",(0,r.kt)("inlineCode",{parentName:"li"},"GetServiceTerms()")," request to S0.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"client-bundle-update"},"Client Bundle Update"),(0,r.kt)("img",{style:{backgroundColor:"white"},src:"/seqs/update_x3dh.sequence.svg"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A can update its Identity Bundle at any time, or switch to a new provider at any time. This sequence is executed by A periodically to publish new pre-message public keys with an existing SA and when A decides to switch over to a new SA.")),(0,r.kt)("p",null,"A sends a ",(0,r.kt)("inlineCode",{parentName:"p"},"GetBundle")," message to SA, to obtain SA fresh and current X2DH and identity data."),(0,r.kt)("p",null,"A prepares ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle(A, SA)"),", with new one-time pre-keys, signs it and send ",(0,r.kt)("inlineCode",{parentName:"p"},"PubBundle")," to SA."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If SA requires a fee for publishing A's updated info then the message should contain a signed payment transaction.")),(0,r.kt)("p",null,"SA verifies that it is A's provider and signs the bundle. If payment was required then it executes the transaction by submitting it to the SUB blockchain and waits for transaction confirmation."),(0,r.kt)("p",null,"SA publishes the new ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientIdentityBundle")," to the SUB blockchain."),(0,r.kt)("p",null,"SA returns to A an update ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderSignedClientIdentityBundle"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"an-intuitive-incentives-segway"},"An Intuitive Incentives Segway"),(0,r.kt)("p",null,"Informally speaking, both bootstrapping and update sequences are incentive compatible."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SA has an incentive to pay transaction fee and to publish A's ProviderSignedClientIdentityBundle(A, SA) to the SUB blockchain because this enables other clients to find A and start to messaging with A's client (in any SUB app)."),(0,r.kt)("li",{parentName:"ul"},"Bootstrap node has an incentive to publish providers so new users can be onboarded. Bootstrap node is operated by SUB Dao but anyone can provide additional bootstrap node.")))}p.isMDXComponent=!0}}]);