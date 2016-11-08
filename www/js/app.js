// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter',
  ['ionic',
    'starter.controllers',
    'starter.services'
  ])

.run(function($ionicPlatform, AppService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    AppService.init();
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
      controller: 'AppCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.usuario', {
    url: '/usuario',
    views: {
      'tab-usuario': {
        templateUrl: 'templates/usuario.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('tab.vehiculos', {
      url: '/vehiculos',
      views: {
        'tab-vehiculos': {
          templateUrl: 'templates/vehiculos.html',
          controller: 'AppCtrl'
        }
      }
    })


    .state('tab.detalleTrabajo', {
      url: '/detalleTrabajo',
      views: {
        'tab-detalleTrabajo': {
          templateUrl: 'templates/detalleTrabajo.html',
          controller: 'AppCtrl'
        }
      }
    })

  .state('tab.detalleVehiculo', {
    url: '/detalleVehiculo',
    views: {
      'tab-detalleVehiculo': {
        templateUrl: 'templates/detalleVehiculo.html',
        controller: 'AppCtrl'
      }
    }
  })

    .state('tab.cita', {
      url: '/cita',
      views: {
        'tab-cita': {
          templateUrl: 'templates/cita.html',
          controller: 'AppCtrl'
        }
      }
    })

    .state('tab.historico', {
      url: '/historico',
      views: {
        'tab-historico': {
          templateUrl: 'templates/historico.html',
          controller: 'AppCtrl'
        }
      }
    })

    .state('tab.login', {
      url: '/login',
      views: {
        'tab-login': {
          templateUrl: 'templates/login.html',
          controller: 'AppCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');

});
