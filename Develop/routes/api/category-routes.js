const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// get all categories
router.get("/", (req, res) => {
  // find all categories

  Category.hasMany(Product, {
    foreignKey: "category_id",
  });
  Category.findAll({
    include: [
      {
        model: Product,
        as: "products",
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error("OOPS!");
      res.sendStatus(500);
    });
});

// get single category

router.get("/:id", (req, res) => {
  Category.hasMany(Product, {
    foreignKey: "category_id",
  });

  Category.findAll({
    include: [
      {
        model: Product,
        as: "products",
      },
    ],
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      // Always good to handle errors!
      console.error("OOPS!");
      res.sendStatus(500);
    });
});

// create new category
router.post("/", (req, res) => {
  Category.create(req.body).then((data) => {
    res.status(200);
  });
});

// update category
router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    //result="Record Updated";
    res.sendStatus(200);
  });
});

//delete product
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    res.sendStatus(200);
  });
});

module.exports = router;
