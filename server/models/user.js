const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        Validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        Validate(value){
            if(value.toLowerCase().includes('password')){
            throw new Error("Password cannot contain password") 
            }
        }
    },
    courses: {
        type: Array,
        default: [[Number]],
    }
})

module.exports = User