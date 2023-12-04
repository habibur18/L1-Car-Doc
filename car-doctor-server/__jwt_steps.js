/*
 * JWT: secure your api
 * --------------------
 *       CREATE TOKEN
 * --------------------
 * 1. after user login send user basic info to create token
 * 2. in the server side: install npm i jsonwebtoken
 * 3. use jwt.sign() to create token
 * 4. use jwt.verify() to verify token
 * 5. send token to client
 * --------------------
 *       VERIFY TOKEN
 * --------------------
 * 1. use jwt.verify() to verify token
 * 2. use jwt.decode() to decode token
 *
 */

/* 
* JWT: secure your api
* --------------------
*       CREATE TOKEN
* --------------------
* 1.client:  after user login send user basic info to create token
* 2. in the server side: install npm i jsonwebtoken
* 3. import jsonwebtoken
* 4. jwt.sign(payload, secret, options)
* 5. return token to the client side
*
* 6. after receiving the token store it either http only cookie or local storage
* 
* 7. use a general space onAuthStateChange > AuthProvider
* ---------------------------
*        Send Token To Server
* ---------------------------
* 1. for sensitive api call () send authorization headers {authorization: Bearer token}
* -------------------------------------
*
* --------------------------------------
*        Verify Token
* --------------------------------------
* 
* 1. create a function called veryJWT
* 2. this function will have three params: req, res, next
* 3. first check wheather the authorization header is present or not
* 4. if not send 401 error
* 5. get the token out of the authorization header
* 6. use jwt.verify(token, secret, (err, decodedToken) to verify token
* 7. if error send 401 error
* 8. set decoded to the req object so that we can retrieve it later
* 8. call next()

 */
