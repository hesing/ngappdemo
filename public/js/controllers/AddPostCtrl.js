angular.module("myApp")
	.controller("AddPostCtrl", function($state, PostService){
		var addpostvm = this;
		addpostvm.formData = {};
		
		addpostvm.addPost = function(){
			PostService.addPost(addpostvm.formData)
				.success(function(post){
					console.log("Post added", post);
					$state.go('posts');
				});
		}
	});