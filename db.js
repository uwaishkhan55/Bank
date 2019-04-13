const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  retry: {
    max: 10
  },
  storage: __dirname+'/tests2.db',
})

function generateMyId()
{
     return Math.floor(1000000000 + Math.random() * 900000000);
}
const Accounts = db.define('account',{
    accountNo: {
            type: Sequelize.UUID,
            defaultValue: function() {
           return generateMyId()
         }
       },
       customer_id:Sequelize.INTEGER,
       balance:Sequelize.INTEGER,
       type:Sequelize.STRING(10),
 })
const Customers = db.define('customer', {
  username:Sequelize.STRING(20),
  fullname:Sequelize.STRING(20),
  password:Sequelize.STRING(20),
  email:Sequelize.STRING(20),
  gender:Sequelize.STRING(20),
  dateofbirth:Sequelize.STRING(20),
  city:Sequelize.STRING(20),
  pincode:Sequelize.INTEGER,
  customertype:Sequelize.STRING(20),
  accounttype:Sequelize.STRING(20),
 
})
const Customer_account = db.define('customer_account',{
    account_id:Sequelize.INTEGER,
    customer_id:Sequelize.INTEGER
})
Customers.hasMany(Customer_account, {foreignKey: 'customer_id'})
Customer_account.belongsTo(Customers, {foreignKey: 'customer_id'})
Accounts.hasMany(Customer_account, {foreignKey: 'account_id'})
Customer_account.belongsTo(Accounts, {foreignKey: 'account_id'})

// Vendors.hasMany(Products)
// Products.belongsTo(Vendors)

// const Users = db.define('user', {
//   name: {
//     type: Sequelize.STRING(30),



// CartItems.belongsTo(Users)
// CartItems.belongsTo(Products)
// Products.hasMany(CartItems, {foreignKey: {unique: true}})
// Users.hasMany(CartItems, {foreignKey: {unique: true}})


// Accounts.hasMany(Users, {foreignKey: 'user_id'})
// Users.belongsTo(Accounts, {foreignKey: 'user_id'})
// Products.hasMany(CartItems, {foreignKey: 'product_id'})
// CartItems.belongsTo(Products, {foreignKey: 'product_id'})
db.sync(()=>
{
    console.log('working fine')
})
module.exports = {
db,Customers,Accounts,Customer_account
}