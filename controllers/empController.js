require('dotenv').config();
const model = require('../models/empModel');
const jwt = require('jsonwebtoken');


const signIn = async (req, resp) => {
    var email = req.body.email;
    var password = req.body.password;


    model.checkEmail(email, (error, res) => {

        if (res.length == 0)
            return resp.send('email doesnot exist');
        else
            model.checkPassword(email, password, (error, res) => {
                if (res) {
                    const token = jwt.sign({ emp_email: email, }, process.env.SECRET_KEY)
                    resp.header('auth-token', token).send(token);
                }
                else
                    resp.send('password incorrect')
            })
    })
}


const listEmployee = (req, resp) => {

    const email = req.emp
    model.listEmp(email, (err, result) => {
        resp.send(result)
    })

}

const feedback = (req, resp) => {

    const { id, name, rating, comments } = req.body;
    const email = req.emp;
    model.checkId(id, email, (error, res) => {
        if (res.length==1)
            resp.send('please provide correct input')

        else {
             model.checkName(id,name,(error,res)=> {
                 if(res.length==0)
                 resp.send('please provide correct input')
              else{
            model.storeFeedback(id, name, rating, comments);
            resp.send('feedback stored successfully');
              }
             })
        }
    })
}

const viewRating = (req, resp) => {
    const emp_id = req.query.id;
    const email = req.emp;
    model.checkId(emp_id, email, (error, res) => {
        if (res.length != 1)
            resp.send('please provide your correct id')
        else {
            model.rating(emp_id, (err, result) => {
                resp.send(result);
            })
        }
    })
}
const authentication = (req, resp, next) => {

    const token = req.header('auth-token');
    if (!token)
        resp.status(401).send('Access Denied')
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.emp = verified.emp_email;
    } catch (err) {
        return resp.status(401).send("Invalid Token");
    }
    return next();

}

module.exports = {
    signIn,
    listEmployee,
    feedback,
    viewRating,
    authentication
}