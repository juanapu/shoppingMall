/*
* @Author: Administrator
* @Date:   2017-08-28 08:51:29
* @Last Modified by:   Administrator
<<<<<<< HEAD
* @Last Modified time: 2017-10-08 16:50:47
=======
* @Last Modified time: 2017-09-23 09:56:16
>>>>>>> e27f21fd25d8594f11fc989e3425af3418ee285e
*/

"use strict";
require('./index.css');
var _mm=require('util/mm.js');
var _user= require('service/user-service.js');
var _cart= require('service/cart-service.js');

var nav={
	init : function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
<<<<<<< HEAD
=======
		return this 
>>>>>>> e27f21fd25d8594f11fc989e3425af3418ee285e
	},
	bindEvent : function(){
		var _this=this;
		//register event
		$(".js-register").click(function(){
			_mm.doRegister();
		});
		//login click event
		$('.js-login').click(function(){
			_mm.doLogin();
			_this.loadUserInfo();

		});
		//logout click event
		$('.js-logout').click(function(){
			_user.logout(function(res){
				window.location.reload();
			},function(){
				_mm.errorTips("errMsg");
			});
		});
<<<<<<< HEAD
		//go cart
		$('.js-gocart').click(function(){
			window.location.href='./cart.html';
		});
=======

>>>>>>> e27f21fd25d8594f11fc989e3425af3418ee285e
	},
	loadUserInfo : function(){
		_user.checkLogin(function(res){
			$('.user.not-login').hide().siblings('.user.login').show()
				.find('.username').text(res.username);
			console.log("the login is right");
		},function(errMsg){
			$(".user.login").hide().siblings('user.not-login').show();
			console.log("errMsg"+errMsg);
		});
	},
	loadCartCount : function(){
		_cart.getCartCount(function(res){
			$('.nav .cart-count').text(res||0);
		},function(errMsg){
			$('.nav .cart-count').text(0);
		});
	}
};

<<<<<<< HEAD
$(function(){
	nav.init();
});
module.exports = nav;
=======
module.exports = nav.init();
>>>>>>> e27f21fd25d8594f11fc989e3425af3418ee285e


