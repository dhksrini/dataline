// Define the `liveData app` module
'use strict';
angular.module('CodedataOp')
.factory('CodedataOp', ['$http' ,function ($http) {
  var dataUrl = 'https://jsonplaceholder.typicode.com',
      CodedataOp = {};

  CodedataOp.getPosts = function(){
    return $http.get(dataUrl+'/users')
  }

  return CodedataOp;
}])