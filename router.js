const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const dataController = require('./controllers/dataController')

router.get('/', userController.home)
router.get('/login', userController.loginpage)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.get('/about', userController.about)
router.get('/service', userController.service)
router.get('/gallery', userController.gallery)
router.get('/event', userController.event)
router.get('/contact', userController.contact)
router.post('/update-password', userController.updatePassword)


router.get('/add-student', dataController.addStudent)
router.post('/add-student', dataController.enteringStudent)
router.get('/add-teacher', dataController.addteacher)
router.post('/add-teacher', dataController.enteringTeacher)
router.get('/add-payment', dataController.addPayment)
router.post('/add-payment', dataController.enteringPayment)
router.get('/admin-update-password', dataController.adminUpdatePassword)


//getting data
router.get('/teacher-list', dataController.getTeacher)
router.get('/student-list', dataController.getStudent)
router.get('/teacher-info/:id', dataController.teacherInfo)
router.get('/student-info/:id', dataController.studentInfo)
router.get('/paid-student', dataController.getPaidStudent)
router.get('/payable-student', dataController.getPayableStudent)
router.get('/paid-teacher', dataController.getPaidTeacher)
router.get('/payable-teacher', dataController.getPayableTeacher)

// -----------------saving all files in Excel-------------------
router.get('/saveExcel', dataController.saveExcel)




module.exports = router
