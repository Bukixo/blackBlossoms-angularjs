angular
  .module('bb')
  .controller('PostsIndexCtrl', PostsIndexCtrl);
  
PostsIndexCtrl.$inject = ['Post'];
function PostsIndexCtrl(Post) {
  const vm = this;

  vm.all = Post.query();
}
