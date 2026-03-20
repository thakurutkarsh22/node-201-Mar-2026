const validateBlogInput = require("../Validators/BlogCreationInputValidation");

function BlogInputValidationMiddleware(req, res, next) {
    const body = req.body;

    const {error, value} = validateBlogInput(body);

    if(error) {
        res.status(400).json({
            message: "invalid input, please check your input and try again",
            error: error
        })
    } else {
        next();
    }

}

module.exports = BlogInputValidationMiddleware;