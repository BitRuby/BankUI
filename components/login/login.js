
angular.module('App')
//.factory("Authorize", Authorize)
.service("AuthService", AuthService);

function AuthService(){
    return {
        user: {},
        flag: false
    }
}
/*
function Authorize(){
    var user;
    var id;
    var cond = false;

    var authorize = {
        setUser: setUser,
        currentUser: currentUser,
        setLoggedOutInfo: setLoggedOutInfo,
        getLoggedOutInfo: getLoggedOutInfo
    }
    return authorize;

    function setUser(id){
        this.id = id;
    }
    function currentUser(){
        return this.id;
    }
    function setLoggedOutInfo(cond){
        this.cond = cond;
    }
    function getLoggedOutInfo(){
        return this.cond;
    }
}
*/
(function(){
    'use strict';
    angular
    .module('App')
    .controller('loginController', loginController);
    function loginController($http, $q, $state, $scope, $rootScope, AuthService){
        var self = this;
        self.submit = function(){
            var REST_SERVICE_URI = 'http://127.0.0.1:5500/BankUI/json/users.json';
            $http({
                url: REST_SERVICE_URI,
                method: "GET"
            }).then(function (response) {
                var records = response.data.records;
                for (var i=0; i < records.length; i++){
                    if ( records[i].username == self.username &&
                        records[i].password == self.password ){
                            AuthService.user = records[i];
                            console.log(records[i]);
                            $rootScope.loggedIn = true;
                            $state.go('dashboard');
                        }
                }
                self.message = 'Authetication Failed. Invalid credentials provided';
            }, function (errResponse) {
                self.message = 'Authetication Failed. Invalid credentials provided';
            });
        }
        if (AuthService.flag==true)
            self.showTouchID = true;
        self.enter = function(){
            if (event.which == 13){
                self.submit();
            }
        }
    }
    
/*
    angular.module('App')
    .controller('temp', temp)
    .controller('loginController', loginController);
    function loginController($http, $location, $rootScope, Authorize, $scope, $q){
        var self = this;        
        self.submit = function(){
            $http.get('http://127.0.0.1:5500/angular-app/json/users.json')
            .then(function(response){
                var records = response.data.records;
                for (var i=0; i < records.length; i++){
                    if ( records[i].username == self.username &&
                        records[i].password == self.password ){
                            Authorize.setUser(records[i].id);
                            $rootScope.loggedIn = true;
                            $location.path('/dashboard');
                        }
                }
                if ( Authorize.currentUser() == null ){
                    if (!self.password != "" || !self.username != "") { self.message = "Fields can't be empty!";}
                    else{ self.message = "Invalid credentials provided"; }
                }
            });
        }
        self.enter = function(){
            if (event.which == 13){
                self.submit();
            }
        }
        if (Authorize.getLoggedOutInfo())
        {
            self.showTouchID=true;
        }
    }
    function temp($http, $q){
        var user = {username: "John", password: "Doe"};
        var REST_SERVICE_URI = "";
        var deferredObject = $q.defer();
        $http.get(REST_SERVICE_URI, user).then(
            function(response){
                deferredObject.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while send user');
                defferedObject.reject(errResponse);
            }
        );
        return deferredObject.promise;
    }
*/
})();
