const {Router} = require('express');
const authenticate = require('../middlewares/auth.middleware')
const {userSingUp, getAllUsers} = require('../controllers/index')

const router = Router();

/* router.post('/users', userSingUp);
router.get('/users', getAllUsers)
 */

module.exports = router;