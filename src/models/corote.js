const { Schema, model } = require("mongoose")

const CoroteSchema = new Schema({
    sabor: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true
    },
    teor_alcoolico: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    cor: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true
    }

},
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = model('corote', CoroteSchema);