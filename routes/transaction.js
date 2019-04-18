const route = require('express').Router()
const passport = require('passport')
const {Accounts,Transaction}=require('../db')


route.get("/", (req,res)=>
{
  if(req.user)  return res.render('transaction')
   res.render('login')
})
route.post('/put', async(req,res)=>
{
  let item=await Accounts.findOne({where:{accountNo:req.body.accountno}})
  let item1=await Transaction.findAll({where:{account_id:item.id}})
  console.log(JSON.stringify(item1))
   res.render("transactiontable",{item1})
})






module.exports = {
  route
}