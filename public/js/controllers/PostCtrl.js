angular.module("myApp")
	.controller("PostCtrl", function(PostService){
		var postvm = this;

		
		PostService.getPosts()
			.success(function(res){
				postvm.posts = res;
			});

		postvm.removePost = function(post){
			PostService.removePost(post.id)
				.success(function(){
					postvm.posts.splice(postvm.posts.indexOf(post), 1);
				});
		};
	});
	