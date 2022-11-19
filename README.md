# ecommerce_orm
Object-Relational Mapping (ORM): E-Commerce Back End

## Task
Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. The task is to build the back end for an e-commerce site configuring working Express.js API to use Sequelize to interact with a MySQL database.


This repository utilizes

JavaScript
Node
npm
MySQL
Sequelize

## DEMO
https://watch.screencastify.com/v/RSwlwsieanhBQTRFrpAK 

## Code snippet 


```
// update product
router.put("/:id", (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({
        where: {
          product_id: req.params.id,
        },
      });
    })
    
