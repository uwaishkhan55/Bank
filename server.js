const express = require('express')
const app = express()
const { db } = require('./db')
const session =  require('express-session')
const passport = require('./passport')
const {Products,CartItems}=require('./db')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use(session({
  secret: 'em2b462m4hb6v2j4hv5 23n4jv',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
// app.use('/products', (require('./routes/login').route))
app.use('/login', (require('./routes/login').route))
app.use('/signup', (require('./routes/signup').route))
app.use('/profile', (require('./routes/profile').route))
// app.use('/cart', (require('./routes/cart').route))

const port=process.env.PORT || 3000

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log('Server started on http://localhost:9876')
    })
  })
.catch(console.error)