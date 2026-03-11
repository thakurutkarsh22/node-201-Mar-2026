const BlogsModel = require("../Models/BlogsModel");
const BlogService = require("../Services/BlogService");


async function createBlog(req, res) {

    const body = req.body;
    const { title, content, author } = body;


    try {
        // .save will try to save this object in database 
        const response = await BlogService.createBlogService(title, content, author);
        res.status(201).json({
            message: "blog created successfully",
            data: response
        })

    } catch(error) {
        res.status(500).json({
            message: "something went wrong while creating the blog, please try again later",
            error
        })
    }
}

async function getAllBlogs(req, res) {

    try {
        const allBLogs = await BlogsModel.find({}); // this will give you all the blogs present in the database
        res.status(200).json({
            message: "blogs fetched successfully",
            data: allBLogs
        })
    } catch(error) {
        res.status(500).json({
            message: "something went wrong while fetching the blogs, please try again later",
            error
        })
    }
    
}

async function getBlogById(req, res) {
    const params = req.params;
    const id = params.id; // this is the id which user has sent in the request url
    
    try {
        const blog = await BlogsModel.findById(id); // this will give you the blog which has the same id as the one sent by user in request url
        res.status(200).json({
            message: "blog fetched successfully",
            data: blog
        })
    } catch(error) {
        res.status(500).json({
            message: "something went wrong while fetching the blogs, please try again later",
            error
        })
    }
    
}

async function deleteBlogById(req, res) {
    const params = req.params;
    const id = params.id;

    try {
        const blog = await BlogsModel.deleteOne({ _id: id }); 
        res.status(200).json({
            message: "blog deleted successfully",
            data: blog
        })
    } catch(error) {
        res.status(500).json({
            message: "something went wrong while deleting the blogs, please try again later",
            error
        })
    }
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    deleteBlogById
}