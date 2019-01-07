var app = angular.module('Nxbusiness', ['ui.router', 'btford.socket-io', 'ngFileUpload', 'APIModule', 'oitozero.ngSweetAlert', 'notifications.controllers', 'settings.controllers', 'help.controllers',  'businessprofileplans.controllers','createBuprofile.controllers',  'businessprofile.controllers', 'businessprofileoverview.controllers', 'businessprofileabout.controllers', 'businessprofilegallery.controllers', 'businessprofilepublish.controllers', 'businessprofileservices.controllers', 'businessprofilelokingfor.controllers', 'businessprofileportfolio.controllers', 'businessProfilepresence.controllers', 'businessprofilefeedback.controllers', 'businessprofilelinkedprofiles.controllers', 'businessprofileinterest.controllers', 'businessprofilefollowers.controllers', 'businessprofilesuggested_profiles.controllers', 'businessprofileother.controllers', 'businessprofileotheroverview.controllers', 'businessprofileotherabout.controllers', 'businessprofileothergallery.controllers', 'businessprofileotherpublish.controllers', 'businessprofileotherservices.controllers', 'businessprofileotherlokingfor.controllers', 'businessprofileotherportfolio.controllers', 'businessprofileotherfeedback.controllers', 'businessprofileothersuggested_profiles.controllers', 'businessprofileotherfollowers.controllers', 'businessprofileotherinterest.controllers', 'businessprofileotherlinkedprofiles.controllers', 'businessprofileotherpresence.controllers']);

var mainurl = "http://localhost:8899/";
var imagepath = "http://localhost/nx/";
app.directive('myCheck', function () {
	return {
		restrict: 'AE',
		link: function (scope, element, attrs) {
			element.bind('keyup', function (e) {
			  var words = this.value.split(" ");
			  var tmp = '';
			  if (words.length >50){
				for(var i=0;i<50;i++){
				  tmp += words[i] + ' ';
				}
				this.value = tmp;
			  } 
			});
		}
	}
});
app.directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function(scope) {
            scope.initCarousel = function(element) {
                console.log('initCarousel');

                // provide any default options you want
                var defaultOptions = {};
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for (var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                var curOwl = $(element).data('owlCarousel');
                if (!angular.isDefined(curOwl)) {
                    $(element).owlCarousel(defaultOptions);
                }
                scope.cnt++;
            };
        }
    };
}).directive('owlCarouselItem', [
    function() {
        return {
            restrict: 'A',
            transclude: false,
            link: function(scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    console.log('lst element');
                    scope.initCarousel(element.parent());
                }
            }
        };
    }
]);
app.directive('ngRepeatOwlCarousel', function() {
	return {
			restrict: 'A',
			scope: {
					carouselInit: '&'
			},
			link: function(scope, element, attrs) {
					setTimeout(function(){
						if ((scope.$parent != null) && scope.$parent.$last) {
							console.log(scope.$parent.$last);
							return scope.carouselInit()();
						}
					},100);
			}
	};
});
app.directive('datepicker', function() {
	return {
		 restrict: 'A',
		 require: 'ngModel',
		 compile: function() {
				return {
					 pre: function(scope, element, attrs, ngModelCtrl) {
							var format, dateObj;
							format = (!attrs.dpFormat) ? 'd/m/yyyy' : attrs.dpFormat;
							if (!attrs.initDate && !attrs.dpFormat) {
								 // If there is no initDate attribute than we will get todays date as the default
								 dateObj = new Date();
								 scope[attrs.ngModel] = dateObj.getDate() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();
							} else if (!attrs.initDate) {
								 // Otherwise set as the init date
								 scope[attrs.ngModel] = attrs.initDate;
							} else {
								 // I could put some complex logic that changes the order of the date string I
								 // create from the dateObj based on the format, but I'll leave that for now
								 // Or I could switch case and limit the types of formats...
							}
							// Initialize the date-picker
							$(element).datepicker({
								 format: format,
							}).on('changeDate', function(ev) {
								 // To me this looks cleaner than adding $apply(); after everything.
								 scope.$apply(function () {
										ngModelCtrl.$setViewValue(ev.format(format));
								 });
							});
					 }
				}
		 }
	}
});
app.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  }
});
app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
app.directive('phoneInput', function($filter, $browser) {
	return {
			require: 'ngModel',
			link: function($scope, $element, $attrs, ngModelCtrl) {
					var listener = function() {
							var value = $element.val().replace(/[^0-9]/g, '');
							$element.val($filter('tel')(value, false));
					};

					// This runs when we update the text field
					ngModelCtrl.$parsers.push(function(viewValue) {
							return viewValue.replace(/[^0-9]/g, '').slice(0,10);
					});

					// This runs when the model gets updated on the scope directly and keeps our view in sync
					ngModelCtrl.$render = function() {
							$element.val($filter('tel')(ngModelCtrl.$viewValue, false));
					};

					$element.bind('change', listener);
					$element.bind('keydown', function(event) {
							var key = event.keyCode;
							// If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
							// This lets us support copy and paste too
							if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
									return;
							}
							$browser.defer(listener); // Have to do this or changes don't get picked up properly
					});

					$element.bind('paste cut', function() {
							$browser.defer(listener);
					});
			}

	};
});
app.directive('scrollToBottom', function($timeout, $window) {
	return {
			scope: {
					scrollToBottom: "="
			},
			restrict: 'A',
			link: function(scope, element, attr) {
					scope.$watchCollection('scrollToBottom', function(newVal) {
							if (newVal) {
									$timeout(function() {
											element[0].scrollTop =  element[0].scrollHeight;
									}, 0);
							}

					});
			}
	};
});
app.filter('tel', function () {
	return function (tel) {
			if (!tel) { return ''; }

			var value = tel.toString().trim().replace(/^\+/, '');

			if (value.match(/[^0-9]/)) {
					return tel;
			}

			var country, city, number;

			switch (value.length) {
					case 1:
					case 2:
					case 3:
							city = value;
							break;

					default:
							city = value.slice(0, 3);
							number = value.slice(3);
			}

			if(number){
					if(number.length>4){
							number = number.slice(0, 4) + '-' + number.slice(4,9);
					}
					else{
							number = number;
					}

					return ("(" + city + ") " + number).trim();
			}
			else{
					return "(" + city;
			}

	};
});
app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});
app.filter('capitalize', function() {
	return function(input, scope) {
	  if (input!=null)
	  input = input.toLowerCase();
	  return input.substring(0,1).toUpperCase()+input.substring(1);
	}
  });
