angular
.module('App')
.service("UserService", UserService);

function UserService(){
    var userData = {};
    return{
        setUserData: function(userData){
            this.userData = userData;
        },
        getUserData: function(){
            return this.userData;
        }
    }
}

(function(){
    'use strict';
    angular
    .module('App')
    .controller('userDetailsController', userDetailsController);

    function userDetailsController(AuthService, $scope, UserService){
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
        self.update = function(){
            var object = {
                fName: self.fName,
                sName: self.sName,
                fAddress: self.fAddress,
                fCity: self.fCity,
                zipCode: self.zipCode,
                phone: self.phone
            }
            UserService.setUserData(object);
            self.infoUpdated = true;
        }
        if (UserService.getUserData()){
            var data = UserService.getUserData();
            self.fName = data.fName;
            self.sName = data.sName;
            self.fAddress = data.fAddress;
            self.fCity = data.fCity;
            self.zipCode = data.zipCode
            self.phone = data.phone;
        }
    }
})();