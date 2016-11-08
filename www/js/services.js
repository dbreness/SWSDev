angular.module('starter.services', [])
  .factory('AppService', function( $rootScope, $state, $ionicPopup, $http ) {
    AppService =  {
      tabList : {},
      init: function () {
        AppService.setUser( { isLoggedIn : false } );
        $rootScope.goTo = function ( whereTo ) {
          $state.go( whereTo );
          console.log( $rootScope.showTabs );
        };
        $rootScope.resetTabList = function () {
          this.tabList = {
            usuario : false,
            vehiculo : false,
            cita : false
          };
        };
      },
      getTabList: function () {
        return AppService.tabList;
      },
      getDataTest : function () {  
        return $http.get("http://localhost:8099/WCF_SWS.Service1.svc/obtenerClientes");  
    },
      setTabList: function ( pTabList ) {
        AppService.tabList = pTabList;
      },
      showMessage: function ( ptitle, ptemplate ) {
        var alertPopup = $ionicPopup.alert({
          title: ptitle,
          template: ptemplate
        });
      },
      logout: function () {
        $rootScope.resetTabList();
        AppService.setUser( { isLoggedIn : false } );
        $rootScope.goTo( 'tab.login' );
      },
      login : function ( username, pass ) {
        if( pass == "123" ){
          $rootScope.resetTabList();
          switch( username ){
            case "admin":
              $rootScope.user = { isLoggedIn : true, type : 'usuario' };
              break;
          }
        }
        return $rootScope.user;
      },
      getUser:  function (){
        console.log( $rootScope.user );
        return $rootScope.user;
      },
      setUser: function ( pUser ) {
        $rootScope.user = pUser;
      },
    };
    return AppService;
  });

