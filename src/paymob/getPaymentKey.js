const fetch= require('node-fetch')

const getPaymentKey = async(authToken,orderId,email,amount,firstName,lastName)=>{
    let req = {
      auth_token:authToken,
      amount_cents:amount,
      expiration:1000,
      order_id:orderId,
      billing_data:{
        apartment: "NA", 
        email: email, 
        floor: "NA", 
        first_name: firstName, 
        street: "NA", 
        building: "NA", 
        phone_number: "+86(8)9135210487", 
        shipping_method: "NA", 
        postal_code: "NA", 
        city: "NA", 
        country: "NA", 
        last_name: lastName, 
        state: "NA"
      },
      currency:"EGP",
      integration_id:1700613

    };
    
    const response = await fetch("https://accept.paymob.com/api/acceptance/payment_keys", {
      method: "POST",
      body: JSON.stringify(req),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
     return data.token
    }
    


module.exports=getPaymentKey
