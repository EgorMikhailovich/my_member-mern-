const tasks = require("../models/todo_schema");
const user = require("../models/user")
const { errorHandler } = require('../helpers/dbErrorHandler');
// const todo = require("../models/todo_schema")


exports.todoCreate = (req, res) => {
const Id = req.params.userId
const task = new tasks(req.body);
console.log(req.body,Id)
    task.save((err, data) => {
        if (err) {
            res.send("todo not add")
            console.log(err)
        }else{
        console.log(data)
        tasks.findByIdAndUpdate({_id:data._id},{$set:{ userId: Id}}).exec((err,todoData)=>{
            if(err){
                res.send({error:'user id is not add in todo'})
            }
            else{
                res.send({msg:'todo add successfully'})
                console.log(todoData)
            }
        })

        }
    });
};

exports.taskread = (req, res) => {
    tasks.find({userId : req.params.userId})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
}

exports.taskinfo = async (req, res) => {
    const id = req.params.todoId
    tasks.findById(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        })
}

exports.update = (req, res) => {
    const id = req.params.todoId;
    tasks.findByIdAndUpdate(id, { $set: req.body })
        .then((update_resp) => {
            console.log(update_resp)
            res.send(update_resp)
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
}

exports.remove = (req, res) => {
    const id = req.params.todoId;
    tasks.deleteOne({ _id: id })
        .then((resp) => {
            res.json(resp)
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
}