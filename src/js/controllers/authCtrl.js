angular
  .module('bb')
  .controller('AuthCtrl', AuthCtrl);


// AuthCtrl.$inject = ['$auth', '$state'];
// function AuthCtrl($auth, $state) {
//   const vm = this;
//
//   function register() {
//     $auth.signup(vm.user)
//       .then(user => console.log('this user is called',user, 'and has just registered'));
//   }
//   vm.register = register;
//
//   function login() {
//     // $auth.login(vm.credentials)
//     //   .then(user => console.log('this person has just logged',user));
//
//     $auth.login(vm.credentials)
//         .then(() => $state.go('home'));
//   }
//   vm.login = login;
// }
//
// console.log('wasssup');


///////////////////////

AuthCtrl.$inject = ['$auth', '$state'];
function AuthCtrl($auth, $state) {
  const vm = this;

  function register(){
    $auth.signup(vm.user)
      .then(user => console.log('this user is called',user, 'and has just registered')); //check for object in the console and inside the application check for the token but once login has been setup
  }

  vm.register = register;

  function login() {
    console.log('these are the credentials', vm.crendetials);
    $auth.login(vm.credentials)
      .then(() => $state.go('home'));

  }
  vm.login = login;
  function authenticate(provider){
    $auth.authenticate(provider)
    .then(() => $state.go('home'));
  }

  vm.authenticate = authenticate;
}
