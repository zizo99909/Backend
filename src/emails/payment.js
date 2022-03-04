const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendConfirmationEmail = (email,name,value)=>{
    sgMail.send({
        to:email,
        from:'zizo99909@gmail.com',
        subject:'Thanks for paying!',
        text:`Hey ${name} thanks for paying ${value} egp to slimnastics `

    })
}

module.exports=sendConfirmationEmail