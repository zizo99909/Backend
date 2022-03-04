const argon2 = require('argon2')
const AdminJS = require('adminjs')

/** @type {AdminJS.After<AdminJS.ActionResponse>} */
const after=async(response)=>{
    if(response.record && response.record.errors){
      response.record.errors.password=response.record.errors.encryptedPassword
    }
    return response
  };

  /** @type {AdminJS.Before} */
const before=async(request) =>{
     if(request.method==='post'){
       const {password,...otherParams}= request.payload

       if(password){
         const encryptedPassword = await argon2.hash(password)
         return{
           ...request,
           payload:{
             ...otherParams,
             encryptedPassword
           }
         }
       }
     }
    return request
  };

  module.exports={after,before}