const { Router } = require('express');
const { checkIfUser } = require('../middlewares/user.middleware');
const { likeBlog, unlikeBlog, commentBlog, replyComment, editComment, deleteComment } = require('../controllers/user.controller');

const router = Router();

router.post('/:blogId/likeBlog', checkIfUser, likeBlog);
router.post('/:blogId/unlikeBlog', checkIfUser, unlikeBlog);
router.post('/:blogId/commentBlog', checkIfUser, commentBlog);
router.post('/:commentId/replyComment', checkIfUser, replyComment);
router.patch('/:commentId/editComment', checkIfUser, editComment);
router.delete('/:commentId/deleteComment', checkIfUser, deleteComment);

module.exports = router;
