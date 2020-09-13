const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const Product = require("../models/product");

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem With The Image" + err,
      });
    }
    const { price, name, description, quantity } = fields;
    if (!name || !description || !price || !quantity) {
      return res.status(400).json({
        error: " Please include all Fields",
      });
    }
    if (!file.photo) {
      return res.status(400).json({
        error: " Please select product imagenpm",
      });
    }
    let product = new Product(fields);
    var filename = `${Date.now()} ${file.photo.name}`;
    var oldPath = file.photo.path;
    var newPath = path.join(
      __dirname,
      "../",
      "../",
      "frontend",
      "src",
      "assests",
      "/",
      filename
    );
    var rawData = fs.readFileSync(oldPath);

    fs.writeFile(newPath, rawData, function (err) {
      if (err) {
        console.log(err);
      }
      console.log("Successfully uploaded");
      console.log(filename);
    });

    product.image = filename;
    product.save((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Saving Tshirt In Db Failed" + err,
        });
      }

      res.json(product);
    });
  });
};

exports.getProducts = (req, res) => {
  Product.find().exec((err, products) => {
    if (err) {
      return res.status(400).json({
        error: "No Product Found" + err,
      });
    }
    res.json(products);
  });
};
