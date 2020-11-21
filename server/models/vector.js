const mongoose = require('mongoose')

const Vectors = mongoose.model('Vectors',{
    vector: {
        type: [],
        required: true,
        trim: true,
    }
})

module.exports  = Vectors