var myApp = angular.module( 'myApp', [] );

myApp.controller( 'cr', function( $http ){
console.log('cr controller functional...');
  var vm = this;
  vm.flics = [];


  vm.getMovie = function () {
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s='+vm.mov
    }).then( function success( response ){
      console.log('response.data.Search-->', response.data.Search);
      vm.flics= response.data.Search;
      console.log('vm.flics-->', vm.flics);

});
}
vm.favs = function(Year, Title, Poster) {
   console.log('in favs');
   var objectToSend = {
     year: Year,
     title: Title,
     poster: Poster,
   };
   console.log(objectToSend);
   $http({
     method: 'POST',
     url: '/favs',
     data: objectToSend
   }).then( function success(response){
     vm.getFavs();
 });
 }
   vm.fav = [];

  vm.getFavs = function(){
    console.log('in favs controller');
    $http({
      method: 'GET',
      url: '/getfavs'
    }).then( function success(response){
      vm.fav = response.data;
      console.log(vm.fav);
    });//end GET
  };
});
