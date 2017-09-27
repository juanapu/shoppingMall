/*
* @Author: Administrator
* @Date:   2017-08-31 09:10:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-23 09:57:28
*/
"use strict";

var _mm = require('util/mm.js');
var _cart = {
	//get cart's number
	getCartCount : function(resole,reject){
		_mm.request({
			url : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success : resole,
			error : reject
		});
	}
}

module.exports = _cart;