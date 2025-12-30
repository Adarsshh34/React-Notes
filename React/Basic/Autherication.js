2. Token-Based Authentication (JWT)
3. OAuth / OpenID Connect

Salt -> A salt is a random value added to a password before hashing it. Its main purpose is to make the hash unique, even if two users have the same password.
Pepper -> A pepper is a secret value added to a password before hashing, similar to salt, but it’s the same for all passwords and not stored in the database.


JWT
JWT Flow: Signup & Login
1. Signup Flow

User sends signup request
Sends username, email, password to the server.

Server processes the request
Hashes the password (with salt & optional pepper).

Stores user data in the database.
Server responds
Usually a success message, sometimes also returns a JWT for auto-login.
Note: JWT is often generated at login, but some systems issue it at signup for convenience.

2. Login Flow

User sends login request
Provides credentials: username/email + password.
Server validates credentials
Checks username/email in DB.
Hashes the provided password with the stored salt and compares with DB hash.
Server generates JWT

If credentials are valid, server generates a JWT with:
Header: Algorithm + Token type
Payload: User info or claims (like userId, role)
Signature: Using server secret

Server sends JWT to client
Usually in response body or as a cookie.
  
Client stores JWT
Options: LocalStorage, SessionStorage, or HTTP-only cookies.
Client makes authenticated requests
Includes JWT in Authorization header:
Authorization: Bearer <JWT_TOKEN>
  
Server validates JWT on each request
Verifies signature using secret key.
Checks payload and expiration.
Grants access if valid, rejects if invalid/expired.

 -------------------------------------------------------------------------------------------------------------- 
SIGNUP FLOW:
User ---> [Signup API] ---> Server ---> [Hash & Store User] ---> Database
                                      |
                                      ---> Response: Success / JWT
---------------------------------------------------------------------------------------------------------------
LOGIN FLOW:
User ---> [Login API] ---> Server ---> [Validate Credentials]
                                      |
                                      ---> [Generate JWT]
                                      |
                                      ---> Response: JWT
                                      |
Client stores JWT (LocalStorage / Cookie)
                                      |
Client ---> [Protected API Request + JWT in Header] ---> Server
                                      |
                                      ---> Verify JWT & Respond with Data
--------------------------------------------------------------------------------------------------------------
