const route = require('express').Router()
const passport = require('passport')
const {Loan}=require('../db')
route.get('/',(req,res)=>
{
    if(req.user)
    return res.render('loan_deposit')
    res.render('loanlogin')
})

// route.get("/transaction",async (req,res)=>
// {
//   if(req.user)  return res.render('transaction')
//    res.render('login')
// })
route.post('/put', async(req,res)=>
{console.log("--------------------->>>>"+req.body)
  let item1=await Loan.findOne({where:{loanNo:req.body.loanno}})
  let balance=parseInt(item1.balance)-parseInt(req.body.money)
  let item = await Loan.update({
     balance: balance,
          }, {
           where: {
            loanNo:req.body.loanno
          }
}
)

res.redirect('/loan_deposit')

})


module.exports = {
  route
}