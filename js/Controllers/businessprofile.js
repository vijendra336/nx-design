angular.module('businessprofile.controllers', [])
.controller('BusinessProfileCtrl', function($scope, APIService, $state, SweetAlert, $location) {
    $scope.url = $location.absUrl().split('/');
    console.log( $scope.url[$scope.url.length-1]);
    $scope.imagepath = 'http://localhost/nx/assets/img/';
    $scope.banners = [
        { "img":"bg-birthdays1.jpg"},
        { "img":"bg-birthdays1.jpg"},
        { "img":"bg-birthdays1.jpg"}        
    ];
   
    $scope.activenav = $scope.url[$scope.url.length-1];
    $scope.bannerscarouselInitializer = function() {
        $("#banner-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            loop:true,lazyLoad: true,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            slideSpeed: 300,
            nav:true,
            paginationSpeed: 600,
            items: 1
        });
    };
});