'use strict';

describe("Getting Feedback", function() {

	beforeEach(module("myApp"));
	
	var ResultsController,
	scope;
	
	beforeEach(inject(function ($rootScope, $controller) {
	scope = $rootScope.$new();
	ResultsController = $controller('ResultsController', {
	$scope: scope
	});

	}));
	it('should print results!', function () {
	expect(scope.msg).toEqual("These are ur results!");
	expect(scope.text).toEqual("name");
	});
});
