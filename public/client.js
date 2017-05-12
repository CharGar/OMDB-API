var myApp = angular.module( 'myApp', [] );

myApp.controller( 'cr', function( $http ){
  console.log( 'NG' );

  var vm = this;

  vm.getAssign = function (id) {
    console.log( 'in getAssign:', id );
    $http({
      method: 'GET',
      url: '/getAll/'+ id
    }).then( function success ( response){
      console.log(response);
      vm.assignOutput = response.data;
    }, function (err){
      console.log('error in GET route');
    })


  }

});
