angular
  .module('bb')
  .controller('ArtistsNewCtrl', ArtistsNewCtrl);

ArtistsNewCtrl.$inject = ['Artist', '$state'];
function ArtistsNewCtrl(Artist, $state) {
  const vm = this;
  vm.artist = {};

  function artistsCreate() {

    Artist
      .save({ artist: vm.artist })
      .$promise
      .then(() => $state.go('artistsIndex'));
  }

  vm.create = artistsCreate;
}
