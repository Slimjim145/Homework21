const router = require("express").Router();
const db = require("../models");
require("dotenv").config();
const axios = require("axios");
const key = process.env.api_key;

router.get("/api/books", (req, res) => {
  db.Book.find({})
    .sort({ _id: -1 })
    .then((dbBooks) => {
      res.json(dbBooks);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/search/:search", async (req, res) => {
  try {
    let { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q="${req.params.search}"&key=${key}`
    );
    res.json(data).end();
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

module.exports = router;
