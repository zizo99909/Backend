const express = require("express");
const router = new express.Router();
const Table= require('../models/table')

router.get("/table", async (req, res) => {
    try {
     const table = await Table.find();
      
      if (!table) {
        return res.status(404).send();
      }
     

      res.send(table);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  module.exports=router