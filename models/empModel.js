const conn = require('../config')
const bcrypt = require('bcrypt');
const { compare } = require('bcrypt');


var empData={}
empData.listEmp = (email,callback) => {
    conn.query(`SELECT id,name,gender,department FROM employees where department =(select department from employees where email='${email}') `,(error, res) => {
        if (error) throw error;
    else return callback(null,res);
        
    })
}

empData.checkId=(id,email,callback) => {
    conn.query(`select * from employees where email='${email}' and id='${id}'`,(err,result) => {
        if (err) throw err;
        return callback(null,result)
        
    })
}
empData.checkName=(id,name,callback) => {
    conn.query(`select * from employees where name='${name}' and id='${id}'`,(err,result) => {
        if (err) throw err;
        return callback(null,result)
        
    })
}
empData.storeFeedback =(id,name,rating,comments) => {
    conn.query(`INSERT INTO feedback(id,name,rating,comments) Values(${id},'${name}',${rating},'${comments}')`,(err,result) => {
        if (err) throw err;
         return;
    })
}
empData.rating =(emp_id,callback) => {

    conn.query(`SELECT avg(rating) as "your rating" from feedback where id = '${emp_id}'`,(err,result) => {
        if (err) throw err;
        return callback(null,result);
    })

}

empData.checkEmail= (email,callback) => {


    conn.query(`SELECT email from employees where email='${email}' `, (error, result) => {
        if (error) throw error;
        return callback(null,result);
        })
}

empData.checkPassword= (email,password,callback) => {


    conn.query(`SELECT password from employees where email='${email}' `, (error, result) => {
        if (error) throw error;
        bcrypt.compare(password, result[0].password, function(err, res) {

            return callback(null,res);
             
          });
        })
}

module.exports=empData;