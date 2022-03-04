const express = require("express");
const router = new express.Router();
const MainImage= require('../models/mainImage')

router.get("/image", async (req, res) => {
    try {
     const image = await MainImage.find();
      
      if (!image) {
        return res.status(404).send();
      }
     

      res.send(image[0].imageLocation);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  module.exports=router