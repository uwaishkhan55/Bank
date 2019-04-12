const {db}=require('./db')
const Sequelize = require('sequelize')
function generateMyId()
{
     return Math.floor(1000000000 + Math.random() * 900000000);
}
const Accounts = db.define('account',{
    uuid: {
           type: Sequelize.UUID,
           defaultValue: function() {
          return generateMyId()
        },   
        primaryKey: true
      }
})


 async function get()
{
    let item = await Accounts.create(
        {
    
        }
    )
    console.log(item)
}
get()

