const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile : {
        type : Number,
        required:true,
     },
    age: {
        type: Number,
        required: true
    },
    gender : {
       type : String,
       required:true,
       enum : ["male", "female"],
    }

},

    { timestamps: true }
)

module.exports = mongoose.model('form', formSchema)