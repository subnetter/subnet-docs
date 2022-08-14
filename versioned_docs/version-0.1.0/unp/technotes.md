# Tech Notes

Types of diffie-hellman algorithms used in SUB:
1. `EDH` - Ephemeral DH - good for peers who do not communicate frequently and need to exchange network messages securely and privately. 
1. `2XDH` - Authentication with a static client public id. Good for longer-term sessions. long-term id and signature in internal message and client signs the whole message so the message is authenticated with long-term client id but it is not exposed in cleartext over network. The client id is encrypted in a session created with the ephemeral public id. We still get the benefits of privacy and authentication of a long-term id on the whole message and on the internal one (session message).
