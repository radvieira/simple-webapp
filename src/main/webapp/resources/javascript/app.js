angular.module('SimpleWebApp', ['ngRoute', 'Contacts']);

angular.module('SimpleWebApp').config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.when('/', {
		controller: 'ContactListCTRL',
		templateUrl: 'contacts/contact-list.tpl.html',
		resolve: {
			contacts: ['ContactService', function(ContactService) {
				return ContactService.list();
			}]
		}
	}).when("/contacts/:contactName", {
		controller: 'ContactCTRL',
		templateUrl: 'contact/contact.tpl.html',
		resolve: {
			contact: ['$route', 'ContactService', function($route, ContactService) {
				
				return ContactService.getByName($route.current.params.contactName);
				
			}]
		}		
	});
	
}]);