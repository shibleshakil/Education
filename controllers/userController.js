const User = require('../models/User')

exports.login = function(req, res) {
  let user = new User(req.body)
  user.login().then(function(result) {
    req.session.user = {username: user.data.username}
    res.redirect('/')
  }).catch(function(e) {
     res.render('admin_login',{errors: user.errors})
  })
}

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/')
  })
}

exports.home = function(req, res) {
  if (req.session.user) {
    res.render('index', {admin: req.session.user.username})
  } else {
    res.render('index', {admin: 'undefined'})
  }
}

exports.loginpage = function(req,res){
  if(req.session.user){
    res.render('index', {admin: req.session.user.username})
  }
  else{
    res.render('admin_login')
  }
}

exports.about = function(req,res){
  if(req.session.user){
    res.render('about', {admin: req.session.user.username})
  }
  else{
    res.render('about', {admin:'undefined'})
  }
}

exports.service = function(req,res){
  if(req.session.user){
    res.render('service', {admin: req.session.user.username})
  }
  else{
    res.render('service', {admin:'undefined'})
  }
}

exports.gallery = function(req,res){
  if(req.session.user){
    res.render('gallery', {admin: req.session.user.username})
  }
  else{
    res.render('gallery', {admin:'undefined'})
  }
}

exports.event = function(req,res){
  if(req.session.user){
    res.render('event', {admin: req.session.user.username})
  }
  else{
    res.render('event', {admin:'undefined'})
  }
}

exports.contact = function(req,res){
  if(req.session.user){
    res.render('contact', {admin: req.session.user.username})
  }
  else{
    res.render('contact', {admin:'undefined'})
  }
}

exports.updatePassword = function (req, res) {
  let user = new User (req.body)
  user.savePasswordData().then(function (result) {
      
      res.render('admin_update_password', {admin: req.session.user.username, errors: user.errors})
  }).catch(function (e) {
    
    res.redirect('/login')
  })
}