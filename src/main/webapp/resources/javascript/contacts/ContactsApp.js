angular.module('Contacts', []);

angular.module('Contacts').controller('ContactListCTRL', ['$scope', '$location', 'contacts', 'ContactService', function($scope, $location, contacts, ContactService) {

	$scope.contacts = contacts;
	
	$scope.viewDetail = function(contact) {
		
		$location.path("/contacts/" + contact.firstName);
		
	};
	
}]);

angular.module('Contacts').controller('ContactCTRL', ['$scope', 'contact', function($scope, contact) {

	$scope.contact = contact;
	
}]);

angular.module('Contacts').provider('ContactService', function() {
	
	var $http,
		$q,
		contactService = {
			list: function() {
			
				var deferred = $q.defer();
				
				$http.get('api/contacts/list').then(function(response) {
					deferred.resolve(response.data);
				});
				
				return deferred.promise;
			},
			getByName: function(name) {
				
				var deferred = $q.defer();
				
				$http.get('api/contacts/name/' + name).then(function(response) {
					
					deferred.resolve(response.data);
					
				});
				
				return deferred.promise;				
			}
		};
	
	return {
		
		$get: ['$http', '$q', function(_$http_, _$q_) {
			
			$http = _$http_;
			$q = _$q_;
			
			return contactService;
		}]
	
	};
	
});