const {Schema, model} = require('mongoose');



//Schema de objeto de base de datos
const employeeSchema = new Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    office: {type: String, required: true},
    salary: {type: Number, required: true}

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('employee', employeeSchema)