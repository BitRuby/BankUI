'use strict'; //Use Strict mode ES5
angular
.module('App', ['ui.router', 'hl.css.ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

        var loginState = {
            name: 'login',
            url: '/login',
            views: {
                login: {
                    templateUrl: 'components/login/login.tpl.html',
                    controller: 'loginController as log'
                }
            },
            data: {
                css: {
                    login: 'data/style/login-inputs.css'
                }
            }
        }
        var dashboardState = {
            name: 'dashboard',
            url: '/dashboard',
            views: {
                nav: {
                    templateUrl: 'components/navigation/navigation.tpl.html',
                    controller: 'navigationController as nav'
                },
                menu: {
                    templateUrl: 'components/menu/menu.tpl.html',
                    controller: 'menuController as menu'
                },
                content: {
                    templateUrl: 'components/dashboard/dashboard.tpl.html',
                    controller: 'dashboardController as dash'
                }
            },
        }
        var transferState = {
            name: 'newTransfer',
            url: '/newTransfer',
            views: {
                nav: {
                    templateUrl: 'components/navigation/navigation.tpl.html',
                    controller: 'navigationController as nav'
                },
                menu: {
                    templateUrl: 'components/menu/menu.tpl.html',
                    controller: 'menuController as menu'
                },
                content: {
                    templateUrl: 'components/new-transfer/new-transfer.tpl.html',
                    controller: 'transferController as trans'
                }
            },
        }
        var userDetailsState = {
            name: 'userDetails',
            url: '/userDetails',
            views: {
                nav: {
                    templateUrl: 'components/navigation/navigation.tpl.html',
                    controller: 'navigationController as nav'
                },
                menu: {
                    templateUrl: 'components/menu/menu.tpl.html',
                    controller: 'menuController as menu'
                },
                content: {
                    templateUrl: 'components/user-details/user-details.tpl.html',
                    controller: 'userDetailsController as user'
                }
            },
        }
        var historyState = {
            name: 'history',
            url: '/history',
            views: {
                nav: {
                    templateUrl: 'components/navigation/navigation.tpl.html',
                    controller: 'navigationController as nav'
                },
                menu: {
                    templateUrl: 'components/menu/menu.tpl.html',
                    controller: 'menuController as menu'
                },
                content: {
                    templateUrl: 'components/history/history.tpl.html',
                    controller: 'historyController as his'
                }
            },
        }
        var cardsState = {
            name: 'cards',
            url: '/cards',
            views: {
                nav: {
                    templateUrl: 'components/navigation/navigation.tpl.html',
                    controller: 'navigationController as nav'
                },
                menu: {
                    templateUrl: 'components/menu/menu.tpl.html',
                    controller: 'menuController as menu'
                },
                content: {
                    templateUrl: 'components/cards/cards.tpl.html',
                    controller: 'cardsController as card'
                }
            },
        }
        var defaultState = {
            name: 'default',
            url: '/',
            redirectTo: 'login'
        }
        $urlRouterProvider.otherwise('/');

        $stateProvider.state(loginState);
        $stateProvider.state(dashboardState);
        $stateProvider.state(userDetailsState);
        $stateProvider.state(transferState);
        $stateProvider.state(historyState);
        $stateProvider.state(cardsState);
        $stateProvider.state(defaultState);
    }
])
.run(/*
    function($transitions, $state) {
        $transitions.onSuccess({}, function($transitions){
            var toState = $transitions.$to();
            var auth = $transitions.injector().get('AuthService');
            if (!auth.user) {
                if (toState.name != 'login'){
                    $state.go('login');
                }
            }
            else{
                if (toState.data && toState.data.role) {
                    var hasAccess = false;
                    for (var i = 0; i < auth.user.roles.length; i++) {
                        var role = auth.user.roles[i];
                        if (toState.data.role == role) {
                            hasAccess = true;
                            break;
                        }
                    }
                    if (!hasAccess) {
                        $state.go('login');
                    }
                }
                if (toState.name == 'login'){
                    $state.go('dashboard');
                }
            }
          });
    }*/
); 
    /*function(AuthService, $rootScope, $state){
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options){  
            if (!AuthService.user) {
                if (toState.name != 'login'){
                    event.preventDefault();
                    $state.go('login');
                }
            }
            else {
                if (toState.data && toState.data.role) {
                    var hasAccess = false;
                    for (var i = 0; i < AuthService.user.roles.length; i++) {
                        var role = AuthService.user.roles[i];
                        if (toState.data.role == role) {
                            hasAccess = true;
                            break;
                        }
                    }
                    if (!hasAccess) {
                        event.preventDefault();
                        $state.go('default');
                    }
                }
            }
        });
    }*/

        /*

        $routeProvider
        .when('/login', {
            resolve: {
                "check": function($location, $rootScope){
                    if($rootScope.loggedIn){
                        $location.path('/dashboard');
                    }
                }
            },
            templateUrl: 'components/login/login.tpl.html',
            controller: 'loginController as log'
        })
        .when('/dashboard', {
            resolve: {
                "check": function($location, $rootScope){
                    if(!$rootScope.loggedIn){
                        $location.path('/login');
                    }
                }
            },
            templateUrl: 'components/dashboard/dashboard.tpl.html',
            controller: 'dashboardController as dash'
        })
        .when('/', {
            redirectTo: '/login'
        })
        .otherwise({
            redirectTo: '/'
        });
        */


