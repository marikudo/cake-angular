;(function(app){

  app.config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'app/views/posts/posts-template.html',
      controller: 'postController'
    }).otherwise({
      redirectTo: '/'
    });
  });

})(app);