
describe('ContactCTRL ', function() {
	
	var scope,
		contact;

	//load the module before the injector is created
	beforeEach(module('Contacts'));
	
	beforeEach(inject(function($rootScope, $controller) {
		
		contact = {};
		
		scope = $rootScope.$new();
		
		$controller('ContactCTRL', {
			$scope: scope,
			contact: contact
		});
		
	}));
	
	it('should set contact on scope when constructed', function() {
		
		expect(scope.contact).toEqual(contact);
		
	});
	
});