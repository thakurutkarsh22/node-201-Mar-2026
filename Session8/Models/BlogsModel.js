const mongoose = require("mongoose");
const validatorPackage = require("validator");
const { data } = require("../userData");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 40,
    validate: (titleData) => {
        // titleData would be the title value in the request body
        for(let i = 0; i < titleData.length; i++) {
            const ch = titleData[i];
            if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') 
                || ch === " " || (ch >= '0' && ch <= '9')) {
                continue;
            } else {
                return false;
            }
        }
        return true;   
    }
  },

  content: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 4000,
     validate: (contentData) => {
        const result = validatorPackage.isAlpha(contentData, 'en-US', { ignore: ' ' });
        return result;
     }
  },

  author: {
    type: String,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);