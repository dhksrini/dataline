// Define the `PhoneListController` controller on the `phonecatApp` module
'use strict';

var dataUrl = 'https://jsonplaceholder.typicode.com/users';

function PhoneListController($http) {
  var self = this, posts;
  $http.get(dataUrl).then(function (response) {
    self.posts = response.data;
    console.log(self);
  });
}

PhoneListController.$inject = ['$http'];

angular.module('showDataList').
  component('showDataList', {
    templateUrl:'list-component/data-list-template.html',
    controller: PhoneListController
  });