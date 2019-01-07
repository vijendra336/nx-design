angular.module('businessprofileabout.controllers', [])
.controller('BusinessProfileaboutCtrl', function($scope, APIService, $state, SweetAlert, $filter) {
    if(!localStorage.getItem("isslogin") || localStorage.getItem("isslogin")!='1'){
        $state.go('/');
    }else{
        $scope.userdata = JSON.parse(localStorage.getItem("userdata"));
    }
    $scope.panelHeader= {'id':'1','name':'Info Outline','editmode':false}
    $scope.imagepath = 'http://localhost/nx/assets/img/';
    $scope.customTab=function(Tab){
        console.log(Tab);
        $scope.panelHeader= Tab;
    }
 
});