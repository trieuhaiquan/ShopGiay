//---------------------------------------------
		//Nivo slider
//---------------------------------------------
function chay_slide()
{
    $('#ensign-nivoslider-3').nivoSlider({
                effect: 'random',
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 500,
                pauseTime: 5000,
                startSlide: 0,
                directionNav: true,
                controlNavThumbs: true,
                pauseOnHover: true,
                manualAdvance: false
                }); 
    
    $('#ensign-nivoslider').nivoSlider({
				effect: 'slideInRight',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: false,
				pauseOnHover: false,
				manualAdvance: true
			 });
			 
	$('#ensign-nivoslider-2').nivoSlider({
				effect: 'fade',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: false,
				pauseOnHover: true,
				manualAdvance: true
			 });
}

fashion_shoe = angular.module("fashion_shoe", ["ngRoute"]);
fashion_shoe.controller("all_page", function($scope) {

});

fashion_shoe.controller("main_controller", function($scope){
    setTimeout(chay_slide, 200);
});

fashion_shoe.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/v_home.html",
            controller: "main_controller" 
        })        
        .when("/about-us", {
            templateUrl: "pages/v_about_us.html",
            controller: "main_controller"
        })
        .when("/contact-us", {
            templateUrl: "pages/v_contact_us.html",
            controller: "main_controller"
        })
        .when("/wishlist", {
            templateUrl: "pages/v_wishlist.html",
            controller: "main_controller"
        })
        .when("/single-product", {
            templateUrl: "pages/v_single_product.html",
            controller: "main_controller"
        })
        .when("/shop", {
            templateUrl: "pages/v_shop.html",
            controller: "main_controller"
        })
        .when("/shop-list", {
            templateUrl: "pages/v_shop_list.html",
            controller: "main_controller"
        })
        .when("/shoping-cart", {
            templateUrl: "pages/v_shoping_cart.html",
            controller: "main_controller"
        })
        .when("/login", {
            templateUrl: "pages/v_login.html",
            controller: "main_controller"
        })
        .when("/account", {
            templateUrl: "pages/v_account.html",
            controller: "main_controller"
        })
        .when("/checkout", {
            templateUrl: "pages/v_checkout.html",
            controller: "main_controller"
        })
        .when("/404", {
            templateUrl: "pages/v_404.html",
            controller: "main_controller"
        })

        .when("/index.html", {
            templateUrl: "pages/v_home.html",
            controller: "main_controller"
        })        
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
});
