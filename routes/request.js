const route = require('express').Router()
const passport = require('passport')
const {information}=require('../db')
const {Loan}=require('../db')

route.get('/',async(req,res)=>
{let item=await information.findAll({
    where:{}
})
   res.send(item)
})
route.get('/loan',async(req,res)=>{
    let item=await Loan.findOne({
        where:{loan_id:req.user.id}
    })
       res.send(item)
})
module.exports={
    route
}