const express = require("express");
const MensSchema = require("../models/schema");
const router = new express.Router();

// POST: Creating Data in Database
router.post("/mens", async (req, res) => {
  try {
    const addingMensRecord = new MensSchema(req.body);
    console.log(req.body);
    const mensData = await addingMensRecord.save();
    res.status(201).send(mensData);
  } catch (error) {
    res.status(404).send(error);
  }
});

// GET: Reading Data in Database
router.get("/mens", async (req, res) => {
  try {
    const mensData = await MensSchema.find({}).sort({ rank: 1 });
    res.status(200).send(mensData);
  } catch (error) {
    res.status(404).send(error);
  }
});

// GET: getting the data by individual id
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const mensData = await MensSchema.findById(_id);
    res.status(200).send(mensData);
  } catch (error) {
    res.status(404).send(error);
  }
});

// PATCH: updating data by individual id
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMens = await MensSchema.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateMens);
  } catch (error) {
    res.status(404).send(error);
  }
});

// DELETE: deleting data by individual id
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteMens = await MensSchema.findByIdAndDelete(_id);
    res.status(200).send(`Successfully deleted ${deleteMens}`);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
