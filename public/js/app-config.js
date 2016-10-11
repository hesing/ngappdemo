angular.module('myApp')
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'views/home.html'
		})
		.state('posts', {
			url: '/posts',
			templateUrl: 'views/posts/posts.html',
			controller: 'PostCtrl as postvm'
		})
		.state('addpost', {
			url: '/addpost',
			templateUrl: 'views/posts/post.html',
			controller: 'AddPostCtrl as addpostvm'
		})
		.state('editpost', {
			url: '/editpost/:postId',
			templateUrl: 'views/posts/edit-post.html',
			controller: 'EditPostCtrl as editpostvm'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html'
		});
	});