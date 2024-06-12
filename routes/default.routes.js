const { Router } = require('express');
const { registerUser, loginUser, getBlog, getBlogs } = require('../controllers/default.controller');
const { validateUser } = require('../middlewares/default.middleware');

const router = Router();

router.post('/register', registerUser);
router.post('/login', validateUser, loginUser);
router.get('/getBlogs', getBlogs);
router.get('/getBlog/:blogId', getBlog);

module.exports = router;