app.directive('myCheckAbout', function () {
	return {
		restrict: 'AE',
		link: function (scope, element, attrs) {
			element.bind('keyup', function (e) {
			  var words = this.value.split(" ");
			  var tmp = '';
			  if (words.length >300){
				for(var i=0;i<300;i++){
				  tmp += words[i] + ' ';
				}
				this.value = tmp;
			  } 
			});
		}
	}
});
app.directive('myCheckFifteen', function () {
	return {
		restrict: 'AE',
		link: function (scope, element, attrs) {
			element.bind('keyup', function (e) {
			  var words = this.value.split(" ");
			  var tmp = '';
			  if (words.length >15){
				for(var i=0;i<15;i++){
				  tmp += words[i] + ' ';
				}
				this.value = tmp;
			  } 
			});
		}
	}
});
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	// if(localStorage.getItem("isslogin")=='1'){
	// 	$urlRouterProvider.otherwise('/home');
	// }else{
		$urlRouterProvider.otherwise('/businessprofileplans');
	// }
	
	
	$stateProvider
	// .state('/', {
	// 	url: '/',
	// 	cache: false,
	// 	templateUrl: 'templates/login.html',
	// 	controller: 'LoginCtrl'
	// })
	// .state('verification', {
	// 	url: '/verification',
	// 	templateUrl: 'templates/verification.html',
	// 	controller: 'VerificationCtrl'
	// })
	// .state('forgot', {
	// 	url: '/forgot',
	// 	templateUrl: 'templates/forgotpassword.html',
	// 	controller: 'ForgotPasswordCtrl'
	// })
	// .state('resetpassword', {
	// 	url: '/resetpassword/:user_id/:token',
	// 	templateUrl: 'templates/resetpassword.html',
	// 	controller: 'ResetPasswordCtrl'
	// })
	// .state('basicinfo', {
	// 	url: '/basicinfo',
	// 	templateUrl: 'templates/basicinfo.html',
	// 	controller: 'BasicInfoCtrl'
	// })
	// .state('home', {
	// 	url: '/home',
	// 	cache: false,
	// 	templateUrl: 'templates/home.html',
	// 	controller: 'HomeCtrl'
	// })
	// .state('profile', {
	// 	url: '/profile/:user_name',
	// 	templateUrl: 'templates/myprofile.html',
	// 	controller: 'ProfileCtrl'
	// })
	// .state('otherprofile', {
	// 	url: '/otherprofile/:user_name',
	// 	templateUrl: 'templates/otherprofile.html',
	// 	controller: 'OtherProfileCtrl'
	// })
	// .state('friendrequests', {
	// 	url: '/friendrequests',
	// 	templateUrl: 'templates/friendrequest.html',
	// 	controller: 'FriendRequestCtrl'
	// })
	// .state('messages', {
	// 	url: '/messages',
	// 	cache: false,
	// 	templateUrl: 'templates/messages.html',
	// 	controller: 'MessagesCtrl'
	// })
	// .state('notifications', {
	// 	url: '/notifications',
	// 	templateUrl: 'templates/notifications.html',
	// 	controller: 'NotificationsCtrl'
	// })
	// .state('settings', {
	// 	url: '/settings',
	// 	templateUrl: 'templates/settings.html',
	// 	controller: 'SettingsCtrl'
	// })
	// .state('help', {
	// 	url: '/help',
	// 	templateUrl: 'templates/help.html',
	// 	controller: 'HelpCtrl'
	// })
	.state('createbprofile', {
		url: '/createbprofile',
		templateUrl: 'templates/create_business_profile.html',
		controller: 'CreateBprofileCtrl'
	})
	.state('businessprofileplans', {
		url: '/businessprofileplans',
		templateUrl: 'templates/businessprofile_plans.html',
		controller: 'BusinessProfilePlansCtrl'
	})
	.state('publicprofile', {
		url: '/publicprofile',
		templateUrl: 'templates/publicprofile.html',
		controller: 'PublicProfileCtrl'
	})
	.state('businessprofile', {
		abstract: true,
		url: '/businessprofile',
		templateUrl: 'templates/businessprofile.html',
		controller: 'BusinessProfileCtrl'
	})
	.state('businessprofile.overview', {
		url: '/overview',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofileoverview.html',
				controller: 'BusinessProfileoverviewCtrl'
			}
		}
	})
	.state('businessprofile.aboutus', {
		url: '/aboutus',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofileabout.html',
				controller: 'BusinessProfileaboutCtrl'
			}
		}
	})
	.state('businessprofile.gallery', {
		url: '/gallery',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofilegallery.html',
				controller: 'BusinessProfilegalleryCtrl'
			}
		}
	})
	.state('businessprofile.publish', {
		url: '/publish',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofilepublish.html',
				controller: 'BusinessProfilepublishCtrl'
			}
		}
	})
	.state('businessprofile.what_we_do', {
		url: '/what_we_do',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofileservices.html',
				controller: 'BusinessProfileservicesCtrl'
			}
		}
	})
	.state('businessprofile.lokingfor', {
		url: '/lokingfor',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofilelokingfor.html',
				controller: 'BusinessProfilelokingforCtrl'
			}
		}
	})
	.state('businessprofile.portfolio', {
		url: '/portfolio',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofileportfolio.html',
				controller: 'BusinessProfileportfolioCtrl'
			}
		}
	})
	.state('businessprofile.presence', {
		url: '/presence',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofilepresence.html',
				controller: 'BusinessProfilepresenceCtrl'
			}
		}
	})
	.state('businessprofile.feedback', {
		url: '/feedback',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofilefeedback.html',
				controller: 'BusinessProfilefeedbackCtrl'
			}
		}
	})
	.state('businessprofile.suggested_profiles', {
		url: '/suggested_profiles',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofilesuggested_profiles.html',
				controller: 'BusinessProfilesuggested_profilesCtrl'
			}
		}
	})
	.state('businessprofile.followers', {
		url: '/followers',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofilefollowers.html',
				controller: 'BusinessProfilefollowersCtrl'
			}
		}
	})
	.state('businessprofile.interest', {
		url: '/interest',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofileinterest.html',
				controller: 'BusinessProfileinterestCtrl'
			}
		}
	})
	.state('businessprofile.linkedprofiles', {
		url: '/linkedprofiles',
		views: {
      'businessprofile': {
				templateUrl: 'templates/businessprofilelinkedprofiles.html',
				controller: 'BusinessProfilelinkedprofilesCtrl'
			}
		}
	})
	.state('businessprofileother', {
		//abstract: true,
		url: '/businessprofileother',
		templateUrl: 'templates/businessprofileother.html',
		controller: 'BusinessProfileOtherCtrl'
	})
	.state('businessprofileother.overview', {
		url: '/overview',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotheroverview.html',
				controller: 'BusinessProfileOtheroverviewCtrl'
			}
		}
	})
	.state('businessprofileother.aboutus', {
		url: '/aboutus',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherabout.html',
				controller: 'BusinessProfileOtheraboutCtrl'
			}
		}
	})
	.state('businessprofileother.gallery', {
		url: '/gallery',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileothergallery.html',
				controller: 'BusinessProfileOthergalleryCtrl'
			}
		}
	})
	.state('businessprofileother.publish', {
		url: '/publish',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherpublish.html',
				controller: 'BusinessProfileOtherpublishCtrl'
			}
		}
	})
	.state('businessprofileother.what_we_do', {
		url: '/what_we_do',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherservices.html',
				controller: 'BusinessProfileOtherservicesCtrl'
			}
		}
	})
	.state('businessprofileother.lokingfor', {
		url: '/lokingfor',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherlokingfor.html',
				controller: 'BusinessProfileOtherlokingforCtrl'
			}
		}
	})
	.state('businessprofileother.portfolio', {
		url: '/portfolio',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherportfolio.html',
				controller: 'BusinessProfileOtherportfolioCtrl'
			}
		}
	})
	.state('businessprofileother.presence', {
		url: '/presence',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherpresence.html',
				controller: 'BusinessProfileOtherpresenceCtrl'
			}
		}
	})
	.state('businessprofileother.feedback', {
		url: '/feedback',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherfeedback.html',
				controller: 'BusinessProfileOtherfeedbackCtrl'
			}
		}
	})
	.state('businessprofileother.suggested_profiles', {
		url: '/suggested_profiles',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileothersuggested_profiles.html',
				controller: 'BusinessProfileOthersuggested_profilesCtrl'
			}
		}
	})
	.state('businessprofileother.followers', {
		url: '/followers',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherfollowers.html',
				controller: 'BusinessProfileOtherfollowersCtrl'
			}
		}
	})
	.state('businessprofileother.interest', {
		url: '/interest',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherinterest.html',
				controller: 'BusinessProfileOtherinterestCtrl'
			}
		}
	})
	.state('businessprofileother.linkedprofiles', {
		url: '/linkedprofiles',
		views: {
      'businessprofileother': {
				templateUrl: 'templates/businessprofileotherlinkedprofiles.html',
				controller: 'BusinessProfileOtherlinkedprofilesCtrl'
			}
		}
	})
	
	
	// .state('home', {
	// 	url: '/home',
	// 	templateUrl: 'templates/home.html',
	// 	controller: 'HomeCtrl'
	// })

 	// .state('header', {
	//     url: '/header',
	//     abstract: true,
	//     templateUrl: 'pages/header.html'
    // })
	// .state('header.home', {
	//     url: '/home',
	//     views: {
	//       'container': {
	//         templateUrl: 'pages/home.html'
	//       }
	//     }
	// })
	// .state('header.about', {
	//     url: '/about',
	//     views: {
	//       'container': {
	//         templateUrl: 'pages/about.html'
	//       }
	//     }
	// })
	// .state('header.contact', {
	//     url: '/contact',
	//     views: {
	//       'container': {
	//         templateUrl: 'pages/contact.html'
	//       }
	//     }
	// });

	// $locationProvider.html5Mode(true);
});
