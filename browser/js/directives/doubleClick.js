app.directive('doubleClick', function() {
	return {
		restrict: 'A',
		scope: {
			//& means that double click will be assigned to a function
			//The “&” operator allows you to invoke or evaluate an expression on the parent scope of whatever the directive is inside of.
			doubleClick: '&'
		},
		link: function(scope, element, attrs) {
			element.on('dblclick', function() {
				scope.doubleClick();
			})
		}
	}
})