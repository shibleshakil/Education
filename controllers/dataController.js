const DataInsert = require('../models/DataInsert')

var excel = require('excel4node')


exports.addStudent = function (req, res) {
    if (req.session.user) {
        res.render('add_student', { admin: req.session.user.username })
    }
    else {
        res.redirect('/login')
    }
}

exports.enteringStudent = function (req, res) {
    let datainsert = new DataInsert (req)
    datainsert.saveStudentData().then(function (result) {
        res.render('add_student', {admin: req.session.user.username, errors: datainsert.errors})
    }).catch(function (e) {
        res.redirect('/login')
    })
}

exports.addteacher = function (req, res) {
    if (req.session.user) {
        res.render('add_teacher', { admin: req.session.user.username })
    }
    else {
        res.redirect('/login')
    }
}

exports.enteringTeacher = function (req, res) {
    let datainsert = new DataInsert(req)
    datainsert.saveTeacherData().then(function (result) {
        res.render('add_teacher', {admin: req.session.user.username, errors: datainsert.errors})
    }).catch(function (e) {
        res.redirect('/login')
    })
}

exports.addPayment = function (req, res) {
    if (req.session.user) {
        res.render('add_payment', { admin: req.session.user.username })
    }
    else {
        res.redirect('/login')
    }
}

exports.enteringPayment = function (req, res) {
    let datainsert = new DataInsert(req)
    datainsert.savePaymentData().then(function (result) {
        res.render('add_payment', {admin: req.session.user.username, errors: datainsert.errors})
    }).catch(function (e) {
        res.redirect('/login')
    })
}

exports.adminUpdatePassword = function (req, res) {
    if (req.session.user) {
        res.render('admin_update_password', { admin: req.session.user.username })
    }
    else {
        res.redirect('/login')
    }
}

/*
    Author: Raihan
    Objective: Creating the function for retrieving data for DataRetrieve
*/

const DataRetrieve = require('../models/DataRetrieve')


//get the student list
exports.getStudent = function (req, res) {
    let dataRetrieve = new DataRetrieve([])
    dataRetrieve.getStudentList().then(function (result) {
        res.render('student-list', {admin: req.session.user.username, info: dataRetrieve.data} )
    }).catch(function (e) {
        console.log(e)
        res.redirect('/login')
    })
}

//get the teacher list
exports.getTeacher = function (req,res) {
    let dataRetrieve = new DataRetrieve([])
    dataRetrieve.getTeacherList().then(function (result) {
        res.render('teacher-list', {admin: req.session.user.username, info: dataRetrieve.data})
    }).catch(function (e) {
        console.log(e)
        res.redirect('/login')
    })
}

//get the teacher info
exports.teacherInfo = function (req, res) {
    let dataRetrieve = new DataRetrieve(req)
    dataRetrieve.getTeacherInfo().then( function (result){
        res.render('teacher-info', {admin: req.session.user.username, info: dataRetrieve.data})
    })
    .catch(function (e) {
        console.log(e)
        res.redirect('/login')
    })
}

//get the student info
exports.studentInfo = function (req, res) {
    let dataRetrieve = new DataRetrieve(req)
    dataRetrieve.getStudentInfo().then( function (result){
        res.render('student-info', {admin: req.session.user.username, info: dataRetrieve.data})
    })
    .catch(function (e) {
        console.log(e)
        res.redirect('/login')
    })
}

//get the paid student list
exports.getPaidStudent = function (req, res) {
    let dataRetrieve = new DataRetrieve([])
    dataRetrieve.getPaidStudentList().then(function (result) {
        res.render('paid-student', {admin: req.session.user.username, info: dataRetrieve.data} )
    }).catch(function (e) {
        console.log(e)
        res.redirect('/login')
    })
}

//get the unpaid student list
exports.getPayableStudent = function (req, res) {
    let dataRetrieve = new DataRetrieve([])
    dataRetrieve.getPayableStudentList().then(function (result) {
        res.render('payable-student', {admin: req.session.user.username, info: dataRetrieve.data} )
    }).catch(function (e) {
        console.log(e)
        res.redirect('/login')
    })
}

