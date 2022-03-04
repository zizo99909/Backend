const express = require("express");
const router = new express.Router();
const GymPage = require('../models/gymPage')

router.get('/content/2',async(req,res)=>{
    try {

        const page = await GymPage.find();
        if (!page) {
          return res.status(404).send();
        }
        res.status(200).send(page);
      } catch (e) {
        res.status(500).send(e);
      }
})

module.exports=router