angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $interval) {

    $scope.categorias = {};
    $interval(function(){
        $http.jsonp('http://franconet.com.br/wordpress/?json=get_category_index&callback=JSON_CALLBACK')
        .success(function(data){
	       $scope.categorias = data;
        });
    }, 1000);
})

.controller('NoticiasCtrl', function($scope, $http, $interval) {
        
        $scope.noticias  = {}; 
        $interval(function(){
            $http.jsonp('http://franconet.com.br/wordpress?json=1&callback=JSON_CALLBACK')
            .success(function(data){            
                    $scope.noticias = data;                           
            });
        }, 10000);
        
})

.controller('NoticiaCtrl', function($scope, $stateParams, $http) {
    
    var conteudo = '';
    url = window.location.href;
    ref = url.lastIndexOf('/');
    id = url.slice(ref + 1);
    $scope.idPagina = id;
    
    conteudo = document.getElementById("conteudo");
    
    $scope.post = {};
    $http.jsonp('http://franconet.com.br/wordpress/?json=get_post&post_id=' + id + '&callback=JSON_CALLBACK')
    .success(function(data){
        $scope.post = data;
        conteudo.innerHTML = data.post.content;
    });   
})

.controller('CategoriaCtrl', function($scope, $stateParams, $http, $interval) {
    
    url = window.location.href;
    ref = url.lastIndexOf('/');
    slug = url.slice(ref + 1);
    
    $scope.postCategory = {};
    $interval(function(){
        $http.jsonp('http://franconet.com.br/wordpress/?json=get_category_posts&slug=' + slug + '&callback=JSON_CALLBACK')
        .success(function(data){
            $scope.postCategory = data;
            $scope.slug = slug;
        });        
    }, 1000);
});


