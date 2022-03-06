const express = require("express");
const router = new express.Router();
const HomePage = require('../models/homePage')

router.get("/backend/home", async (req, res) => {
    try {
      const fitness = await HomePage.findOne({title:'fitness'});
      const gym = await HomePage.findOne({title:'gym'});
      const ballet = await HomePage.findOne({title:'ballet'});
      const pages = {fitness ,gym,ballet}
      
      if (!pages) {
        return res.status(404).send();
      }
     

      res.send(pages);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  module.exports=router
