const route = require('express').Router()
const passport = require('passport')
const {Accounts,Transaction}=require('../db')
route.get('/',(req,res)=>
{
    if(req.user)
    return res.render('deposit')
    res.render('login')
})
route.post('/put', async(req,res)=>
{ console.log("---------------------"+"req.body")
  let item1=await Accounts.findOne({where:{accountNo:req.body.accountno}})
  let balance=parseInt(item1.balance)+parseInt(req.body.money)
  let item = await Accounts.update({
  balance: balance,
}, {
  where: {
    accountNo:req.body.accountno
  }
}
)
console.log(";;;;;;;;;;;;;"+req.body.money+"///////////////////")
let item2=await Transaction.create({
 amount:parseInt(req.body.money),
 account_id:item1.id,
 transactionmode:"credit",
 totalBalance:balance.toString()
})
   
res.redirect('/deposit')
})
 
 


module.exports = {
  route
}