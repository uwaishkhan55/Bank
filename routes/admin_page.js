const route = require('express').Router()
const passport = require('passport')
const {Loan}=require('../db')
const {information}=require('../db')

route.get('/',(req,res)=>
{
   // if(req.user)
     res.render('admin_page')
  //  res.render('loanlogin')
})
route.post('/put', async(req,res)=>
  { console.log("---------------------"+"req.body")
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

  res.redirect('/index.html')
  })
  module.exports={
      route
  }