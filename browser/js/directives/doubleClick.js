app.directive('doubleClick', function() {
	return {
		restrict: 'A',
		scope: {
			doubleClick: '&'
		},
		link: function(scope, element, attrs) {
			element.on('dblclick', function() {
				scope.doubleClick();
			})
		}
	}
})