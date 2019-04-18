const { Loan_Customers,Loan,Customer_loan } = require('../db')
const route = require('express').Router()
route.get('/',(req,res)=>
{
    res.render('loansignup')
})
route.post('/',async (req, res) => {
 
  var item1 = await Loan_Customers.create({
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
   await Loan.create({
     loan_id:user.id,
     balance:0
  }).then(async (user)=>
  {
    
    await Customer_loan.create({
         loan_id:user.id,
         loancustomerId:user.id
         
    })
    res.redirect('/loanlogin')
  })

  }).catch((err) => {
    throw err
  })
 
  
})
module.exports = {
  route
}