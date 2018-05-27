(function(){
    'use strict';
    angular
        .module('App')
        .controller('transferController', transferController);

    function transferController($scope, AuthService){
        var self = this;
        $scope.tab = 1;
        $scope.setTab = function(newTab){
            $scope.tab = newTab;
        }
        $scope.isSet = function(tabNum){
            return $scope.tab === tabNum;
        }
        if(AuthService.user) {
            self.iban = AuthService.user.iban;
        }
    }

})();