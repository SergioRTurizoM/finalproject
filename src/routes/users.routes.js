const {Router} = require('express');
const authenticate = require('../middlewares/auth.middleware')
const {userSingUp, getAllUsers, deleteUser} = require('../controllers/index')

const router = Router();

router.post('/users', userSingUp);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser)


module.exports = router;