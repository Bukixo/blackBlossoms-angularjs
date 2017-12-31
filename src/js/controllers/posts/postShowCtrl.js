angular
  .module('bb')
  .controller('PostsShowCtrl', PostsShowCtrl);

PostsShowCtrl.$inject = ['Post', '$stateParams', '$state'];
function PostsShowCtrl(Post, $stateParams, $state) {
  const vm = this;

  vm.post = Post.get($stateParams);

  function postsDelete() {
    vm.post
      .$remove()
      .then(() => $state.go('postsIndex'));
  }

  vm.delete = postsDelete;
}
