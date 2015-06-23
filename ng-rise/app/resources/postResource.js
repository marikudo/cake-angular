;(function(app){

  app.factory('TestService',function($resource) {
    return $resource('http://localhost:8765/rest/posts.json',{});
  });

})(app);    