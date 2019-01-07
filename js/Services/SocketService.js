// (function(){
// 	angular.module('Nxbusiness').service('SocketService', ['socketFactory', SocketService]);
//     var user_id = localStorage.getItem("userSocket_id");
//     console.log(user_id);
//     function SocketService(socketFactory){
//         return socketFactory({
//                 // ioSocket: io.connect('http://localhost:8899', { query: "user_id="+ user_id})
//                 ioSocket: io.connect('http://localhost:8899')
//                 // ioSocket: io.connect('http://169.50.129.254:8899', { query: "user_id="+ user_id})
//         });
//     }
// })();

'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
app.factory('SocketService', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});
