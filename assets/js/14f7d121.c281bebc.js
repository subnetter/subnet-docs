"use strict";(self.webpackChunksubnet=self.webpackChunksubnet||[]).push([[1064],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),g=s,c=d["".concat(u,".").concat(g)]||d[g]||m[g]||a;return r?n.createElement(c,o(o({ref:t},p),{},{components:r})):n.createElement(c,o({ref:t},p))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(3117),s=(r(7294),r(3905));const a={id:"design",title:"Groups",sidebar_label:"Design"},o=void 0,i={unversionedId:"features/groups/design",id:"features/groups/design",title:"Groups",description:"Overview",source:"@site/docs/features/groups/design.md",sourceDirName:"features/groups",slug:"/features/groups/design",permalink:"/docs/next/features/groups/design",draft:!1,editUrl:"https://github.com/upstter/docs/features/groups/design.md",tags:[],version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1660422095,formattedLastUpdatedAt:"Aug 13, 2022",frontMatter:{id:"design",title:"Groups",sidebar_label:"Design"},sidebar:"someSidebar",previous:{title:"Design Goals",permalink:"/docs/next/features/groups/goals"},next:{title:"Design Goals",permalink:"/docs/next/features/status_updates/goals"}},u={},l=[{value:"Overview",id:"overview",level:3},{value:"Entities",id:"entities",level:3},{value:"Creating a Group",id:"creating-a-group",level:3},{value:"Joining a Group",id:"joining-a-group",level:3},{value:"Sending a message to a group",id:"sending-a-message-to-a-group",level:3},{value:"Removing a group member",id:"removing-a-group-member",level:3},{value:"Muting a group member",id:"muting-a-group-member",level:3},{value:"Leaving a Group",id:"leaving-a-group",level:3},{value:"Requesting an update-to-date membership list",id:"requesting-an-update-to-date-membership-list",level:3}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"overview"},"Overview"),(0,s.kt)("p",null,"A group is created in a similar way to how status update channels are created.\nCreator can set a monthly group membership fee and later publish premium content items to group members.\nWhen A creates a group he becomes its super admin.\nThere are no public or private groups - group access is set by a members list and group creator has total moderation power over content and members.\nCreator can ban users from posting to a group while still letting them be members and receive group content.\nCreator can remove a member from the group at any time."),(0,s.kt)("h3",{id:"entities"},"Entities"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"User A")," - Group C creator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"A")," - User A's client."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"User B")," - a user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"B")," - User B's client."),(0,s.kt)("li",{parentName:"ul"},"'G' - A group that User A creates.")),(0,s.kt)("h3",{id:"creating-a-group"},"Creating a Group"),(0,s.kt)("p",null,"User A creates a ",(0,s.kt)("inlineCode",{parentName:"p"},"ChannelBundle")," for the group G, on A (A's Client). See status updates design for more information about channel bundles."),(0,s.kt)("p",null,"A publishes G's ",(0,s.kt)("inlineCode",{parentName:"p"},"group id")," (or bundle) via any channel to specific people or publicly."),(0,s.kt)("h3",{id:"joining-a-group"},"Joining a Group"),(0,s.kt)("p",null,"User B provides B with the group id from A. B requests the group bundle by id from A using a 1:1 message. A returns to B the group's bundle."),(0,s.kt)("p",null,"If User B had the group bundle that it can skip the step above."),(0,s.kt)("p",null,"User B creates a subscription request (which includes a signed membership bundle) and sends it to A via a 1:1 message from B. It contains a group membership bundle."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Request to subscribe to a channel or a group\nmessage SubscriptionRequest {\n    uint64 time_stamp = 1;\n    bytes channel_id = 2;\n    AccountId requesting_user = 3;\n    string message = 4; // short request message. e.g. Hi, this is avive - we talked on...\n    // todo: add payment receipt if channels is paid channel\n    GroupMemberBundle membership = 5; // for groups - subscriber adds signed membership bundle used by group creator\n    Signature signature = 6;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"// A group member bundle\nmessage GroupMemberBundle {\n    AccountId user_id = 1;\n    AccountId group_id = 2;\n    Signature signature = 3; // user_id signature attesting it is a group member\n}\n")),(0,s.kt)("p",null,"A presents to User A the group join request of user B. User A accepts B to the group."),(0,s.kt)("p",null," A adds B's membership bundle to the group's GroupMemembersBundle data structure it maintains for the group."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Group members bundle is shared by group creator with group members and\n// is updated with membership changes\nmessage GroupMembersBundle {\n    uint64 created = 1; // signature timestamp\n    AccountId channel_id = 2; // group id\n    ClientId client_id = 3; // channel's creator current client id\n    repeated GroupMemberBundle members = 4; // group members ids\n    Signature signature = 5; // signature of channel_id on all other fields (proves bundle author created this channel)\n    Signature client_signature = 6; // channel's user's client signature on all other fields (proves identity of owner's client)\n}\n")),(0,s.kt)("p",null,"Note that this bundle includes signed bundle by each group member as all as the group's creator signature on all data."),(0,s.kt)("p",null,"A sends the updated bundle to all group members via 1:1 messaging. This can be batched to only be sent once a day in case of a popular group with many daily new members. Alternatively, A prompts User A to welcome B to the group and writes a short message to share with the group. This message includes the updated bundle and is sent to all group members."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sending-a-message-to-a-group"},"Sending a message to a group"),(0,s.kt)("p",null,"Each member who has a GroupMembmersBundle can use it to send group messages. Group messages are sent to all group members."),(0,s.kt)("p",null,"Clients which receive group messages from non-members should discard them."),(0,s.kt)("p",null,"A group message may be top-level or in response to any other previous message, enabling threaded discussions in groups."),(0,s.kt)("p",null,"Each message from a member to a group is sent encrypted in a two-party double-ratchet session between the sender and the receiver using the platform's core messaging capabilities. There is not single group encryption key, and providers don't have access to group's content or to its keys."),(0,s.kt)("p",null,"Note that users don't have to be online to receive group messages. When they come online they pull it from their service providers who temporarily store messages for them."),(0,s.kt)("h3",{id:"removing-a-group-member"},"Removing a group member"),(0,s.kt)("p",null,"Group creator can remove a member from the group at any time.\nTo remove a group member, creator uses his client and the member is removed from the members list. Next, the client sends an updated group membership bundle to all group members with the member not included in it. Members clients store the updated members list and only send and receive group messages from members in this list."),(0,s.kt)("h3",{id:"muting-a-group-member"},"Muting a group member"),(0,s.kt)("p",null,"Group creator can mute or un-mute any member. Muting a member leaves the member in the group but prevents him from posting messages to the group. The muting flag is set for that member and a new groups members bundle is sent to all group members.\nGroup members clients should drop group messages they receive by muted users."),(0,s.kt)("h3",{id:"leaving-a-group"},"Leaving a Group"),(0,s.kt)("h3",{id:"requesting-an-update-to-date-membership-list"},"Requesting an update-to-date membership list"),(0,s.kt)("p",null,"Members client should routinely (say once in 48 hours) request an updates membership list from the group's creator and process it to ensure they have updated membership list and they should refuse group messages from users who are not in the most recent memberships bundle obtained from the group's creator.\nIn case the creator has deleted the group, clients should notify their users and delete the group."),(0,s.kt)("hr",null))}m.isMDXComponent=!0}}]);