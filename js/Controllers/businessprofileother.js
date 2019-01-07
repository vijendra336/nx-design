angular.module('businessprofileother.controllers', [])
.controller('BusinessProfileOtherCtrl', function($scope, APIService, $state, SweetAlert, $location) {
    $scope.url = $location.absUrl().split('/');
    console.log( $scope.url[$scope.url.length-1]);
    $scope.imagepath = '../assets/img/';
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

    // $scope.imagepath = '../assets/img/';
    // $scope.banners = [
    //     { "img":"bg-birthdays1.jpg"},
    //     { "img":"bg-birthdays1.jpg"},
    //     { "img":"bg-birthdays1.jpg"}        
    // ];
    $scope.services =[
        { "title":"GRAPHICS DESIGN", "discription":"Web Templates, Ui/UX Design, Logo Design, Banner Design, Facebook Post"},
        { "title":"WEB DESIGN", "discription":"Responsive WebSite, Mobile Friendly websites, User Friendly Websites"},
        { "title":"WEB DEVELOPMENT", "discription":"Custom Software Development, Web Content Management System, E-Commerce Portal, Social Networking Development."},
        { "title":"APP DEVELOPMENT", "discription":"We are provide Native or Hybrid both type of Application. We have a 5+ Yr experience in App Development"},
        { "title":"SUPPORT", "discription":"We are delivered to our clients what he wants. and we support to our clients for operating softwares and manage it."}
    ];
    $scope.lookingfor =[
        { "title":"GRAPHICS DESIGN", "discription":"Web Templates, Ui/UX Design, Logo Design, Banner Design, Facebook Post"},
        { "title":"WEB DESIGN", "discription":"Responsive WebSite, Mobile Friendly websites, User Friendly Websites"},
        { "title":"WEB DEVELOPMENT", "discription":"Custom Software Development, Web Content Management System, E-Commerce Portal, Social Networking Development."},
        { "title":"APP DEVELOPMENT", "discription":"We are provide Native or Hybrid both type of Application. We have a 5+ Yr experience in App Development"},
        { "title":"SUPPORT", "discription":"We are delivered to our clients what he wants. and we support to our clients for operating softwares and manage it."}
    ];
    $scope.teams =[
        { "img":"bg-birthdays1.jpg", "name":"Ashish Pokle", "designation":"Web Design"},
        { "img":"bg-birthdays1.jpg", "name":"Sudarshan Vishwakarma", "designation":"Web Developer"},
        { "img":"bg-birthdays1.jpg", "name":"Rahul", "designation":"App Developer"},
        { "img":"bg-birthdays1.jpg", "name":"Rahul", "designation":"App Developer"},
        { "img":"bg-birthdays1.jpg", "name":"Rahul", "designation":"App Developer"}
    ];
    $scope.leaders =[
        { "img":"bg-birthdays1.jpg", "name":"Ashish Pokle", "designation":"Web Design"},
        { "img":"bg-birthdays1.jpg", "name":"Sudarshan Vishwakarma", "designation":"Web Developer"},
        { "img":"bg-birthdays1.jpg", "name":"Rahul", "designation":"App Developer"},
        { "img":"bg-birthdays1.jpg", "name":"Rahul", "designation":"App Developer"},
        { "img":"bg-birthdays1.jpg", "name":"Rahul", "designation":"App Developer"}
    ];
    $scope.blogs =[
        { "title":"India's 10 Best Places Where to Enjoy During the Rainy Season", "img":"bg-birthdays1.jpg", "discription":"Ranbir Kapoor gave a speech to everyone when his photos were leaked to social media for Sanjay Dutt in the biography film. Not only his fans and colleagues in the film brochure, Dutt was also surprised and shocked that Kapoor looks like him in the photo."},
        { "title":"Actor Ranbir Kapoor is repeating the role of Sanjay Dutt in his biopic", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"bollywood actor charge 50 to 60 caror to sign a film. See how far Amitabh Bachchan is with Salman Khan", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"10 Most Beautiful Bollywood Couple Sixth number couples are special in all these", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"How beautiful is Selena Gomez let's see in this post The third number picture is amazing", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"Look how boolywood actressess look without makeup", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"Actor Ranbir Kapoor is repeating the role of Sanjay Dutt in his biopic", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"bollywood actor charge 50 to 60 caror to sign a film. See how far Amitabh Bachchan is with Salman Khan", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."}
    ];
    $scope.articles =[
        { "title":"India's 10 Best Places Where to Enjoy During the Rainy Season", "img":"bg-birthdays1.jpg", "discription":"Ranbir Kapoor gave a speech to everyone when his photos were leaked to social media for Sanjay Dutt in the biography film. Not only his fans and colleagues in the film brochure, Dutt was also surprised and shocked that Kapoor looks like him in the photo."},
        { "title":"Actor Ranbir Kapoor is repeating the role of Sanjay Dutt in his biopic", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"bollywood actor charge 50 to 60 caror to sign a film. See how far Amitabh Bachchan is with Salman Khan", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"10 Most Beautiful Bollywood Couple Sixth number couples are special in all these", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"How beautiful is Selena Gomez let's see in this post The third number picture is amazing", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"Look how boolywood actressess look without makeup", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"Actor Ranbir Kapoor is repeating the role of Sanjay Dutt in his biopic", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."},
        { "title":"bollywood actor charge 50 to 60 caror to sign a film. See how far Amitabh Bachchan is with Salman Khan", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam."}
    ];   
    $scope.photos =[
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"}
    ];   
    $scope.videos =[
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "duration":"10:20", "views":"120", "path":"bg-birthdays1.jpg"}
    ];
    $scope.certifications =[
        { "title":"service1", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms.", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms.", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms.", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms.", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms.", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms.", "path":"bg-birthdays1.jpg"},
        { "title":"service1", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms.", "path":"bg-birthdays1.jpg"}
    ];
    
    // $scope.bannerscarouselInitializer = function() {
    //     $("#banner-slider").owlCarousel({
    //         autoPlay: 4000,
    //         center: true,
    //         loop:true,lazyLoad: true,
    //         navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
    //         slideSpeed: 300,
    //         nav:true,
    //         paginationSpeed: 600,
    //         items: 1
    //     });
    // };
    $scope.servicecarouselInitializer = function() {
        $("#service-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            nav:true,
            loop:true,lazyLoad: true,
            slideSpeed: 300,
            margin:0,
            paginationSpeed: 600,
            items: 2,
            responsive: {
                0: {items: 1 },
                600: {items: 1},
                960: { items: 2},
                1200:{items: 2},
                1600:{items: 2}
            }
        });
    };
    $scope.lookingforcarouselInitializer = function() {
        $("#Lookingfor-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            nav:true,
            loop:true,lazyLoad: true,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            slideSpeed: 300,
            margin:0,
            paginationSpeed: 600,
            items: 2,
            responsive: {
                0: {items: 1 },
                600: {items: 1},
                960: { items: 2},
                1200:{items: 2},
                1600:{items: 2}
            }
        });
    };

    $scope.teamscarouselInitializer = function() {
        $("#team-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            nav:true,
            loop:true,lazyLoad: true,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            slideSpeed: 300,
            margin:0,
            paginationSpeed: 600,
            items: 2,
            responsive: {
                0: {items: 1 },
                600: {items: 1},
                960: { items: 2},
                1200:{items: 2},
                1600:{items: 2}
            }
        });
    };
    $scope.leaderscarouselInitializer = function() {
        $("#leader-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            nav:true,
            loop:true,lazyLoad: true,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            slideSpeed: 300,
            margin:0,
            paginationSpeed: 600,
            items: 2,
            responsive: {
                0: {items: 1 },
                600: {items: 1},
                960: { items: 2},
                1200:{items: 2},
                1600:{items: 2}
            }
        });
    };
    $scope.blogscarouselInitializer = function() {
        $("#blogs-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            nav:true,
            loop:true,lazyLoad: true,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            slideSpeed: 300,
            margin:0,
            paginationSpeed: 600,
            items: 2,
            responsive: {
                0: {items: 1 },
                600: {items: 1},
                960: { items: 2},
                1200:{items: 2},
                1600:{items: 2}
            }
        });
    };
    $scope.articlescarouselInitializer = function() {
        $("#articles-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            nav:true,
            loop:true,lazyLoad: true,
            slideSpeed: 300,
            margin:0,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            paginationSpeed: 600,
            items: 2,
            responsive: {
                0: {items: 1 },
                600: {items: 1},
                960: { items: 2},
                1200:{items: 2},
                1600:{items: 2}
            }
        });
    };
    
    $scope.photoscarouselInitializer = function() {
        $("#photos-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            loop:true,lazyLoad: true,
            nav:true,
            slideSpeed: 300,
            margin:0,
            paginationSpeed: 600,
            items: 2,
            responsive: {
                0: {items: 1 },
                600: {items: 1},
                960: { items: 2},
                1200:{items: 2},
                1600:{items: 2}
            }
        });
    };
    $scope.videoscarouselInitializer = function() {
        $("#videos-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            loop:true,lazyLoad: true,
            nav:true,
            slideSpeed: 300,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            margin:0,
            paginationSpeed: 600,
            items: 2,
            responsive: {
                0: {items: 1 },
                600: {items: 1},
                960: { items: 2},
                1200:{items: 2},
                1600:{items: 2}
            }
        });
    };

    $scope.certificationcarouselInitializer = function() {
        $("#certification-slider").owlCarousel({
            autoPlay: 4000,
            center: true,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            loop:true,lazyLoad: true,
            nav:true,
            slideSpeed: 300,
            margin:0,
            paginationSpeed: 600,
            items: 2,
            responsive: {
                0: {items: 1 },
                600: {items: 1},
                960: { items: 2},
                1200:{items: 2},
                1600:{items: 2}
            }
        });
    };
});