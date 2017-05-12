var myApp = angular.module( 'myApp', [] );

myApp.controller( 'cr', function( $http ){

  var vm = this;

  vm.getAssign = function (id) {
    console.log( 'in getAssign:', id );
    $http({
      method: 'GET',
      url: '/assignments/'+ id
    }).then( function success ( response ){
      console.log(response);
      vm.assignOutput = response.data;
      vm.errorOutput = '';
      vm.id='';
    }, function (err){
      vm.errorOutput = "ASSIGNMENT DOES NOT EXIST ";
      vm.id='';
    }); // end http GET
  } // end getAssign

  vm.newAss = function () {
    console.log( 'in newAss:' );
    var objectToSend = {
      assignment_name: vm.ass,
      student_name: vm.student,
      score: vm.score,
      date_completed: vm.date
    }; // end objectToSend

    console.log(objectToSend);
    $http({
      method: 'POST',
      url: '/assignments',
      data: objectToSend
    }).then( function success ( response ){
      console.log(response);
      vm.getAssign('');
    }, function (err){
      console.log('error in POST route');
    }); // end http POST

    vm.student='';
    vm.score='';
    vm.ass='';
    vm.date='';

  } // end newAss
}); // end cr controller
