const {Router} = require('express');
const { createBlog, likeBlog, commentBlog, replyComment, getBlog, getBlogs, updateBlog, deleteBlog } = require('../controllers/admin.controller');

const router = Router();

router.post('/postBlog', createBlog);
router.patch('/updateBlog/:blogId', updateBlog);
router.delete('/deleteBlog/:blogId', deleteBlog);
router.get('/getBlogs', getBlogs);
router.get('/getBlog/:blogId', getBlog);
router.post('/likeBlog/:blogId', likeBlog);
router.post('/commentBlog/:blogId', commentBlog);
router.post('/replyComment/:commentId', replyComment);

module.exports = router;