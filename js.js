const {db,Customers,Accounts,Customer_account}=require('./db')
async function get()
{
  let item=await Accounts.findOne({where:{id:1}})
  console.log(JSON.stringify("--------------->>>>>>"+item.balance+"-----------"))
}
get()




