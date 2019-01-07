angular.module('businessprofilefollowers.controllers', [])
.controller('BusinessProfilefollowersCtrl', function($scope, APIService, $state, SweetAlert) {
    if(!localStorage.getItem("isslogin") || localStorage.getItem("isslogin")!='1'){
        $state.go('/');
    }else{
        $scope.userdata = JSON.parse(localStorage.getItem("userdata"));
    }
    $scope.publishstatus = 'posts';
    $scope.imagepath = '../assets/img/';
    $scope.blogs =[
        { "title":"India's 10 Best Places Where to Enjoy During the Rainy Season", "img":"bg-birthdays1.jpg", "discription":"Ranbir Kapoor gave a speech to everyone when his photos were leaked to social media for Sanjay Dutt in the biography film. Not only his fans and colleagues in the film brochure, Dutt was also surprised and shocked that Kapoor looks like him in the photo.", "postsType":"posts"},
        { "title":"Actor Ranbir Kapoor is repeating the role of Sanjay Dutt in his biopic", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam.", "postsType":"blogs"},
        { "title":"bollywood actor charge 50 to 60 caror to sign a film. See how far Amitabh Bachchan is with Salman Khan", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam.", "postsType":"posts"},
        { "title":"10 Most Beautiful Bollywood Couple Sixth number couples are special in all these", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam.", "postsType":"posts"},
        { "title":"How beautiful is Selena Gomez let's see in this post The third number picture is amazing", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam.", "postsType":"articles"},
        { "title":"Look how boolywood actressess look without makeup", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam.", "postsType":"articles"},
        { "title":"Actor Ranbir Kapoor is repeating the role of Sanjay Dutt in his biopic", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam.", "postsType":"articles"},
        { "title":"bollywood actor charge 50 to 60 caror to sign a film. See how far Amitabh Bachchan is with Salman Khan", "img":"bg-birthdays1.jpg", "discription":"It couldn't have been easy for Ranbir to slip into Dutt's shoes, given that the two hardly have anything in common in terms of physicality or mannerisms. Apart from inputs from the man himself, Ranbir is taking help from top stand-up comic and internet sensation Dr. Sanket Bhosale, who is known to effortlessly mimic several Bollywood stars including Dutt, Salman Khan, Farhan Akhtar and Sonu Nigam.", "postsType":"blogs"}
    ];
});