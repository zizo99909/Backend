const express = require("express");
require("./db/mongoose");
const clientRouter = require("./routers/client");
const homeRouter = require("./routers/homePage");
const gymRouter = require("./routers/gymPage");
const balletRouter = require("./routers/balletPage");
const fitnessRouter = require("./routers/fitnessPage");
const mainImageRouter = require('./routers/mainImage')
const adminRouter = require("./routers/admin");
const tableRouter = require('./routers/table')
const authToken = require("./paymob/authToken");
const getId = require("./paymob/getId");
const getPaymentKey = require("./paymob/getPaymentKey");
const Client = require("./models/client");
const cors = require("cors");
const crypto =  require('crypto')
const sendConfirmationEmail = require('./emails/payment')

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const app = express();
app.get("/backend/it",(req,res) => {
	res.send("heheh");
})

app.use(cors(corsOptions));
app.use(express.json());
app.use(clientRouter);
app.use(homeRouter);
app.use(gymRouter);
app.use(balletRouter);
app.use(fitnessRouter);
app.use(mainImageRouter);
app.use(tableRouter)
app.use("/admin", adminRouter);
app.use("/uploads", express.static("uploads"));
var emailClient=[];
//paymob
app.post("/backend/payment", async (req, res) => {
  const clientId = req.body.clientID;
  const client = await Client.find({ clientID: clientId });
   
  if (client.length===0) {
    return res.send("NONE");
  }
  emailClient=client
  const amountt = client[0].amount * 100;
  const data = authToken();
  data
    .then(function (result1) {
      const id = getId(result1, amountt);

      id.then(function (result2) {
        const paymentToken = getPaymentKey(
          result1,
          result2,
          client[0].email,
          amountt,
          client[0].firstName,
          client[0].lastName
        );
        paymentToken
          .then(function (result3) {
            res.send({
              paymentToken: result3,
              firstName: client[0].firstName,
              lastName: client[0].lastName,
              amount: client[0].amount,
            });
          })
          .catch((error) => {
            console.log("Error!", error);
          });
      }).catch((error) => {
        console.log("Error!", error);
      });
    })
    .catch((error) => {
      console.log("Error!", error);
    });
});

/*app.post('/callback',async(req,res)=>{
   console.log(req.body)
   
})*/


app.get("/backend/callback", async (req, res) => {
  const ordered = req.query;
  const hmac = ordered.hmac;
 
  const string =
    ordered.amount_cents +
    ordered.created_at +
    ordered.currency +
    ordered.error_occured +
    ordered.has_parent_transaction +
    ordered.id +
    ordered.integration_id +
    ordered.is_3d_secure +
    ordered.is_auth +
    ordered.is_capture +
    ordered.is_refunded +
    ordered.is_standalone_payment +
    ordered.is_voided +
    ordered.order +
    ordered.owner +
    ordered.pending +
    ordered['source_data.pan'] +
    ordered['source_data.sub_type'] +
    ordered['source_data.type']+
    ordered.success;
    
  var hmac1 = crypto.createHmac('sha512',process.env.SHA_SECRET)
  data=hmac1.update(string)
  gen_hmac = data.digest('hex')
  
  
  if(gen_hmac===hmac){
    sendConfirmationEmail(emailClient[0].email,emailClient[0].firstName,emailClient[0].amount)
    res.send('Thanks for paying a confrimation email will be sent to your email address shortly')

  }else{
  res.status(500).send("unsecure HMAC");}
});

module.exports = app;
