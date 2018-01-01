angular
  .module('bb')
  .controller('EventsEditCtrl', EventsEditCtrl);

EventsEditCtrl.$inject = ['Event', '$stateParams', '$state'];
function EventsEditCtrl(Event, $stateParams, $state) {
  const vm = this;

  vm.event = Event.get($stateParams);

  function eventsUpdate() {
    Event.update({ id: vm.event.id, event: vm.event })
      .$promise
      .then(() => $state.go('eventsShow', $stateParams));
  }

  vm.update = eventsUpdate;
}
