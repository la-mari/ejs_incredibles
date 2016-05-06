var User = require('../models/user');
var users = {};

users.index = function(req,res) {
  User.find({}, function(err, users){
    if(err){
      throw err;
    }
    res.render('welcome', {title: 'Express', users: users});
  });
};

users.logged_in = function(req,res){
  User.findOne({}, function(err, users){
    if(err){
      throw err;
    }
    res.render('logged_in', {title: 'Express', users: users});
  });
};

users.chat = function(req,res){
  res.redirect('/chat');
};
module.exports = users;
