(function(){
    'use strict';
    angular
        .module('App')
        .controller('transferController', transferController);

    function transferController($scope, AuthService, TransferService){
        var self = this;
        $scope.tab = 1;
        $scope.setTab = function(newTab){
            $scope.tab = newTab;
            self.infoSuccessDomestic = false;
            self.infoSuccessForeign = false;
            self.infoFalse = false;
        }
        $scope.isSet = function(tabNum){
            return $scope.tab === tabNum;
        }
        if(AuthService.user) {
            self.iban = AuthService.user.iban;
        }
        self.fromTemplate = function(){
            $scope.tab = 1;
            if (self.templates == "wozniak"){
                self.name = "Tom Wozniak";
                self.accountNumber = "10405030004500220089040000";
                self.bankNameX = "Bank Santander LTD";
                self.address = "Plaça de la Ciutat de Bruges, s/n, 46001 València, Spain";
                self.amount = parseInt("100");
            }
            else{
                self.name = "Lisa Simpson";
                self.accountNumber = "50111170709101000000041430";
                self.bankNameX = "Bank Canada";
                self.address = "813 11 Ave SW Calgary, AB T2R 0E6, Canada";
                self.amount = parseInt("50");
            }
        }
        self.submitForm = function(isValid) {
            self.infoSuccess = false;
            self.infoFalse = false;
            // check to make sure the form is completely valid
            if (isValid) {
                $('#domesticTransfer').modal('show');
                self.modalName = self.name;
                self.modalAccount = self.accountNumber;
                self.modalAmount = self.amount;
                self.modalAddress = self.address;
            }else{
                self.infoFalse = true;
            }
          };
          self.confirmTransfer = function(){
            self.infoSuccessForeign = false;
            self.infoSuccessDomestic = true;
            self.infoFalse = false;
            $('#domesticTransfer').modal('hide');
          }
          self.submitForm2 = function(isValid) {
            self.infoSuccess = false;
            self.infoFalse = false;
            
            if (isValid) {
                $('#foreignTransfer').modal('show');
                self.modalNameForeign = self.nameForeign;
                self.modalIBAN = self.accountIBAN;
                self.modalSwift = self.swiftNumber;
                self.modalNameBank = self.bankName;
                self.modalAddressForeign = self.addressForeign;
                self.modalAmountForeign = self.amountForeign;
            }else{
                self.infoFalse = true;
            }
          };
          self.confirmTransfer2 = function(){
            self.infoSuccessForeign = true;
            self.infoSuccessDomestic = false;
            self.infoFalse = false;
            $('#foreignTransfer').modal('hide');
          }
    }

})();