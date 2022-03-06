const express = require("express");
const Client = require("../models/client");
const router = new express.Router();


//get all clients
router.get("/backend/clients", async (req, res) => {
  try {
    const clients = await Client.find();
    res.send(clients);
  } catch (e) {
    res.status(500).send();
  }
});





module.exports = router;
