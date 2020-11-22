const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/hackWestern-1',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})

const db = mongoose.connection

module.exports = db