var VOLUSION_HELPERS = VOLUSION_HELPERS || {};

VOLUSION_HELPERS.detect = {
	isHome: function(){
		returnValue = location.pathname.toLowerCase().indexOf('default') > -1 || location.pathname=="/" ? true : false;
		return returnValue;
	},
	isCategory: function(){
		returnValue = location.pathname.toLowerCase().indexOf('_s') > -1 || location.pathname.toLowerCase().indexOf('-s') > -1 || location.pathname.toLowerCase().indexOf('searchresults') > -1 ? true : false;
		return returnValue;
	},
	isProductPage: function(){
		returnValue = location.pathname.toLowerCase().indexOf('_p') > -1 || location.pathname.toLowerCase().indexOf('-p') > -1 || location.pathname.toLowerCase().indexOf('productdetails') > -1 ? true : false;
		return returnValue;
	},
	isCheckout: function(){
		returnValue = location.pathname.toLowerCase().indexOf('one-page-checkout') > -1 ? true : false;
		return returnValue;
	},
	isShoppingCart: function(){
		returnValue = location.pathname.toLowerCase().indexOf('shoppingcart') > -1 ? true : false;
		return returnValue;
	},
	isOrderFinished: function(){
		returnValue = location.pathname.toLowerCase().indexOf('orderfinished') > -1 ? true : false;
		return returnValue;
	}
};

VOLUSION_HELPERS.layout = {
	moveGoButton: function(){
		
	}
};

VOLUSION_HELPERS.helper = {
	getParameterByName: function(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	},

	getTextNodesIn: function(el) {
	    return $jQueryModern(el).find(":not(iframe)").addBack().contents().filter(function() {
	        return this.nodeType == 3;
	    });
	}
};

VOLUSION_HELPERS.cookies = {
	setCookie: function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
	},
	getCookie: function(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
		return "";
	}
};