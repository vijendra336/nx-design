angular.module('createBuprofile.controllers', [])
.controller('CreateBprofileCtrl', function($scope, APIService, $state, SweetAlert) {
    if(!localStorage.getItem("isslogin") || localStorage.getItem("isslogin")!='1'){
        $state.go('/');
    }else{
        $scope.userdata = JSON.parse(localStorage.getItem("userdata"));
    }
    $scope.stepformpage =1;

    $scope.nextprecards = function(step){
        $scope.stepformpage =step;
    }

    $scope.Finish = function(){
     //$state.reload();
        $state.transitionTo('businessprofile.aboutus', {}, {
            reload: true,
            inherit: false,
            notify: true
        });
       //$state.go('businessprofile.aboutus', {reload:true}); 
    }

});