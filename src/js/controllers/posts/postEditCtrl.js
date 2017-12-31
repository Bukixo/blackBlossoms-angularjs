angular
  .module('bb')
  .controller('PostsEditCtrl', PostsEditCtrl);

PostsEditCtrl.$inject = ['Post', '$stateParams', '$state'];
function PostsEditCtrl(Post, $stateParams, $state) {
  const vm = this;

  vm.post = Post.get($stateParams);

  function postsUpdate() {
    Post.update({ id: vm.post.id, post: vm.post })
      .$promise
      .then(() => $state.go('postsShow', $stateParams));
  }

  vm.update = postsUpdate;
}
