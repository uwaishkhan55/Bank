const route = require('express').Router()
const passport = require('passport')
const {information}=require('../db')
route.get('/',(req,res)=>
{
   // if(req.user)
     res.render('Take_loan')
  //  res.render('loanlogin')
})
route.post('/', async(req,res)=>{
  let item1=await information.create({
    Loanno:req.body.Loanno,
    balance:req.body.money,
    desc:req.body.desc
  })
  
/*{ console.log("---------------------"+"req.body")
  let item1=await Loan.findOne({where:{loanNo:req.body.Loanno}})
  let balance=parseInt(item1.balance)+parseInt(req.body.money)
  let item = await Loan.update({
  balance:balance
}, {
  where: {
    loanNo:req.body.Loanno
  }
}
)
res.redirect('/Take_loan')*/
//window.alert('your loan request has been registered')

})

module.exports = {
  route
}