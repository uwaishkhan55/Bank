const route = require('express').Router()
const passport = require('passport')
const {Accounts}=require('../db')
route.get('/',(req,res)=>
{
    if(req.user)
    return res.render('withdraw')
    res.render('login')
})

// route.get("/transaction",async (req,res)=>
// {
//   if(req.user)  return res.render('transaction')
//    res.render('login')
// })
route.post('/put', async(req,res)=>
{console.log("--------------------->>>>"+req.body)
  let item1=await Accounts.findOne({where:{accountNo:req.body.accountno}})
  let balance=parseInt(item1.balance)-parseInt(req.body.money)
  let item = await Accounts.update({
     balance: balance,
          }, {
           where: {
            accountNo:req.body.accountno
          }
}
)

res.redirect('/withdraw')

})


module.exports = {
  route
}