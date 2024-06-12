const { Router } = require('express');
const { replyComment, likeBlog, commentBlog } = require('../controllers/user.controller');

const router = Router();

router.post('/:blogId/likeBlog', likeBlog);
router.post('/:blogId/commentBlog', commentBlog);
router.post('/:commentId/replyComment', replyComment);

module.exports = router;
