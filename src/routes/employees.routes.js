const { Router} = require ('express');
const router = Router()

const employeeCtrl = require ('../controllers/employees.controller.js')

router.get('/get/:id', employeeCtrl.get)
router.get('/get', employeeCtrl.getAll)
router.put('/update/:id', employeeCtrl.update)
router.post('/create', employeeCtrl.create)
router.delete('/delete/:id', employeeCtrl.delete)

module.exports = router;