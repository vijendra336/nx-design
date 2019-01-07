'use strict';
module.exports = [
  '$window',
  '$cookies',
  '$rootScope',
  'request',
  'api',
  '$timeout',
  '$q', '$state',
  function($window, $cookies, $rootScope, request, api, $timeout, $q, $state) {
    angular.extend(this, {
      getUserData: function() {
        var defer = $q.defer();
        request.doRequest({
            url:  apiUrl + 'getUserbyid',
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            data: data
        }).then(function(resp) {
            defer.resolve(resp)
        }, function(error) {
            defer.reject(error);
        })
        return defer.promise;
      },
    })
  }
]