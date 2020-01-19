/*
    Author: Raihan
    Objective: Retrieving the data for the function called in data controller
*/

const bcrypt = require("bcryptjs")
const validator = require("validator")

const db = require('../database/config')
global.db = db;

let DataRetrieve = function (data) {
    this.data = data
    this.errors = []
}


//student list retrieve
DataRetrieve.prototype.getStudentList = function () {
    return new Promise((resolve, reject) => {
        var sql = "select *from student;"
        db.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            else {
                this.data = result
                resolve("")
            }
        })
    })
}

//teacher list retrieve
DataRetrieve.prototype.getTeacherList = function () {
    return new Promise((resolve, reject) => {
        var sql = "select *from teacher;"
        db.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            else {
                this.data = result
                resolve("")
            }
        })
    })
}

//paid student list retrieve
DataRetrieve.prototype.getPaidStudentList = function () {
    return new Promise((resolve, reject) => {
        var sql = "select *from student where StudentName IN (select name from payment where Type='student');"
        db.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            else {
                this.data = result
                resolve("")
            }
        })
    })
}


//unpaid student list retrieve
DataRetrieve.prototype.getPayableStudentList = function () {
    return new Promise((resolve, reject) => {
        var sql = "select *from student where StudentName NOT IN (select name from payment where Type='student');"
        db.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            else {
                this.data = result
                resolve("")
            }
        })
    })
}

//paid teacher list retrieve
DataRetrieve.prototype.getPaidTeacherList = function () {
    return new Promise((resolve, reject) => {
        var sql = "select *from teacher where TeacherName IN (select name from payment where Type='teacher');"
        db.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            else {
                this.data = result
                resolve("")
            }
        })
    })
}

//unpaid teacher list retrieve
DataRetrieve.prototype.getPayableTeacherList = function () {
    return new Promise((resolve, reject) => {
        var sql = "select *from teacher where TeacherName NOT IN (select name from payment where Type='teacher');"
        db.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            else {
                this.data = result
                resolve("")
            }
        })
    })
}

/* getting Student's information */

DataRetrieve.prototype.getStudentInfo = function () {
    return new Promise((resolve, reject)=>{
        let id = this.data.params.id
        var sql = "SELECT *FROM student where StudentID = '"+id+"';"
        db.query(sql,(err, result)=>{
            if (err) {
                reject(err)
            }
            else {
                this.data = result
                resolve("")
            }
        })
    })
}


/* getting teacher's information */

DataRetrieve.prototype.getTeacherInfo = function () {
    return new Promise((resolve, reject)=>{
        let id = this.data.params.id
        var sql = "SELECT *FROM teacher where TeacherID = '"+id+"';"
        db.query(sql,(err, result)=>{
            if (err) {
                reject(err)
            }
            else {
                this.data = result
                resolve("")
            }
        })
    })
}

module.exports = DataRetrieve