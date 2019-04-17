const route = require('express').Router()
const passport = require('passport')
route.get('/',(req,res)=>
{
  if(req.user) return res.redirect('/profile')
    res.render('login')
}
)
route.post('/',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  })
)


module.exports = {
  route
}