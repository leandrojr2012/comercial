const express = require('express');
const route = express.Router()
const accesscontroller = require('./src/controllers/access/accesscontroller')
const homecontroller = require('./src/controllers/home/homecontroller')
const registercontroller = require('./src/controllers/register/registercontroller')

route.get('/', accesscontroller.access)
route.get('/home', homecontroller.index)
route.get('/home/register', registercontroller.register)

route.post('/registerservice', registercontroller.registerservice )



module.exports = route
