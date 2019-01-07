angular.module('settings.controllers', [])
.controller('SettingsCtrl', function($scope, APIService, $state, SweetAlert) {
    $scope.defaulttab = 'privacy_setting';
    if(!localStorage.getItem("isslogin") || localStorage.getItem("isslogin")!='1'){
        $state.go('/');
    }else{
        $scope.userdata = JSON.parse(localStorage.getItem("userdata"));
    }
    $scope.user_profile_setting={};

    $scope.getUser = function(){
        APIService.setData({
            req_url: apiUrl + 'getUser_settingsbyid',
            data:{user_id:$scope.userdata._id}
        }).then(function(resp) {
            if(resp.data.success){
                $scope.user_profile_setting = resp.data.data;
             }else{
                SweetAlert.swal({title:resp.data.message,type: "info"}, 
                    function(){ 
                    SweetAlert.swal(resp.data.message);
                });
            }
        }, function(err) {
            SweetAlert.swal({title:"Something went wrong.",type: "error"}, 
                function(){ 
                SweetAlert.swal("Something went wrong.");
            });
        });
    }
    if($scope.defaulttab=="privacy_setting"){
        $scope.getUser();
    }
    $scope.changeTab = function(tabName){
        if(tabName=="account_setting"){
            $scope.defaulttab = tabName;
        }else if(tabName=="privacy_setting"){
            $scope.getUser();
            $scope.defaulttab = tabName;
        }else if(tabName=="b-profile_setting"){
            $scope.defaulttab = tabName;
        }
    }


    $scope.updateprofilesetting = function(value){
        APIService.updateData({
            req_url: apiUrl + 'updateUsersetting',
            data:value
        }).then(function(resp) {
            if(resp.data.success){
                $scope.user_profile_setting = resp.data.data;
             }
            $scope.getUser();
        }, function(err) {
            SweetAlert.swal({title:"Something went wrong.",type: "error"}, 
                function(){ 
                SweetAlert.swal("Something went wrong.");
            });
        });
    }

});