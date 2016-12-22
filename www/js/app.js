angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.noticias', {
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/noticias.html',
          controller: 'NoticiasCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/noticias/:noticiaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/noticia.html',
        controller: 'NoticiaCtrl'
      }
    }
  })
  
  .state('app.category', {
    url: '/categorias/:categoriaSlug',
    views: {
      'menuContent': {
        templateUrl: 'templates/categorias.html',
        controller: 'CategoriaCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/noticias');
});
