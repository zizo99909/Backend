const express = require("express");
const router = new express.Router();
const BalletPage = require('../models/balletPage')

router.get('/backend/content/3',async(req,res)=>{
    try {

        const page = await BalletPage.find();
        if (!page) {
          return res.status(404).send();
        }
        res.status(200).send(page);
      } catch (e) {
        res.status(500).send(e);
      }
})

module.exports=router
