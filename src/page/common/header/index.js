/*
* @Author: Administrator
* @Date:   2017-09-03 09:02:47
* @Last Modified by:   Administrator
<<<<<<< HEAD
* @Last Modified time: 2017-10-03 11:34:28
=======
* @Last Modified time: 2017-09-23 09:56:05
>>>>>>> e27f21fd25d8594f11fc989e3425af3418ee285e
*/
"use strict";

require('./index.css');
var _mm=require('util/mm.js');

var header={
	init: function(){
		var _this=this;
<<<<<<< HEAD
		_this.recallEvent();
		_this.bindEvent();
	},
	// get the url keyword and assign to the input 
	recallEvent: function(){
		var result=_mm.getUrlParam('keyword');
		if(result){
			$(".header .search-con input.search-input").val(result);
		};
	},
	bindEvent: function(){
		var _this=this;
		$(".header button.search-btn").click(function(){		
=======
		_this.bindEvent();
	},
	bindEvent: function(){
		var _this=this;
				$(".header button.search-btn").click(function(){
>>>>>>> e27f21fd25d8594f11fc989e3425af3418ee285e
			_this.searchSubmit();
		});
		$(".header .search-con input.search-input").focus(function(){
			var contVal=$(this).attr("placeholder");
			$(this).attr("placeholder","");
			$(this).blur(function(){
				$(this).attr("placeholder",contVal);
			});
		}).keyup(function(e){
			if(e.keyCode===13){
				_this.searchSubmit();
			}
		});
	},
	searchSubmit: function(){
		var textVal=$(".header .search-con input.search-input").val();
		if(textVal){
			console.log(textVal);
			window.location.href='./list.html?keyword='+textVal;
		}
	}
};
<<<<<<< HEAD
$(function(){
	header.init();
});
=======

>>>>>>> e27f21fd25d8594f11fc989e3425af3418ee285e

module.exports=header;