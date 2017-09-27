/*
* @Author: Administrator
* @Date:   2017-09-03 09:02:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-23 09:56:05
*/
"use strict";

require('./index.css');
var _mm=require('util/mm.js');

var header={
	init: function(){
		var _this=this;
		_this.bindEvent();
	},
	bindEvent: function(){
		var _this=this;
				$(".header button.search-btn").click(function(){
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


module.exports=header;