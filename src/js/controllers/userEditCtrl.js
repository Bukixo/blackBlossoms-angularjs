angular
  .module('bb')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersUpdate() {
    User.update({ id: vm.user.id, user: vm.user })
      .$promise
      .then(() => $state.go('usersShow', $stateParams));
  }

  vm.update = usersUpdate;
}
