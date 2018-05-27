(function(){
    'use strict';
    angular
    .module('App')
    .controller('userDetailsController', userDetailsController);

    function userDetailsController(AuthService, $scope){
        var self = this;
        $scope.tab = 1;
        $scope.setTab = function(newTab){
            $scope.tab = newTab;
        }
        $scope.isSet = function(tabNum){
          return $scope.tab === tabNum;
        }
        if (AuthService.user){
            self.fullName = AuthService.user.firstName + " " + AuthService.user.secondName;
            self.login = AuthService.user.username;
            self.firstName = AuthService.user.firstName;
            self.secondName = AuthService.user.secondName;
        }
    }
})();