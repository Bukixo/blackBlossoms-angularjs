angular
  .module('bb')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/js/views/home.html'
      })
    
        .state('about', {
          url: '/about',
          templateUrl: '/js/views/about.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: '/js/views/login.html',
          controller: 'LoginCtrl as login'
        })
////======================= USERS ==================================///////

        .state('usersIndex', {
          url: '/user',
          templateUrl: '/js/views/users/usersIndex.html',
          controller: 'UsersIndexCtrl as usersIndex'
        })
        .state('usersShow', {
          url: '/users/:id',
          templateUrl: '/js/views/users/usershow.html',
          controller: 'UsersShowCtrl as usersShow'
        })
        .state('usersEdit', {
          url: '/users/:id/edit',
          templateUrl: 'js/views/users/userEdit.html',
          controller: 'UsersEditCtrl as usersEdit'
        })

////====================== POSTS ====================///////////

    .state('postsIndex', {
      url: '/posts',
      templateUrl: '/js/views/posts/postsIndex.html',
      controller: 'PostsIndexCtrl as postsIndex'
    })
    .state('postsShow', {
      url: '/posts/:id',
      templateUrl: '/js/views/posts/postsShow.html',
      controller: 'PostsShowCtrl as postsShow'
    })
    .state('postsEdit', {
      url: '/posts/:id/edit',
      templateUrl: 'js/views/posts/postsEdit.html',
      controller: 'PostsEditCtrl as postsEdit'
    })
    .state('postsNew', {
      url: '/posts/new',
      templateUrl: 'js/views/posts/postsNew.html',
      controller: 'PostsNewCtrl as postsNew'
    })

////====================== Artists ====================///////////

.state('artistsIndex', {
  url: '/artists',
  templateUrl: '/js/views/artists/artistsIndex.html',
  controller: 'ArtistsIndexCtrl as artistsIndex'
})
.state('artistsShow', {
  url: '/artists/:id',
  templateUrl: '/js/views/artists/artistsShow.html',
  controller: 'ArtistsShowCtrl as artistsShow'
})
.state('artistsEdit', {
  url: '/artists/:id/edit',
  templateUrl: 'js/views/artists/artistsEdit.html',
  controller: 'ArtistsEditCtrl as artistsEdit'
})
.state('artistsNew', {
  url: '/artists/new',
  templateUrl: 'js/views/artists/artistsNew.html',
  controller: 'ArtistsNewCtrl as artistsNew'
})

///////////================== EVENTS ==============================/////////

.state('eventsIndex', {
  url: '/events',
  templateUrl: '/js/views/events/eventsIndex.html',
  controller: 'EventsIndexCtrl as eventsIndex'
})
.state('eventsShow', {
  url: '/events/:id',
  templateUrl: '/js/views/events/eventsShow.html',
  controller: 'EventsShowCtrl as eventsShow'
})
.state('eventsEdit', {
  url: '/events/:id/edit',
  templateUrl: 'js/views/events/eventsEdit.html',
  controller: 'EventsEditCtrl as eventsEdit'
})
.state('eventsNew', {
  url: '/events/new',
  templateUrl: 'js/views/events/eventsNew.html',
  controller: 'EventsNewCtrl as eventsNew'
});

  $urlRouterProvider.otherwise('/');
}
