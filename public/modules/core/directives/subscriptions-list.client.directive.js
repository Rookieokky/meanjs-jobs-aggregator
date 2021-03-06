'use strict';

angular.module('core').directive('subscriptionsList', ['Subscription', '$state', '$location',
	function(Subscription, $state, $location) {
		return {
			templateUrl: '/modules/core/views/subscriptions-list.client.view.html',
			restrict: 'E',
			// http://stackoverflow.com/questions/32286671/why-directives-method-is-available-from-parent-scope
			// https://github.com/angular/angular.js/wiki/Understanding-Scopes
			// create a child scope, otherwise controller's scope will be used
			scope: true,
			link: function postLink(scope, element, attrs) {
				Subscription.clear();
				scope.loadInProgress = true;
			 	Subscription.query(function(data){
					scope.loadInProgress = false;
					scope.subscriptions = Subscription.getAll();
				});


				scope.removeSubscription = function(subscription) {
					subscription.$remove(function() {
						for (var i in scope.subscriptions) {
							if (scope.subscriptions[i] === subscription) {
								scope.subscriptions.splice(i, 1);
							}
						}
					});
				};

				scope.editSubscription = function($event, subscription) {
					$event.preventDefault();
					$event.stopPropagation();

					$state.go('dashboard.edit-subscription', {
						subscriptionId: subscription._id
					});
				};

				scope.isItemActive = function(path, subscription) {
					var curPath = path + '/' + subscription._id;
					return ($location.path() === curPath);
				};
			}
		};
	}
]);
