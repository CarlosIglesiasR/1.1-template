const controller = {}

const employee = require ('../models/employee')




controller.getAll = async (req, response) => {
    const employees = await employee.find()
    response.json(employees);
}
controller.create = async (req, response) => {
    const newEmployee = new employee(req.body)
    console.log(newEmployee);
    await newEmployee.save();
    response.send({message: 'Empleado creado con éxito'})

}
controller.get = async (req, response) => {
   
    //const findedEmployee = await employee.findById(req.params.id)
    const findedEmployee = await employee.findOne({_id : req.params.id})
    response.json(findedEmployee);
}

controller.update = async (req, response) => {
    //findById(req.params.id, req.body)
    const updateEmployee = await employee.findOneAndUpdate({_id : req.params.id}, req.body);
    const responseEmployee = await employee.findOne({_id : req.params.id});


    response.json({message: 'Empleado actualizado con éxito',
                    result: responseEmployee})
}

controller.delete =  async (req, response) => {
    //findById(req.params.id)
    const deleteEmployee = await employee.findOneAndDelete({_id : req.params.id})
    response.json({message: 'Empleado borrado con éxito',
                    result: deleteEmployee})
}

module.exports = controller;