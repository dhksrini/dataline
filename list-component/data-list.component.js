// Define the `PhoneListController` controller on the `phonecatApp` module
'use strict';

var dataUrl = 'https://jsonplaceholder.typicode.com/users';

function PhoneListController($scope, CodedataOp) {
  var self = this,
      status,
      posts;

  getPosts();
  function getPosts(){
    CodedataOp.getPosts()
      .success(function(data){
        self.posts = data;
      })
      .error(function(error){
        self.status =  'Unable to load customer data: ' + error.message;
      })
  }
  console.log(self);

  /*$http.get(dataUrl).then(function (response) {
    self.posts = response.data;
    console.log(self);
  });*/
}

// PhoneListController.$inject = ['$http'];

angular.module('showDataList').
  component('showDataList', {
    templateUrl:'list-component/data-list-template.html',
    controller: PhoneListController
  })