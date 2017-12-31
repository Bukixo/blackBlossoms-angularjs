angular
  .module('bb')
  .controller('UsersShowCtrl', UsersShowCtrl);


UsersShowCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersShowCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersDelete() {
    vm.user
      .$remove()
      .then(() => $state.go('usersIndex'));
  }

  vm.delete = usersDelete;
}
