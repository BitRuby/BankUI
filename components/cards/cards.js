angular
.module("App")
.service("ApplicationService", ApplicationService);

function ApplicationService(){
    var arrays = [];
    var index = 1;
    return{
        newApp: function(cardType){
            arrays.push({"id": index, "type": cardType});
            index++;
        },
        getApplications: function(){
            return arrays;
        }
    }
}

(function(){
    'use strict';
    angular.module('App')
        .controller('cardsController', cardsController);

    function cardsController($scope,  ApplicationService){
        var self = this;
        $scope.tab = 1;
        $scope.setTab = function(newTab){
            $scope.tab = newTab;
        }
        $scope.isSet = function(tabNum){
            return $scope.tab === tabNum;
        }
        self.newApplication = function(){
            self.showSuccessDebit = false;
            self.showSuccessCredit = false;
            ApplicationService.newApp(self.cardType);
            if (self.cardType=="debit"){
                self.showSuccessDebit = true;
            }
            else{
                self.showSuccessCredit = true;
            }
        }
    }

})();