//get the paid teacher list
exports.getPaidTeacher = function (req, res) {
    let dataRetrieve = new DataRetrieve([])
    dataRetrieve.getPaidTeacherList().then(function (result) {
        res.render('paid-teacher', {admin: req.session.user.username, info: dataRetrieve.data} )
    }).catch(function (e) {
        console.log(e)
        res.redirect('/login')
    })
}

//get the unpaid teacher list
exports.getPayableTeacher = function (req, res) {
    let dataRetrieve = new DataRetrieve([])
    dataRetrieve.getPayableTeacherList().then(function (result) {
        res.render('payable-teacher', {admin: req.session.user.username, info: dataRetrieve.data} )
    }).catch(function (e) {
        console.log(e)
        res.redirect('/login')
    })
}

//-------------------------save the pages data in excel---------------------

exports.saveExcel = function(req,res){
    var workbook = new excel.Workbook()
    var worksheet = workbook.addWorksheet('Sheet 1')

    // Create a reusable style
    var style = workbook.createStyle({
        font: {
        color: '#FF0800',
        size: 12
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -'
    });

    var dataRetrieve = new DataRetrieve([])
    dataRetrieve.getPayableStudentList().then(function(result){
        console.log(dataRetrieve.data)
        for(var i=0; i<dataRetrieve.data.length; i++){
            console.log(dataRetrieve.data[i].PhoneNumber)
            worksheet.cell(i+1,1).string(dataRetrieve.data[i].StudentName).style(style)
            worksheet.cell(i+1,2).string(dataRetrieve.data[i].PhoneNumber).style(style)
            worksheet.cell(i+1,3).string(dataRetrieve.data[i].Class).style(style)
        }
            var tempfile = require('tempfile');
            var tempFilePath = tempfile('.xlsx');
            console.log("tempFilePath : ", tempFilePath);
            workbook.write(tempFilePath, function(err,result) {
                res.sendFile(tempFilePath, function(err){
                    console.log('---------- error downloading file: ', err);
                });
                console.log('file is written');
            });
    }).catch(function(e){
        console.log(e);
    })

    
}


exports.saveExcel = function(req,res){
    var workbook = new excel.Workbook()
    var worksheet = workbook.addWorksheet('Sheet 1')

    // Create a reusable style
    var style = workbook.createStyle({
        font: {
        color: '#FF0800',
        size: 12
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -'
    });

    var dataRetrieve = new DataRetrieve([])
    dataRetrieve.getPayableTeacherList().then(function(result){
        console.log(dataRetrieve.data)
        for(var i=0; i<dataRetrieve.data.length; i++){
            console.log(dataRetrieve.data[i].PhoneNumber)
            worksheet.cell(i+1,1).string(dataRetrieve.data[i].TeacherName).style(style)
            worksheet.cell(i+1,2).string(dataRetrieve.data[i].PhoneNumber).style(style)
        }
            var tempfile = require('tempfile');
            var tempFilePath = tempfile('.xlsx');
            console.log("tempFilePath : ", tempFilePath);
            workbook.write(tempFilePath, function(err,result) {
                res.sendFile(tempFilePath, function(err){
                    console.log('---------- error downloading file: ', err);
                });
                console.log('file is written');
            });
    }).catch(function(e){
        console.log(e);
    })

    
}


exports.saveExcel = function(req,res){
    var workbook = new excel.Workbook()
    var worksheet = workbook.addWorksheet('Sheet 1')

    // Create a reusable style
    var style = workbook.createStyle({
        font: {
        color: '#FF0800',
        size: 12
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -'
    });

    var dataRetrieve = new DataRetrieve([])
    dataRetrieve.getPaidStudentList().then(function(result){
        console.log(dataRetrieve.data)
        for(var i=0; i<dataRetrieve.data.length; i++){
            console.log(dataRetrieve.data[i].PhoneNumber)
            worksheet.cell(i+1,1).string(dataRetrieve.data[i].StudentName).style(style)
            worksheet.cell(i+1,2).string(dataRetrieve.data[i].PhoneNumber).style(style)
            worksheet.cell(i+1,3).string(dataRetrieve.data[i].Class).style(style)
        }
            var tempfile = require('tempfile');
            var tempFilePath = tempfile('.xlsx');
            console.log("tempFilePath : ", tempFilePath);
            workbook.write(tempFilePath, function(err,result) {
                res.sendFile(tempFilePath, function(err){
                    console.log('---------- error downloading file: ', err);
                });
                console.log('file is written');
            });
    }).catch(function(e){
        console.log(e);
    })

    
}


exports.saveExcel = function(req,res){
    var workbook = new excel.Workbook()
    var worksheet = workbook.addWorksheet('Sheet 1')

    // Create a reusable style
    var style = workbook.createStyle({
        font: {
        color: '#FF0800',
        size: 12
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -'
    });

    var dataRetrieve = new DataRetrieve([])
    dataRetrieve.getPaidTeacherList().then(function(result){
        console.log(dataRetrieve.data)
        for(var i=0; i<dataRetrieve.data.length; i++){
            console.log(dataRetrieve.data[i].PhoneNumber)
            worksheet.cell(i+1,1).string(dataRetrieve.data[i].TeacherName).style(style)
            worksheet.cell(i+1,2).string(dataRetrieve.data[i].PhoneNumber).style(style)
        }
        var tempfile = require('tempfile');
        var tempFilePath = tempfile('.xlsx');
        console.log("tempFilePath : ", tempFilePath);
        workbook.write(tempFilePath, function(err,result) {
            res.sendFile(tempFilePath, function(err){
                console.log('---------- error downloading file: ', err);
            });
            console.log('file is written');
        });
    }).catch(function(e){
        console.log(e);
    })

    
}


exports.saveExcel = function(req,res){
    var workbook = new excel.Workbook()
    var worksheet = workbook.addWorksheet('Sheet 1')

    // Create a reusable style
    var style = workbook.createStyle({
        font: {
        color: '#FF0800',
        size: 12
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -'
    });

    var dataRetrieve = new DataRetrieve([])
    dataRetrieve.getStudentList().then(function(result){
        console.log(dataRetrieve.data)
        for(var i=0; i<dataRetrieve.data.length; i++){
            console.log(dataRetrieve.data[i].PhoneNumber)
            worksheet.cell(i+1,1).string(dataRetrieve.data[i].StudentName).style(style)
            worksheet.cell(i+1,2).string(dataRetrieve.data[i].PhoneNumber).style(style)
            worksheet.cell(i+1,3).string(dataRetrieve.data[i].Class).style(style)
        }
        var tempfile = require('tempfile');
        var tempFilePath = tempfile('.xlsx');
        console.log("tempFilePath : ", tempFilePath);
        workbook.write(tempFilePath, function(err,result) {
            res.sendFile(tempFilePath, function(err){
                console.log('---------- error downloading file: ', err);
            });
            console.log('file is written');
        });
    }).catch(function(e){
        console.log(e);
    })
}


exports.saveExcel = function(req,res){
    var workbook = new excel.Workbook()
    var worksheet = workbook.addWorksheet('Sheet 1')

    // Create a reusable style
    var style = workbook.createStyle({
        font: {
        color: '#FF0800',
        size: 12
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -'
    });

    var dataRetrieve = new DataRetrieve([])
    dataRetrieve.getTeacherList().then(function(result){
        console.log(dataRetrieve.data)
        for(var i=0; i<dataRetrieve.data.length; i++){
            console.log(dataRetrieve.data[i].PhoneNumber)
            worksheet.cell(i+1,1).string(dataRetrieve.data[i].TeacherName).style(style)
            worksheet.cell(i+1,2).string(dataRetrieve.data[i].PhoneNumber).style(style)
        }
        var tempfile = require('tempfile');
        var tempFilePath = tempfile('.xlsx');
        console.log("tempFilePath : ", tempFilePath);
        workbook.write(tempFilePath, function(err,result) {
            res.sendFile(tempFilePath, function(err){
                console.log('---------- error downloading file: ', err);
            });
            console.log('file is written');
        });
    }).catch(function(e){
        console.log(e);
    })

    
}
