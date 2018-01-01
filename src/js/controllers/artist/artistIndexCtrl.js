angular
  .module('bb')
  .controller('ArtistsIndexCtrl', ArtistsIndexCtrl);

ArtistsIndexCtrl.$inject = ['Artist'];
function ArtistsIndexCtrl(Artist) {
  const vm = this;

  vm.all = Artist.query();
}
