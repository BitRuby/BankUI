(function(){
    'use strict';
    angular
    .module('App')
    .controller('navigationController', navigationController);

    function navigationController($state, $scope, AuthService){
        var self = this;
        if (AuthService!=null)
            self.username = AuthService.user.firstName + " " + AuthService.user.secondName;
        /*
        var self = this;
        self.submit = function(){
            Authorize.setUser(null);
            Authorize.setLoggedOutInfo(true);
            $rootScope.loggedIn = false;
            $location.path('/login');
        }
        */
        self.submit = function(){
            AuthService.user = null;
            AuthService.flag = true;
            $state.go('login');
        }
        var searchicon = $("#search-icon");
        var menuicon = $("#menu-icon");
        var backicon = $("#back-icon");
        var navAll = $(".nav-all-collapse");
        var navSearch = $(".nav-search-collapse");
    
        var navbarHeader = $(".navbar-header");
        $( window ).resize(
            function() {
                if( $(window).width() >= 480 ){
                    mainmenu.css("display", "block");
                }
                if( $(window).width() < 480 ){
                    mainmenu.css("display", "none");
                }
            }
        );
        searchicon.click(
            function(){
                navAll.css("display", "none");
                navSearch.css("display", "block");
                navbarHeader.css("float", "left");
            }
        );
        backicon.click(
            function(){
                navAll.css("display", "block");
                navSearch.css("display", "none");
                navbarHeader.css("float", "none");
            }
        );
            menuicon.click(
                function(){
                    var mainmenu = document.getElementById("main-menu");
                    if(mainmenu.style.display === "none") {
                        mainmenu.style.display = "block";
                    }
                    else {
                        mainmenu.style.display = "none";
                    }
                }
            );
    }
})();