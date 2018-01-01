angular
  .module('bb')
  .controller('EventsIndexCtrl', EventsIndexCtrl);


EventsIndexCtrl.$inject = ['Event'];
function EventsIndexCtrl(Event) {
  const vm = this;

  vm.all = Event.query();
}
