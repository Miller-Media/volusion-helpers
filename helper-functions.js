var VOLUSION_HELPERS = VOLUSION_HELPERS || {};

VOLUSION_HELPERS.detect = {
	isHome: function(){
		returnValue = location.pathname.toLowerCase().indexOf('default') > -1 || location.pathname=="/" ? true : false;
		return returnValue;
	},
	isCategory: function(){
		returnValue = location.pathname.toLowerCase.indexOf('_s') > -1 || location.pathname.toLowerCase().indexOf('-s') > -1 || location.pathname.toLowerCase().indexOf('searchresults') > -1 ? true : false;
		return returnValue;
	},
	isProductPage: function(){
		returnValue = location.pathname.toLowerCase.indexOf('_p') > -1 || location.pathname.toLowerCase().indexOf('-p') > -1 || location.pathname.toLowerCase().indexOf('productdetails') > -1 ? true : false;
		return returnValue;
	},
	isCheckout: function(){
		returnValue = location.pathname.toLowerCase.indexOf('one-page-checkout') > -1 ? true : false;
		return returnValue;
	},
	isShoppingCart: function(){
		returnValue = location.pathname.toLowerCase.indexOf('shoppingcart') > -1 ? true : false;
		return returnValue;
	}
};

VOLUSION_HELPERS.layout = {
	moveGoButton: function(){
		
	}
};