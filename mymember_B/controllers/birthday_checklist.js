const birthdayChecklist = require("../models/birthday_checklist")
const student = require("../models/addmember");
const user = require("../models/user");
var _ = require("lodash");

exports.BirthChecklist = (req, res) => {
    console.log(req.body)
    student.findById(req.params.studentId).exec((err, studentData) => {
        if (err) {
            res.send({ error: 'student data not found' })
        }
        else {
            var obj = {
                firstName: studentData.firstName,
                lastName: studentData.lastName,
                userId: req.params.userId
            }
            var checklist = _.extend(req.body, obj)
            console.log(checklist)
            var birthdaycheck = new birthdayChecklist(checklist);
            birthdaycheck.save((err, birthdaydata) => {
                if (err) {
                    res.send({ error: 'birthday checklist is not add' })
                }
                else {
                    student.findByIdAndUpdate(req.params.studentId, { $push: { birthday_checklist: birthdaydata._id } })
                        .exec((err, birthStd) => {
                            if (err) {
                                res.send({ error: 'student id is not store in birthday checklist' })
                            }
                            else {
                                user.findByIdAndUpdate(req.params.userId, { $push: { birthday_checkList_history: birthdaydata._id } })
                                    .exec((err, birthdayUpdate) => {
                                        if (err) {
                                            res.send({ error: 'birthday checklist is not add in school ' })
                                        }
                                        else {
                                            res.send(birthdaydata)
                                        }
                                  })
                            }
                        })
                }
            })
        }
    })
}

exports.remove = (req, res) => {
    var checkListId = req.params.checkListId;
    birthdayChecklist.findByIdAndRemove({ _id: checkListId }, (err, removebirthCheck) => {
        if (err) {
            res.send({ error: 'birthday checklist is not delete' })
        }
        else {
            user.update({ "birthday_checkList_history": removebirthCheck._id }, { $pull: { "birthday_checkList_history": removebirthCheck._id } })
                .exec((err, noteUpdateUser) => {
                    if (err) {
                        res.send({ error: 'birthday checklist is not delete in student' })
                    }
                    else {
                        res.send({ msg: 'birthday checklist is remove successfully' })
                    }
                })
        }

    })

}