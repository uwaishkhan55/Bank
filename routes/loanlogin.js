const route = require('express').Router()
const passport = require('passport')

route.get('/',(req,res)=>
{
    res.render('loanlogin')
}
)
route.post('/',
  passport.authenticate('local', {
    successRedirect: '/Take_loan',
    failureRedirect: '/loanlogin'
  })

)


module.exports = {
  route
}