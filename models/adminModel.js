const res = require('express/lib/response');
const conn = require('../config')
const bcrypt = require('bcrypt');
const { compare } = require('bcrypt');

var adminData = {};
adminData.getEmp = (callback) => {
    conn.query('SELECT id,name,age,gender,department,email FROM employees', (error, res) => {
        if (error) throw error;
        else return callback(null,res);
        
        
    })
     
}

adminData.checkEmail= (email,callback) => {


    conn.query(`SELECT email from admin where email='${email}' `, (error, result) => {
        if (error) throw error;
        return callback(null,result);
        })
}

adminData.checkPassword= (email,password,callback) => {


    conn.query(`SELECT password from admin where email='${email}' `, (error, result) => {
        if (error) throw error;
        bcrypt.compare(password, result[0].password, function(err, res) {

            return callback(null,res);
            
          });
        })
}

adminData.addEmp = (name, age,gender,department,DOJ,email,password ) => {


    conn.query(`INSERT INTO employees(names,age,gender,department,dateofJoining,email,password) VALUES ('${name}', '${age}','${gender}','${department}','${DOJ}','${email}','${password}')`, (error, res) => {
        if (error) return ('error in query')
         else
        return res;
    })
}

adminData.updateEmp = (data) => {

   
    conn.query(`UPDATE employees SET name =?,age=?,department=? WHERE id=?`,data, (error, result) => {
        if (error) throw error;
        return;
    })
}

adminData.deleteEmp = (value) => {

   
    conn.query(`DELETE FROM employees  WHERE id=${value}`,(error, result) => {
        if (error) throw error;
        return;
    })
}

adminData.getDept = () => {
    return new Promise((resolve, reject)=>{
        conn.query('SELECT * FROM department',  (error, result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
    });
}

adminData.updateDept = (id,name) => {


    conn.query(`UPDATE department SET name ='${name}' WHERE dept_id=${id}`, (error, result) => {
        if (error) throw error;
        return;
    })
}

adminData.addDept = (name, admin_id ) => {


    conn.query(`INSERT INTO department(name,admin_id) VALUES ('${name}', '${admin_id}')`, (error, res) => {
        if (error) throw error;

        return
    })
}

adminData.deleteDept = (value) => {
    conn.query(`DELETE FROM department  WHERE dept_id=${value}`,(error, result) => {
        if (error) throw error;
        return;
    })
}

adminData.insertAdmin= (name,email,password) =>{

    conn.query(`INSERT INTO admin(name,email,password) VALUES('${name}','${email}','${password}')`,(err,result) => {
        if(err) throw err;
        return;
    })

}
module.exports = adminData;






