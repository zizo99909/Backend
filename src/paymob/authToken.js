const fetch= require('node-fetch')

const authToken = async()=>{
let authReq = {
  
  api_key:
    "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRFMU5UQXNJbTVoYldVaU9pSnBibWwwYVdGc0luMC5tV2lwMDBzLXFJamlobDZpeXNWeUZiN3FJdFgwTE1GTExTZnZqekdvekluZW1pWktOYmt1MzJMYVA1MVVGV3F4N3ZSeFM0NzBhZHJtLUtvR0hrNkpDdw==",
};

const response = await fetch("https://accept.paymob.com/api/auth/tokens", {
  method: "POST",
  body: JSON.stringify(authReq),
  headers: { 'Content-Type': 'application/json' }
})
const data = await response.json()
 return data.token
}


module.exports=authToken