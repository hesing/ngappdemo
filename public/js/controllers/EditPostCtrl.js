angular.module("myApp")
	.controller("EditPostCtrl", function($state, PostService, $stateParams){
		var editpostvm = this;
		editpostvm.formData = {};

		var postId = $stateParams.postId;
		console.log(postId);
		if(postId){
			PostService.getSinglePost(postId)
				.success(function(res){
					editpostvm.formData = res;
				});		
		}

		editpostvm.updatePost = function(){
			PostService.updatePost(editpostvm.formData)
				.success(function(post){
					console.log("Post Updated", post);
					$state.go('posts');
				});
		}
	});