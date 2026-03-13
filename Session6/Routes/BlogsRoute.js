
const express = require('express');
const { getAllBlogs, deleteBlogById, createBlog, getBlogById } = require('../Controllers/BlogsController');
const BlogInputValidationMiddleware = require('../Middleware/BlogInputValidationMiddleware');
const router = express.Router();


router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById/:id", getBlogById);

router.post("/createBlog", BlogInputValidationMiddleware, createBlog);


router.delete("/deleteBlogById/:id", deleteBlogById);



module.exports = router;