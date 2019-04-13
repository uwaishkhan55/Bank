const route = require('express').Router()
const passport = require('passport')
const {Accounts,Transaction}=require('../db')


route.get("/", (req,res)=>
{
  if(req.user)  return res.render('transaction')
   res.render('login')
})
route.get('/put', async(req,res)=>
{
  let item=await Accounts.findOne({where:{account_id:req.user.id}})
  let item1=await Transaction.findAll({where:{account_id:item.id}})
   res.send(item1)
})






module.exports = {
  route
}