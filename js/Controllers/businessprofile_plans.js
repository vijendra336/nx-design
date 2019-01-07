angular.module('businessprofileplans.controllers', [])
.controller('BusinessProfilePlansCtrl', function($scope, APIService, $state, SweetAlert) {
    if(!localStorage.getItem("isslogin") || localStorage.getItem("isslogin")!='1'){
        $state.go('/');
    }else{
        $scope.userdata = JSON.parse(localStorage.getItem("userdata"));
    }
});