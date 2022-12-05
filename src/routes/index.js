const usersRoutes = require("./users.routes");
const productsRoutes = require('./products.routes');
const authRoutes = require('./auth.routes')


/**
 * @openapi
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: Test
 *        email:
 *          type: string
 *          example: test@gmail.com
 *        password:
 *          type: string
 *          example: abc123
 *    UsersLogin:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: test@gmail.com
 *        password:
 *          type: string
 *          example: abc123
 *    RespUser:
 *       type: object
 *       properties:
 *          id:
 *            type: number
 *            example: 3
 *          username:
 *            type: string
 *            example: holamundo
 *          email:
 *            type: string
 *            example: hola@hola.com
 *          password:
 *            type: string
 *            example: abc222
 *          createdAt:
 *            type: string     
 *            example: 2022-12-05T19:14:46.864Z
 *          updatedAt:
 *            type: string     
 *            example: 2022-12-05T19:14:46.864Z
 *    Products:
 *       type: object
 *       properties:
 *         idApi:
 *           type: string
 *           example: string
 *         name:
 *           type: string
 *           example: string
 *         price:
 *           type: number
 *           example: 2000000
 *         availableQty:
 *           type: number
 *           example: 10000
 *  securitySchemes:
 *     bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 */


/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Create a new user into the app
 *     tags: [Users]
 *     requestBody:
 *       description: For creating a new user, you will need an email, username and password.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Logged
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/RespUser"
 *       400:
 *          description: "Verify data"
 */


/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Log into the app
 *     tags: [Users]
 *     requestBody:
 *       description: For logging, you will need an email and password.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/UsersLogin'
 *     responses:
 *       200:
 *         description: Logged
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       username:
 *                          type: string
 *                          example: string
 *                       email:
 *                          type: string
 *                          example: string
 *                       password:
 *                          type: string
 *                          example: string
 *                       token:
 *                          type: string
 *                          example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hcmxvbiIsImVtYWlsIjoibXR1cml6b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6ImFiYzEyMzQiLCJpYXQiOjE2NzAxMTkxNjYsImV4cCI6MTY3MDEyMDA2Nn0.dBeJ0QEvFX69LDENYmzDoDAlCQNx3kqbxCxqo7Uvy73O1BpTJUNEmctfGiABeZB0dyFZbEigGcZBXnBMRUbnJA
 *       400:
 *          description: "Verify credentials for login"
 */



module.exports= {
    authRoutes,
    usersRoutes,
    productsRoutes
}
