const bcrypt = require("bcryptjs")
const validator = require("validator")

const db = require('../database/config')
global.db = db;

let User = function (data) {
  this.data = data
  this.errors = []
}

User.prototype.cleanUp = function () {
  if (typeof (this.data.username) != "string") { this.data.username = "" }
  if (typeof (this.data.password) != "string") { this.data.password = "" }

  // get rid of any bogus properties
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    password: this.data.password
  }
}

User.prototype.login = function () {
  return new Promise((resolve, reject) => {
    this.cleanUp()
    var sql = "SELECT  *FROM admin WHERE UserName = '" + this.data.username + "' and Password = '" + this.data.password + "';"
    db.query(sql, (err, result) => {
      if (err) {
        this.errors.push({msg: "Invalid"})
        reject(err)
      }
      if (result.length > 0) {
        resolve("Congrats!")
      }
      else {
        this.errors.push({msg: "Invalid username / Password"})
        reject("Invalid username / password.")
      }
    })
  })
}

User.prototype.savePasswordData = function () {
  return new Promise((resolve, reject) => {
    var oldpwd = this.data.OldPassword
    var newpwd = this.data.NewPassword
    var renewpwd = this.data.ReNewPassword

    if (newpwd != renewpwd) {
      this.errors.push({msg: "Password Not Matched"})
      reject()
      return
    }
    var sql = "UPDATE admin set Password = '" + newpwd + "' where AdminID = 1 && Password = '"+oldpwd+"' ";
    db.query(sql, (err, result) => {
      if (err) {
        this.errors.push({msg: "Please try again later"})
        reject(err)
      }
      else if(result.affectedRows>0) {
        console.log(result)
        this.errors.push({msg: "Successfully Updated Password"})
        resolve("Updated!")
      }
      else{
        this.errors.push({msg: "invalid old password"})
        reject()
      }
    })
  })
}

module.exports = User