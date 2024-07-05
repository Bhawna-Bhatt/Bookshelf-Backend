// routes/authors.js

const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const Author = require("../models/authors");
const sequelize = require("../util/databaseConnect");

/*--------------------------------------------------------------------------*/
// 1. GET /authors : Retrieve a list of all authors

router.get("/", async (req, res) => {
  try {
    res.send("Hello from author");
    //const author = await Author.findAll();
    //res.json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*--------------------------------------------------------------------------*/
// 2. GET /authors/{author_id} : Retrieve details of a specific author

router.get("/:id", async (req, res) => {
  try {
    // const author = await Author.findByPk(parseInt(req.params.id));

    // if (author) {
    //   res.json(author);
    // } else {
    //   res.status(404).json({ error: "Author not found" });
    // }
    res.send("hello from author id");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*--------------------------------------------------------------------------*/
// 3. POST /authors : Add a new author

router.post("/", async (req, res) => {
  try {
    const author = await Author.create(req.body);
    //const author = await Author.create(body);
    res.status(201).json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*--------------------------------------------------------------------------*/

// 4. PUT /authors/{author_id} : Update details of an existing author

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

// 5. DELETE /authors/{author_id} : Delete a specific author

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
