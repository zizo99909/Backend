const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendConfirmationEmail = (email,name,value)=>{
    sgMail.send({
        to:email,
        from:'payment@slimnasticsstudio.com',
        cc:'passant@slimnasticsstudio.com',
        subject:'Thanks for paying!',
        text:`Dear ${name} \n\tit’s slimnastics! We’re glad to inform you that we have confirmed your payment with ${value} egp. Thank you!.\n`
    })
 }

/*sgMail.send({
    to:'ahmosman96@gmail.com',
    from:'payment@slimnasticsstudio.com',
    cc:'zizo99909@gmail.com',
    subject:'Thanks for paying!',
    text:`Dear ahmed \n\tit’s slimnastics! We’re glad to inform you that we have confirmed your payment with 500 egp. Thank you!.\n`
})*/

 module.exports=sendConfirmationEmail