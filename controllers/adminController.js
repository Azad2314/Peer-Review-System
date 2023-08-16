require('dotenv').config();
const res = require('express/lib/response');
const model = require('../models/adminModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { process_params } = require('express/lib/router');
const logger = require('../logger')

//to verify the login details for login 
const signIn = async (req, resp) => {
    var email = req.body.email;
    var password = req.body.password;

    model.checkEmail(email, (error, res) => {

        if (res.length == 0) {
            resp.send('email doesnot exist');
            logger.logger.log('error', 'email not found')
        }

        else
            model.checkPassword(email, password, (error, res) => {
                if (res) {
                    const token = jwt.sign({ admin_email: email, }, process.env.ACCESS_TOKEN_SECRET)
                    resp.header('auth-token', token).send(token);
                    logger.logger.log('info', 'token generated successfully')
                }
                else
                    resp.send('password incorrect')
                logger.logger.log('error', 'password wrong')

            })
    });
}

//to get all the employees from organization
const get_employee = (req, resp) => {

    model.getEmp((err, result) => {

        resp.send(result);

    })

}

//to add a new employee in organization
const add_employee = async (req, resp) => {

    //to encrypt password
    var value = req.body.password;
    const salt = await bcrypt.genSalt(10);
    value = await bcrypt.hash(value, salt)

    //details of employee
    var name = req.body.name;
    var age = req.body.age;
    var gender = req.body.gender;
    var department = req.body.department;
    var DOJ = req.body.dateOfJoining;
    var email = req.body.email;
    var password = value;

   let result= model.addEmp(name, age, gender, department, DOJ, email, password);
    resp.send('employee added successfully');
}

//to update details of employee
const update_employee = (req, resp) => {

    const data = [req.body.name, req.body.age, req.body.department, req.body.id]

    model.updateEmp(data);
    resp.send('employee info updated successfully')
}

//to delete an employee
const delete_employee = (req, resp) => {

    const value = req.body.id;
    model.deleteEmp(value);
    resp.send('employee deleted successfully')
}

//to view all departments 
const getDepartment = async (req, resp) => {
  try{
   let data= await model.getDept()
  // console.log(data)
   resp.send(data);
    }catch(err){
        resp.send(err)

    }
}

//to add a new department
const add_department = (req, resp) => {


    var name = req.body.name;
    var admin_id = req.body.admin_id;

    model.addDept(name, admin_id);
    resp.send('department added successfully');
}

//to update a department
const update_department = (req, resp) => {

    var id = req.body.id;
    var name = req.body.name;
    model.updateDept(id, name);
    resp.send('department updated successfully');
}

//to delete a department
const delete_department = (req, resp) => {

    const value = req.body.id;
    model.deleteDept(value);
    resp.send('department deleted successfully')
}

//to add a new admin in organization
const addAdmin = async (req, resp) => {
    var value = req.body.password;
    const salt = await bcrypt.genSalt(10);
    value = await bcrypt.hash(value, salt)

    const name = req.body.name;
    const email = req.body.email;
    const password = value;

    model.insertAdmin(name, email, password);
    resp.send('admin added successfully');
}

//middleware to check the authenticity of admin
const reqFilter = (req, resp, next) => {
    const token = req.header('auth-token');
    if (!token)
        resp.status(401).send('Access Denied')
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.admin = verified;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();

}

module.exports = {
    get_employee,
    add_employee,
    update_employee,
    delete_employee,
    getDepartment,
    add_department,
    update_department,
    delete_department,
    reqFilter,
    signIn,
    addAdmin

}