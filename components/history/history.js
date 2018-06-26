angular
.module("App")
.service("TransferService", TransferService);

function TransferService(){
    var arrays = [];
    return{
        setNewTransfer: function(amount, iban, date){
            arrays.push({"amount": amount, "iban": iban, "date": date});
        },
        getTransfers: function(){
            return arrays;
        }
    }
}

(function(){
    'use strict';
    angular.module('App')
        .controller('historyController', historyController);

    function historyController(AuthService, TransferService){
        var self = this;
        if(AuthService.user) {
            self.amount = AuthService.user.balance;
            self.iban = AuthService.user.iban;
        }
        self.historyData = TransferService.getTransfers();
    }

})();