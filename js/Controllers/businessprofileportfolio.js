angular.module('businessprofileportfolio.controllers', [])
.controller('BusinessProfileportfolioCtrl', function($scope, APIService, $state, SweetAlert) {
    if(!localStorage.getItem("isslogin") || localStorage.getItem("isslogin")!='1'){
        $state.go('/');
    }else{
        $scope.userdata = JSON.parse(localStorage.getItem("userdata"));
    }
    $scope.imagepath = '../assets/img/';
 
});