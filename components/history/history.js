angular
.module("App")
.service("TransferService", TransferService);

function TransferService(){
    return{
        
    }
}

(function(){
    'use strict';
    angular.module('App')
        .controller('historyController', historyController);

    function historyController(AuthService){
        var self = this;
        if(AuthService.user) {
            self.amount = AuthService.user.balance;
            self.iban = AuthService.user.iban;
        }
    }

})();