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
 *         name:
 *           type: string
 *           example: string
 *         price:
 *           type: number
 *           example: 2000000
 *         availableQty:
 *           type: number
 *           example: 10000
 *         status:
 *           type: boolean
 *           example: true
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

/**
 * @openapi
 * /api/v1/users:
 *  get:
 *    summary: Get all users from the database. You will need to be authenticated.
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: These are all the users registered
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/RespUser'
 *    security:
 *        - bearerAuth: []
 */

/**
 * @openapi
 * /api/v1/users/{id}:
 *  delete:
 *    summary: Delete one user.
 *    tags: [Users]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: It is the user id
 *    security:
 *        - bearerAuth: []
 *    responses:
 *      200:
 *        description: User selected was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: User not found, please verify
 */


/**
 * @openapi
 * /api/v1/users/{id}:
 *  put:
 *    summary: Update one user.
 *    tags: [Users]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: It is the user id
 *    security:
 *        - bearerAuth: []
 *    responses:
 *      200:
 *        description: User selected was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: User not found, please verify
 */


/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     summary: Create a new product into the app
 *     tags: [Products]
 *     requestBody:
 *       description: For creating a new product this info.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Products'
 *     responses:
 *       200:
 *         description: Product Created
 *       400:
 *          description: "Verify data"
 */

/**
 * @openapi
 * /api/v1/products:
 *  get:
 *    summary: Get all products from the database. You will need to be authenticated.
 *    tags: [Products]
 *    responses:
 *      200:
 *        description: These are all the products registered
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *    security:
 *        - bearerAuth: []
 */


/**
 * @openapi
 * /api/v1/products/{id}:
 *  delete:
 *    summary: Delete one product.
 *    tags: [Products]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: It is the product id
 *    security:
 *        - bearerAuth: []
 *    responses:
 *      200:
 *        description: Selected product was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Products'
 *      404:
 *        description: User not found, please verify
 */







module.exports= {
    authRoutes,
    usersRoutes,
    productsRoutes
}
