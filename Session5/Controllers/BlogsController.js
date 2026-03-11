const BlogsModel = require("../Models/BlogsModel");


async function createBlog(req, res) {

    const body = req.body;
    const { title, content, author } = body;

    // we need to create new blog object. 
    const newBLogObject = BlogsModel({
        title,
        content,
        author
    });

    // you need to talk to database to save the object 

    try {
        // .save will try to save this object in database 
        const response = await newBLogObject.save();
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

function getBlogById(req, res) {
    
}

function deleteBlogById(req, res) {
    
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    deleteBlogById
}