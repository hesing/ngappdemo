angular.module("myApp")
	.constant("BASE_URL", "http://jsonplaceholder.typicode.com/posts/")
	.service("PostService", function(BASE_URL, $http){
		
		this.getPosts = function(){
			return $http.get(BASE_URL);
		};

		this.addPost = function(post){
			return $http.post(BASE_URL, post);
		};

		this.getSinglePost = function(postId){
			return $http.get(BASE_URL+ postId);
		};

		this.updatePost = function(post){
			return $http.put(BASE_URL+post.id, post);
		};

		this.removePost = function(postId){
			return $http.delete(BASE_URL+postId);
		};

	});