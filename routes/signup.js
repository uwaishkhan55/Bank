const { Users } = require('../db')
const route = require('express').Router()
route.get('/',(req,res)=>
{
    res.render('signup')
})
route.post('/',async (req, res) => {
 
  let item = await Users.create({
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
  }).then((user) => {
      console.log("--------------------")
      console.log(user)
      console.log("--------------------")
    res.redirect('/login')
  }).catch((err) => {
    throw err
  })
})
module.exports = {
  route
}