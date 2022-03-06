const express = require("express");
const router = new express.Router();
const FitnessPage = require('../models/fitnessPage')

router.get('/backend/content/1',async(req,res)=>{
    try {

        const page = await FitnessPage.find();
        if (!page) {
          return res.status(404).send();
        }
        res.status(200).send(page);
      } catch (e) {
        res.status(500).send(e);
      }
})

module.exports=router
