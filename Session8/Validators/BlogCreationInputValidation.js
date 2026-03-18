const Joi = require('joi');

const blogValidationSchema = Joi.object({
  title: Joi.string()
    .min(5)
    .max(40)
    .pattern(/^[a-zA-Z0-9 ]+$/)
    .required()
    .messages({
      "string.base": "Title must be a string",
      "string.empty": "Title is required joi schema",
      "string.min": "Title must be at least 5 characters",
      "string.max": "Title cannot exceed 40 characters",
      "string.pattern.base": "Title can only contain letters, numbers and spaces"
    }),

  content: Joi.string()
    .min(5)
    .max(4000)
    .pattern(/^[a-zA-Z ]+$/)
    .required()
    .messages({
      "string.base": "Content must be a string",
      "string.empty": "Content is required",
      "string.min": "Content must be at least 5 characters",
      "string.max": "Content cannot exceed 4000 characters",
      "string.pattern.base": "Content can only contain alphabets and spaces"
    }),

  author: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      "string.base": "Author must be a string",
      "string.empty": "Author is required"
    })
});


/**
 * 
 *inputBody =  {

    "title": "India won by hello world one run",
    "content": "good things about indian team",
    "author": "utkarsh",
    "lakusfhlasdjgflsaugf": "asdjhaljdhajsflasfk",
    "aslkdfjhasljfgasljfgd": "asDFAfljhagFKJg"
}
 */


function validateBlogInput(inputBody) {
    const result = blogValidationSchema.validate(inputBody, { abortEarly: false });
    return result;
}

module.exports = validateBlogInput