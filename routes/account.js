const route = require('express').Router()
const passport = require('passport')
const {Accounts,Customers,Customer_account}=require('../db')
route.get('/',(req,res)=>
{
    if(req.user)
    return res.render('account')
    res.render('login')
})
route.get('/details', async(req,res)=>
{ console.log("---------------------")
  let item1=await Customer_account.findOne(
      { include: [{ model: Customers},{
        model: Accounts
       }],
          where:{account_id:req.user.id}})
res.send(item1)
console.log("----------"+JSON.stringify(item1)+"---------------"+JSON.stringify(req.user)+"---->>")
})


module.exports = {
  route
}