const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const program_product = require('../models/program_product');
const { errorHandler } = require('../helpers/dbErrorHandler');
const { response } = require('express');

exports.productById = (req, res, next, id) => {
    program_product.findById(id)
        .exec((err, product) => {
            if (err || !product) {
                return res.status(400).json({
                    error: 'Product not found'
                });
            }
            req.product = product;
            next();
        });
};

exports.read = (req, res) => {
    req.product.photo = undefined;
    return res.json(req.product);
};

exports.create = (req, res) => {
    const { name, description, programName, price, category, quantity, shipping, subCategory } = fields;
    if (req.file) {
        return res.status(400).json({
            error: 'Image could not be uploaded'
        });
    }
    // check for all fields
    if (!name || !description || !price || !category || !quantity || !shipping || subCategory || programName) {
        return res.status(400).json({
            error: 'All fields are required'
        });
    }

    let product = new program_product(fields);

    // 1kb = 1000
    // 1mb = 1000000
    if (files.photo) {
        if (files.photo.size > 1000000) {
            return res.status(400).json({
                error: 'Image should be less than 1mb in size'
            });
        }
        product.photo.data = fs.readFileSync(files.photo.path);
        product.photo.contentType = files.photo.type;
    }
    product.save((err, result) => {
        if (err) {
            console.log('PRODUCT CREATE ERROR ', err);
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(result);
    });
};

exports.remove = (req, res) => {
    let product = req.params.productId;
    program_product.remove({ _id: product }, (err, deletedProduct) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Product deleted successfully'
        });
    });
};


exports.update = (req, res) => {
    const data = req.body;
    const product_id = req.params.productId;
    if (req.file) {
        return res.status(400).json({
            error: 'Image could not be uploaded'
        });
    }
    let product = req.product;
    product = _.extend(product, fields);
    // 1kb = 1000
    // 1mb = 1000000
    if (req.file.size > 1000000) {
        return res.status(400).json({
            error: 'Image should be less than 1mb in size'
        });
    }
    program_product.updateOne({ _id: product_id }, data)
        .then((response) => {
            console.log(req.file)
            cloudenary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.cloud_api_key,
                api_secret: process.env.cloud_api_secret
            });
            const path = req.file.path
            const uniqueFilename = new Date().toISOString()
            cloudenary.uploader.upload(
                path,
                { public_id: `product_photo/${uniqueFilename}`, tags: `photo` }, // directory and tags are optional
                function (err, image) {
                    if (err) return res.send(err)
                    console.log('file uploaded to Cloudinary')
                    const fs = require('fs')
                    fs.unlinkSync(path)
                    program_product.updateOne({ _id: product_id }, { $set: { photo: image.url } })
                        .then((response) => {
                            console.log(response)
                            res.send(response)
                        });
                }
            );
        }).catch((err) => {
            res.send(err)
        })
};

/**
 * sell / arrival
 * by sell = /products?sortBy=sold&order=desc&limit=4
 * by arrival = /products?sortBy=createdAt&order=desc&limit=4
 * if no params are sent, then all products are returned
 */

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    program_product.find()
        .select('-photo')
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};

/**
 * it will find the products based on the req product category
 * other products that has the same category, will be returned
 */

exports.listRelated = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    program_product.find({ _id: { $ne: req.product }, category: req.product.category })
        .limit(limit)
        // .populate('category', '_id name')
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};

exports.listCategories = (req, res) => {
    program_product.distinct('category', {}, (err, categories) => {
        if (err) {
            return res.status(400).json({
                error: 'Categories not found'
            });
        }
        res.json(categories);
    });
};

/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */

exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === 'price') {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    program_product.find(findArgs)
        .select('-photo')
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};

exports.photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set('Content-Type', req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
};

exports.listSearch = (req, res) => {
    // create query object to hold search value and category value
    const query = {};
    // assign search value to query.name
    if (req.query.search) {
        query.name = { $regex: req.query.search, $options: 'i' };
        // assigne category value to query.category
        if (req.query.category && req.query.category != 'All') {
            query.category = req.query.category;
        }
        // find the product based on query object with 2 properties
        // search and category
        program_product.find(query, (err, products) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(products);
        }).select('-photo');
    }
};

exports.decreaseQuantity = (req, res, next) => {
    let bulkOps = req.body.order.products.map(item => {
        return {
            updateOne: {
                filter: { _id: item._id },
                update: { $inc: { quantity: -item.count, sold: +item.count } }
            }
        };
    });

    program_product.bulkWrite(bulkOps, {}, (error, products) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update product'
            });
        }
        next();
    });
};
