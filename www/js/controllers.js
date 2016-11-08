angular.module('starter.controllers', [])
  .controller('AppCtrl', function($scope, $rootScope, AppService, $timeout ) {
    $scope.showTabs = true;
    $scope.loginData = {
      username : 'admin',
      password : '123'
    };

    $scope.scanCode = function () {
      AppService.openScanner();
    };
    $scope.logout = function () {
      AppService.logout();
    };

    $scope.GetAllClient = function (){
      debugger;
      var result = AppService.getDataTest();
    }

    $scope.nextStage = function ( stage ) {
      var go2Screen = null;
      switch ( stage ){
        case 'admin':
          go2Screen = 'usuario';
          break;
      }
      $rootScope.goTo( 'tab.'+ go2Screen );
    };

    $rootScope.showTabs = AppService.getTabList();

    $scope.login = function () {
      var user = AppService.login( $scope.loginData.username, $scope.loginData.password );
      if( user.isLoggedIn ){
        var go2Screen = null;
        switch ( user.type ){
          case 'usuario':
            $rootScope.showTabs.usuario = true;
            $rootScope.showTabs.vehiculo = true;
            $rootScope.showTabs.cita = true;
            go2Screen = 'tab.usuario';
            break;
        }
        $rootScope.goTo( go2Screen );
      } else{
        AppService.showMessage( 'Información errónea', 'Su usuario y/o contraseña son incorrectos, por favor intente de nuevo.' );
      }
    };

   

  });

