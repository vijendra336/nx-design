angular.module('help.controllers', [])
.controller('HelpCtrl', function($scope, APIService, $state, SweetAlert) {
    if(!sessionStorage.getItem("isslogin") || sessionStorage.getItem("isslogin")!='1'){
        $state.go('/');
    }else{
        $scope.userdata = JSON.parse(sessionStorage.getItem("userdata"));
    }
    $scope.getUser = function(){
        var data = {
            data:{
               _id:$scope.userdata._id
            },
            token:sessionStorage.getItem("token")
        };
        APIService.setDataheader({
            req_url: apiUrl + 'getUserbyid',
            data:data
        }).then(function(resp) {
            if(resp.data.success){
                $scope.userdata = resp.data.data;
                if($scope.userdata.profile_image){
                    $scope.userimage = imagepath+$scope.userdata.profile_image;
                }else{
                    $scope.userimage = mainurl+'assets/img/logo.png';
                }
            }else{
                sessionStorage.getItem("isslogin");
                SweetAlert.swal({title:resp.data.message,type: "info"}, 
                    function(){ 
                    SweetAlert.swal(resp.data.message);
                });
            }
        }, function(err) {
            sessionStorage.getItem("isslogin");
            SweetAlert.swal({title:resp.data.message,type: "error"}, 
                function(){ 
                SweetAlert.swal(resp.data.message);
            });
        });
    }
    $scope.getUser();


    $scope.logout = function(){
        sessionStorage.removeItem("isslogin");
        sessionStorage.removeItem("userdata");
        sessionStorage.removeItem("token");
        $state.go('/');
    }

});