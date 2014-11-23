'use strict';

exports.init = function(req, res){
  res.render('index');
};

exports.about = function(req, res){
  res.render('about');
};

exports.newpage = function(req, res){
  res.render('newpage');
};

exports.person = function(req, res){
  res.render('person');
};