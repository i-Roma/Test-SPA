'use strict';

/* jasmine specs for controllers go here */

describe('app controllers', function() {

  beforeEach(module('app'));

	describe('MainCtrl', function(){

		var scope, ctrl, $httpBackend;

	    beforeEach(inject(function(_$httpBackend_, $controller) {
	      $httpBackend = _$httpBackend_;
	      $httpBackend.expectGET('phones/phones.json').
	          respond([{"id": "motorola-xoom-with-wi-fi"}, {"createDate": 1443200000000}, {"changeDate": 1445500000000}, {"imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg"}, {"name": "Motorola XOOM\u2122 with Wi-Fi"}, {"status": "new"}]);

	      ctrl = $controller('PhoneListCtrl', {$scope: scope});
	    }));

	    it('should create "phones" model with 2 phones fetched from xhr', function() {
	      expect(scope.phones).toEqualData([]);
	      $httpBackend.flush();

	      expect(scope.phones).toEqualData(
	          [{"id": "motorola-xoom-with-wi-fi"}, {"createDate": 1443200000000}, {"changeDate": 1445500000000}, {"imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg"}, {"name": "Motorola XOOM\u2122 with Wi-Fi"}, {"status": "new"}]);
	    });


	  	it('should create "phones" model with 9 phones', function() {
	      var scope = {},
	          ctrl = new MainCtrl(scope);
	 
	      expect(scope.phones.length).toBe(9);
    	});

	});

	it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('');
    });

});

