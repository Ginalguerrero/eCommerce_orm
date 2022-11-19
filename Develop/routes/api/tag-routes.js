const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: "product_id",
  });

  Tag.findAll({
    include: [
      {
        model: Product,
        as: "products",
      },
    ],
  }).then((data) => {
    res.send(data);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: "product_id",
  });

  Tag.findAll({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        as: "products",
      },
    ],
  }).then((data) => {
    res.send(data);
  });
});

router.post("/", (req, res) => {
  Tag.create(req.body).then((data) => {
    res.sendStatus(200);
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((product) => {
    // find all associated tags from ProductTag
    res.sendStatus(200);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  // delete a category by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    res.sendStatus(200);
  });
});

module.exports = router;
