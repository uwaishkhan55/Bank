const route = require('express').Router()
const passport = require('passport')
const {Accounts}=require('../db')


route.get("/", (req,res)=>
{
  if(req.user)  return res.render('transaction')
   res.render('login')
})




module.exports = {
  route
}