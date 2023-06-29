const express = require('express');
const route = express.Router()
const accesscontroller = require('./src/controllers/access/accesscontroller')
const homecontroller = require('./src/controllers/home/homecontroller')
const registercontroller = require('./src/controllers/register/registercontroller')
const logincontroller = require('./src/controllers/login/logincontroller')
const eAdmin = require('./src/middleware/access')

route.get('/', accesscontroller.access)
route.get('/home', eAdmin, homecontroller.index)
route.get('/home/register', registercontroller.register)
route.get('/login', logincontroller.login)

route.post('/registerservice', registercontroller.registerservice)
route.post('/loginservice', logincontroller.loginservice)



module.exports = route
