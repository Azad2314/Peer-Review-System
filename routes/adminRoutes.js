const express = require('express');
const router = express.Router();

const controller= require('../controllers/adminController')

//admin can login 
router.post('/login',controller.signIn);

//admin can create a new admin 
router.post('/createAdmin',controller.reqFilter,controller.addAdmin);

//admin can view all the employees
router.get('/getEmployee',controller.reqFilter, controller.get_employee);

//admin can add a new employee
router.post('/addEmployee',controller.reqFilter,controller.add_employee);

//admin can update details of any employee
router.put('/updateEmployee',controller.reqFilter,controller.update_employee);

//admin can remove an employee from organization
router.delete('/deleteEmployee',controller.reqFilter,controller.delete_employee);

//admin can view the departments present in the organization
router.get('/viewDepartment',controller.reqFilter,controller.getDepartment);

//admin can add a new department
router.post('/addDepartment',controller.reqFilter,controller.add_department);

//admin can update details of a department
router.put('/updateDepartment',controller.reqFilter,controller.update_department);

//admin can delete the department from organization
router.delete('/deleteDepartment',controller.reqFilter,controller.delete_department);

module.exports = router;