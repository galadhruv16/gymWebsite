const BlogModel = require("../models/blog.model");
const UserModel = require("../models/user.model");
const { getLoggedInUserId } = require("../utils/auth.utils");

const createBlog = async (req,res) => {
    const { title,content } = req.body ;
    try{
      const userId = getLoggedInUserId(req);
      const date = new Date();
      await BlogModel.create({
        creator: userId,
        title: title,
        content: content,
        createdAt: date
      })
      res.status(200).json({success:true , message:"blog posted successfully."})
    } catch (err) {
      console.log(err)
      res.status(500).json({message:"Some erorr occured while posting the blog."})
    }
}

const likeBlog = async (req,res) => {
  try{
    const { blogId } = req.body;
    const userId =getLoggedInUserId(req)

    const blog = await BlogModel.findById(blogId);
    const user = await UserModel.findById(userId);

    if (!user.likedPosts.includes(blogId)) {
      blog.likes += 1;
      user.likedPosts.push(blogId);
      await blog.save();
      await user.save();
    }

    res.status(200).json({success:true,message:"Liked the blog successfully"})
  } catch (err) {
    console.log(err);
    res.status(500).json({message: " Some Error Occcured while lliking the Post "})
  }
}

const unlikeBlog = async (req,res) => {
  try {
    const blogId = req.params.blogId;
    const userId = getLoggedInUserId(req);

    const blog = await BlogModel.findById(blogId);
    const user = await UserModel.findById(userId);

    if (user.likedPosts.includes(blogId)) {
      blog.likes -= 1;
      user.likedPosts = user.likedPosts.filter((id) => id !== blogId);
      await blog.save();
      await user.save();
    }

    res.status(200).json({success:true,message:"Unliked the blog successfully"})
  } catch (err) {
    console.log(err);
    res.status(500).json({message: " Some Error Occcured while unliking the Post "})
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

const editComment = async (req,res) => {
  try {
    const commentId = req.params.commentId;
    const { commentContent } = req.body;
    const comment = await CommentModel.findById(commentId);
    comment.content = commentContent;
    await comment.save();
    res.status(200).json({success:true,message:"Comment edited successfully."})
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false, message:"Some Error Occured while editing the comment."})
  }
}

const deleteComment = async (req,res) => {
  try {
    const commentId = req.params.commentId;
    await CommentModel.findByIdAndDelete(commentId);
    res.status(200).json({success:true,message:"Comment deleted successfully."})
  } catch (err) {
    console.log(err)
    res.status(500).json({message:"Some error occured while deleting the comment."})
  }
}

  const updateBlog = async (req,res) => {
    try {
      const blogId = req.params.blogId;
      const { title,content } = req.body;
      const blog = await BlogModel.findById(blogId);
      if(title !== undefined){
        blog.title = title;
      }
      if(content !== undefined){
        blog.content = content;
      }
      await blog.save();
      res.status(200).json({success:true,message:"Blog updated successfully."})
    } catch (err) {
      console.log(err)
      res.status(500).json({message:"Some error occured while updating the blog."})
    }
  }

  const deleteBlog = async (req,res) => {
    try {
      const blogId = req.params.blogId;
      await BlogModel.findByIdAndDelete(blogId);
      res.status(200).json({success:true,message:"Blog deleted successfully."})
    } catch (err) {
      console.log(err)
      res.status(500).json({message:"Some error occured while deleting the blog."})
    }
  }

  module.exports = {
    createBlog,
    likeBlog,
    unlikeBlog,
    commentBlog,
    replyComment,
    editComment,
    deleteComment,
    updateBlog,
    deleteBlog
  };