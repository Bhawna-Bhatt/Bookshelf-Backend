// routes/genre.js

const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const Genre = require("../models/genres");
const sequelize = require("../util/databaseConnect");

/*--------------------------------------------------------------------------*/
//GET /genres : Retrieve a list of all genres

router.get("/", async (req, res) => {
  try {
    //const genre = await Genre.findAll();
    //res.json(genre);
    res.send("hello from genre");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*--------------------------------------------------------------------------*/
//GET /genres/{genre_id} : Retrieve details of a specific genre

router.get("/:id", async (req, res) => {
  try {
    // const genre = await Genre.findByPk(parseInt(parseInt(req.params.id)));

    // if (genre) {
    //   res.json(genre);
    // } else {
    //   res.status(404).json({ error: "Genre not found" });
    // }
    res.send("hello from genre id");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*--------------------------------------------------------------------------*/
//POST /genres : Add a new genre

router.post("/", async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    res.status(201).json(genre);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*--------------------------------------------------------------------------*/

module.exports = router;
