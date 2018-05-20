(function(){
    'use strict';
    angular.module('App')
    .controller('dashboardController', dashboardController);

    function dashboardController(AuthService){
        var self = this;
        if(AuthService.user)
            self.amount = AuthService.user.balance;
            self.iban = AuthService.user.iban;
    }

})();