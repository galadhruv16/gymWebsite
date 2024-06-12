const BlogModel = require('../models/blog.model')
const UserModel = require('../models/user.model')
const Comment = require('../models/comment.model')
const { getLoggedInUserId } = require('../utils/auth.utils')

const likeBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const userId = getLoggedInUserId(req);

    const blog = await BlogModel.findById(blogId);
    const user = await UserModel.findById(userId);

    if (!user.likedPosts.includes(blogId)) {
      blog.likes += 1;
      user.likedPosts.push(blogId);
      await blog.save();
      await user.save();
    }

    res.status(200).json({ success: true, message: "Liked the blog successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Some Error Occurred while liking the Post" });
  }
}

const commentBlog = async (req,res) => {
    try {
      const { blogId,commentContent } = req.body;
      console.log(req.body)
      const userId = getLoggedInUserId(req);
      console.log(userId)
      
      const blog = await BlogModel.findById(blogId);
      const user = await UserModel.findById(userId);
  
      const comment = {
        creator: userId,
        content: commentContent,
        createdAt: new Date()
      };
      console.log(user)
      blog.comments.push(comment);
      user.commentedPosts.push(blogId);
      await blog.save();
      await user.save();
  
      res.status(200).json({ success: true, message: "Comment added successfully", comment });
    } catch (error) {
      console.log(error)
      res.status(500).json({message: " Some error occured while commenting. "});
    }
}

const replyComment = async (req,res) => {
  const { commentId,replyContent } = req.body;
  try {
    const comment = await BlogModel.comments.findById(commentId)
    const userId = getLoggedInUserId(req)
    
    const reply = new Comment({
      creator: userId,
      content: replyContent,
      createdAt: new Date()
    })
    await reply.save()

    comment.replies.push(reply._id)
    await comment.save()

    res.status(200).json({success:true,message:"Replied to the comment successfully"})
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false, message:"Some Error Occured while replying."})
  }
}

module.exports = {
    likeBlog,
    commentBlog,
    replyComment
}