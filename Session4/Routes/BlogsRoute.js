
const express = require('express');
const { getAllBlogs, deleteBlogById, createBlog, getBlogById } = require('../Controllers/BlogsController');
const router = express.Router();


router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById/:id", getBlogById);

router.post("/createBlog", createBlog);


router.delete("/deleteBlogById/:id", deleteBlogById);



module.exports = router;