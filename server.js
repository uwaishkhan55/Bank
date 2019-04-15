const app = require('express')()
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'uwaishkhanbns@gmail.com',
         pass: 'uwaish55@@'
     }
 });
 const mailOptions = {
  from: 'uwaishkhanbns@gmail.com', // sender address
  to: 'uwaishkhan55@gmail.com', // list of receivers
  subject: 'your account number', // Subject line
  html: '<p>Your html here</p>'// plain text body
};
app.get('/',(req,res)=>
{ transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
    res.send("hello send email")
})
app.listen(3000,()=>
{
    console.log('server started')
})