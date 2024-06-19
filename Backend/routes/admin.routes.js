const {Router} = require('express');
const { checkIfAdmin } = require('../middlewares/user.middleware');
const { createBlog, likeBlog, commentBlog, replyComment, editComment, updateBlog, deleteBlog } = require('../controllers/admin.controller');

const router = Router();

router.post('/postBlog', checkIfAdmin, createBlog);
router.patch('/:blogId/updateBlog', checkIfAdmin, updateBlog);
router.delete('/:blogId/deleteBlog', checkIfAdmin, deleteBlog);
router.post('/:blogId/likeBlog', checkIfAdmin, likeBlog);
router.post('/:blogId/commentBlog', checkIfAdmin, commentBlog);
router.post('/:commentId/replyComment', checkIfAdmin, replyComment);
router.patch('/:commentId/editComment', checkIfAdmin, editComment);

module.exports = router;