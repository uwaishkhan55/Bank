const { Customers,Accounts,Customer_account } = require('../db')
const route = require('express').Router()
route.get('/',(req,res)=>
{
    res.render('signup')
})
route.post('/',async (req, res) => {
 
  var item1 = await Customers.create({
  username:req.body.reg_username,
  fullname:req.body.reg_fullname,
  password:req.body.reg_password,
  email:req.body.reg_email,
  gender:req.body.reg_gender,
  dateofbirth:req.body.reg_dob,
  city:req.body.reg_city,
  pincode:req.body.reg_pincode,
  customertype:req.body.reg_cust_type,
  accounttype:req.body.account_type
  }).then(async (user) => {
   await Accounts.create({
     customer_id:user.id,
     balance:0
  }).then(async (user)=>
  {
    
    await Customer_account.create({
         account_id:user.id,
         customer_id:user.customer_id
    })
    res.redirect('/login')
  })

  }).catch((err) => {
    throw err
  })
 
  
})
module.exports = {
  route
}