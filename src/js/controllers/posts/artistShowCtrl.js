angular
  .module('bb')
  .controller('ArtistsShowCtrl', ArtistsShowCtrl);

ArtistsShowCtrl.$inject = ['Artist', '$stateParams', '$state'];
function ArtistsShowCtrl(Artist, $stateParams, $state) {
  const vm = this;

  vm.artist = Artist.get($stateParams);

  function artistsDelete() {
    vm.artist
      .$remove()
      .then(() => $state.go('artistsIndex'));
  }

  vm.delete = artistsDelete;
}
