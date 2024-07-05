// routes/authors.js

const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const Book = require("../models/books");
const sequelize = require("../util/databaseConnect");

/*--------------------------------------------------------------------------*/
//GET /books : Retrieve a list of all books

router.get("/", async (req, res) => {
  try {
    //const book = await Book.findAll();
    //res.json(book);
    res.send("hello from books");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*--------------------------------------------------------------------------*/
//GET /books/{book_id} : Retrieve details of a specific book

router.get("/:id", async (req, res) => {
  try {
    // const book = await Book.findByPk(parseInt(req.params.id));

    // if (book) {
    //   res.json(book);
    // } else {
    //   res.status(404).json({ error: "Book not found" });
    // }
    res.send("hello from books id");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*--------------------------------------------------------------------------*/
//POST /books : Add a new book

router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*--------------------------------------------------------------------------*/
//PUT /books/{book_id} : Update details of an existing book

// router.put("/:id", async (req, res) => {
//   try {
//     const [updated] = await User.update(req.body, {
//       where: { id: req.params.id },
//     });
//     if (updated) {
//       const updatedUser = await User.findByPk(req.params.id);
//       res.json(updatedUser);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

/*--------------------------------------------------------------------------*/

//DELETE /books/{book_id} : Delete a specific book

// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await User.destroy({
//       where: { id: req.params.id },
//     });
//     if (deleted) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

/*--------------------------------------------------------------------------*/

module.exports = router;
