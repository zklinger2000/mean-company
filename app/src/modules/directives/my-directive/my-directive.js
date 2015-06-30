/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
	@param {String} scopeOne: A scope property
	@param {Function} funcOne: A scope function

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
	@param {String} customText: Some special text

@dependencies
TODO

@usage
partial / html:
<div app-my-directive></div>
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('app').directive('appMyDirective', [ function () {

	return {
		restrict: 'A',
		scope: {
			scopeOne: '=',	// the '=' says this is a String or literal?
			funcOne: '&?'	// the '&' says this is a function
							// the '?' makes this optional to pass in
		},

		// replace: true,
		template: function(element, attrs) {
			var defaultsAttrs ={
			};
			for(var xx in defaultsAttrs) {
				if(attrs[xx] ===undefined) {
					attrs[xx] =defaultsAttrs[xx];
				}
			}
			//if customText isn't defined in HTML, set to empty string
			if (!attrs.customText) {
				attrs.customText = '';
			}
			var html ="<div>" +
				"my-directive" +
				"<br/>line 2" +
				"<br/>custom text: " + attrs.customText +
				"<br/>scope one: {{scopeOne}}" +
				"<br/>scope two: {{scopeTwo}}" +
				"<br/><div class='btn' ng-click='emitEvt()'>EmitEvt</div>" +
				"<br/><div class='btn' ng-click='funcOne()'>Func One</div>" +
			"</div>";
			return html;
		},
		
		link: function(scope, element, attrs) {
		},
		
		controller: function($scope, $element, $attrs) {
			$scope.scopeTwo = 'scope two';

			$scope.emitEvt = function() {
				$scope.$emit('appMyDirectiveEvt1', {});
				console.log('directive emit event');
			};
		}
	};
}]);
