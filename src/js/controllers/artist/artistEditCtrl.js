angular
  .module('bb')
  .controller('ArtistsEditCtrl', ArtistsEditCtrl);

ArtistsEditCtrl.$inject = ['Artist', '$stateParams', '$state'];
function ArtistsEditCtrl(Artist, $stateParams, $state) {
  const vm = this;

  vm.artist = Artist.get($stateParams);

  function artistsUpdate() {
    Artist.update({ id: vm.artist.id, artist: vm.artist })
      .$promise
      .then(() => $state.go('artistsShow', $stateParams));
  }

  vm.update = artistsUpdate;
}
