<!DOCTYPE html>
<html>
	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">	
		
		<link rel="stylesheet"
			href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
			
		<style>
			body {
				padding-top: 70px;
			}
		</style>
	</head>
	<body data-ng-app="SimpleWebApp">
		<div class="container">
			<div class="navbar navbar-default navbar-fixed-top" role="navigation">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">Making Contact</a>
				</div>
			</div>
		</div>
		<div data-ng-view></div>
		<script type="text/ng-template" id="contacts/contact-list.tpl.html">
		<div class="container">
			<h2>All of Your Contacts</h2>
			<ul class="list-group">
				<li class="list-group-item" data-ng-repeat="contact in contacts" data-ng-click="viewDetail(contact)">
					<span ng-bind="contact.lastName"></span>, <span ng-bind="contact.firstName"></span>
				</li>
			</ul>
		</div>		
		</script>
		<script type="text/ng-template" id="contact/contact.tpl.html">
		<div class="container">
			<h2>Contact <span data-ng-bind="contact.firstName"></span></h2>
		</div>
		</script>		
		<script src="resources/javascript/vendor/angular-1.2.13.js"></script>
		<script src="resources/javascript/vendor/angular-route-1.2.13.js"></script>
		<script src="resources/javascript/app.js"></script>
		<script src="resources/javascript/contacts/ContactsApp.js"></script>
	</body>

</html>
