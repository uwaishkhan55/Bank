const route = require('express').Router()
const passport = require('passport')
const {Accounts}=require('../db')
route.get('/',(req,res)=>
{
    if(req.user)
    return res.render('profile')
    res.render('login')
})

route.post('deposit/put', async(req,res)=>
{
  let item1=await Accounts.findOne({where:{id:req.body.accountno}})
  let balance=parseInt(item1.balance)+parseInt(req.body.money)
  let item = await Accounts.update({
  balance: balance,
}, {
  where: {
    id:req.body.accountno
  }
}
)
res.render('profile')
})
route.get("/withdraw",async (req,res)=>
{
  if(req.user)  return res.render('withdraw')
   res.sendfile('withdraw.html')
})
route.get("/deposit",async (req,res)=>
{
  if(req.user)  return res.render('deposite')
   res.render('login')
})
route.get("/transaction",async (req,res)=>
{
  if(req.user)  return res.render('transaction')
   res.render('login')
})
route.post('/withdraw/put', async(req,res)=>
{ if(req.user)  return res.render('withdraw')
  let item1=await Accounts.findOne({where:{id:req.body.accountno}})
  let balance=parseInt(item1.balance)-parseInt(req.body.money)
  let item = await Accounts.update({
  balance: balance,
}, {
  where: {
    id:req.body.accountno
  }
}
)
res.render('profile',"succesfully added")

})
route.post('/deposite/put', async(req,res)=>
{ 
  let item1=await Accounts.findOne({where:{id:req.body.accountno}})
  let balance=parseInt(item1.balance)+parseInt(req.body.money)
  let item = await Accounts.update({
  balance: balance,
}, {
  where: {
    id:req.body.accountno
  }
}
)
res.render('profile',"succesfully added")
})


module.exports = {
  route
}