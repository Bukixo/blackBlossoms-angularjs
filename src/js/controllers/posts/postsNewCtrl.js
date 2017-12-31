angular
  .module('bb')
  .controller('PostsNewCtrl', PostsNewCtrl);

PostsNewCtrl.$inject = ['Post', '$state'];
function PostsNewCtrl(Post, $state) {
  const vm = this;
  vm.post = {};

  function postsCreate() {

    Post
      .save({ post: vm.post })
      .$promise
      .then(() => $state.go('postsIndex'));
  }

  vm.create = postsCreate;
}
