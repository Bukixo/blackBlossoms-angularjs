angular
  .module('bb')
  .factory('Artist', Artist);

Artist.$inject = ['$resource', 'API_URL'];
function Artist($resource, API_URL) {
  return new $resource(`${API_URL}/artists/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
