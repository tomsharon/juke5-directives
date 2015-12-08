app.directive("albumList", function(AlbumFactory, ArtistFactory) {
	return {
		restrict: "E",
		templateUrl: "/templates/album-list.html",
		scope: {
			albums: "="
		},
		link: function(scope, element, attrs) {
			// console.log("THIS IS THE SCOPE FROM albumList Directive", scope)
			// console.log("This is attrs:", attrs)
		}			
	}
})




