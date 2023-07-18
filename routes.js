const express = require('express');
const route = express.Router()
const accesscontroller = require('./src/controllers/access/accesscontroller')
const homecontroller = require('./src/controllers/home/homecontroller')
const registercontroller = require('./src/controllers/registerUser/registercontroller')
const logincontroller = require('./src/controllers/login/logincontroller')
const productcontroller = require('./src/controllers/product/productRegisterController')
const productviewscontroller = require('./src/controllers/product/productViewsController')
const productEntrycontroller = require('./src/controllers/product/productEntryController')
const suppliercontroller = require('./src/controllers/supplier/suppliercontroller')
const salescontroller = require('./src/controllers/sales/salescontroller')
const eFunc = require('./src/middleware/access')
const eAdmin = require('./src/middleware/accessAdm');


//ROUTES GET
route.get('/', accesscontroller.access)
route.get('/home', eFunc, homecontroller.index)
route.get('/home/user/register', registercontroller.register)
route.get('/home/product/register', eAdmin, productcontroller.product)
route.get('/home/product/views', eAdmin, productviewscontroller.productviews)
route.get('/home/product/entry', eAdmin, productEntrycontroller.productEntry)
route.get('/home/supplier', eAdmin, suppliercontroller.supplier)
route.get('/home/saleclient', salescontroller.saleclient)

//ROUTES POST
route.post('/registerservice', registercontroller.registerservice)
route.post('/loginservice', logincontroller.loginservice)
route.post('/productservice', productcontroller.productservice)
route.post('/productEntryService', productEntrycontroller.productEntryService)
route.post('/supplierservice', suppliercontroller.supplierservice)
route.post('/saleproductservice', salescontroller.saleproductservice)

//ROUTES UPDATE



//ROUTES DELETE



module.exports = route