const fetch= require('node-fetch')

const getId = async(authToken,amount)=>{
    let req = {
      auth_token:authToken,
      delivery_needed:"false",
      amount_cents:amount,
      items:[]

    };
    
    const response = await fetch("https://accept.paymob.com/api/ecommerce/orders", {
      method: "POST",
      body: JSON.stringify(req),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
     return data.id
    }
    
    
    module.exports=getId