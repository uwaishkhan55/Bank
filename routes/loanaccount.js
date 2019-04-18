const route = require('express').Router()
const passport = require('passport')
const {Loan,Customer_loan,Loan_Customers}=require('../db')
route.get('/',(req,res)=>
{
    //if(req.user)
     res.render('loanaccount')
    //res.render('loanlogin')
})
route.get('/details1', async(req,res)=>
{ console.log("---------------------")
  let item1=await Customer_loan.findOne(
      { include: [{ model: Loan_Customers},{
        model: Loan
       }],
          where:{loan_id:req.user.id}})
res.send(item1)
console.log("----------"+JSON.stringify(item1)+"---------------"+JSON.stringify(req.user)+"---->>")
})


module.exports = {
  route
}