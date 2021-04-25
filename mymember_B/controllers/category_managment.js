const category_managment = require("../models/category_managment");
const subCategory_managment = require("../models/sub_category_managment")
const { errorHandler } = require('../helpers/dbErrorHandler');
const { result } = require("lodash");

//new

//new

// const todo = require("../models/todo_schema")

exports.createCate = async(req,res)=>{
    const program = req.body.program;
    const category = req.body.category_name;
    const sub_category = req.body.add_sub_category;
    const new_labals = req.body.enter_label;
    const newColor = req.body.color;
    
    // const datas = req.body.
}

exports.Create = async (req, res) => {
    const program = req.body.program;
    const category_id = req.body.cate_id;
    const sub_cate_id = req.body.subCate_id;
    // const categories = req.body.category;

    const new_categ = req.body.category_name;
    const new_subCateg = req.body.add_sub_category;
    const new_labals = req.body.enter_label;
    const newColor = req.body.color;

    // const lebels = req.body.lebel;
    // const data = req.body.sub_category;
    // const color = req.body.color;
    const cate = 0
    
    category_id.forEach(function (cate_id) {
        category_managment.findByIdAndUpdate(cate_id, { $set: { category: categories[cate] } })
            .then((cat_resp) => {
                sub_cate_id[cate].forEach((items) => {
                    category_managment.findOne({ items: { "$in": "subCategory" } }).populate("subCategory")
                        .then((subCat_resp) => {
                            for (var details = 0; data[cate].length; details++) {
                                if (subCat_resp) {
                                    category_managment.findByIdAndUpdate(subCat_resp._id, { $set: { "subCategory.subCategories": details } }).populate("subCategory")
                                        .then((sub_detail) => {
                                            console.log(sub_detail);
                                        })
                                } else {
                                    const newSub = new subCategory_managment({
                                        subCategories: data[cate][details],
                                        lebelName: lebels[cate][details],
                                        color: color[cate][details]
                                    })
                                    newSub.save()
                                        .then((result) => {
                                            category_managment.findByIdAndUpdate(subCat_resp._id, { $set: { "subCategory.subCategories": details } }).populate("subCategory")
                                                .then((sub_detail) => {
                                                    console.log(sub_detail);
                                                });
                                            console.log(result)
                                        })
                                }
                            }
                        });
                });
                console.log(cat_resp)
            })
        cate = cate + 1
    });


    if (new_categ !== undefined) {
        for (var j = 0; j < new_categ.length; j++) {
            const ids = [];
            const categ = new_categ[j]

            const new_cate = new category_managment({
                category: categ,
                programName: program
            })
            new_cate.save()
                .then((response) => {
                    if (new_categ !== undefined) {
                        const newSub = 0;
                        for (var i = cate; i < new_categ[j].length; i++) {
                            const a = {
                                subCategory: new_subCateg[newSub][i],
                                lebelName: new_labals[newSub][i],
                                color: newColor[newSub][i]
                            }
                            ids.push(a)
                        }
                        subCategory_managment.insertMany(ids)
                            .then((resp) => {
                                const sub_ids = []
                                resp.forEach(items => {
                                    sub_ids.push(items._id)
                                });
                                category_managment.findOne({ $and: [{ programName: program }, { category: categ }] })
                                    .then((result) => {
                                        if (result) {
                                            console.log("category already exist create anathor")
                                        } else {
                                            console.log(response)
                                            category_managment.findByIdAndUpdate(result._id, { $push: { subCategory: sub_ids } })
                                                .then((cate_resp) => {
                                                    console.log(cate_resp)
                                                    res.send("category added sucessful");
                                                });
                                        }
                                    })
                            })
                    } else {
                        res.send("You didn't choose any sub categories")
                    }
                })

        }
    } else {
        res.send("data saved")
    }
};

exports.read = async (req, res) => {
    category_managment.find({})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
};

exports.by_program_name = async (req, res) => {
    const program = req.body.program;
    category_managment.find({ programName: program }).populate("subCategory")
        .then((resp) => {
            res.json(resp);
        }).catch((err) => {
            console.log(err)
            res.send(err);
        });
};

exports.remove = async (req, res) => {
    const id = req.body.id
    category_managment.deleteOne({ _id: id })
        .then((resp) => {
            console.log(resp)
            res.json("category_managment has been deleted successfully")
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
};


//


//