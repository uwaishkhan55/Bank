const route = require('express').Router()
const passport = require('passport')
route.get('/',(req,res)=>
{
    if(req.user)
    return res.render('profile')
    res.render('login',"please Login")
}
)

module.exports = {
  route
}