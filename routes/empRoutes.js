const express = require('express');
const router = express.Router();

const controller= require('../controllers/empController')


router.post('/login',controller.signIn);

router.get('/listEmployee', controller.authentication,controller.listEmployee);

router.post('/feedback',controller.authentication,controller.feedback);

router.get('/viewRating',controller.authentication,controller.viewRating);



module.exports = router;