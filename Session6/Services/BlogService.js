const BlogsModel = require("../Models/BlogsModel");

class BlogService {
        static async  createBlogService(title, content, author) {
        // we need to create new blog object. // logic creation 
            const newBLogObject = BlogsModel({
                title,
                content,
                author
            });
        
            // you need to talk to database to save the object 
        
            try {
                // .save will try to save this object in database 
                const response = await newBLogObject.save();
                return response;
            } catch(error) {
                return error;
            }
        }
}


module.exports = BlogService;