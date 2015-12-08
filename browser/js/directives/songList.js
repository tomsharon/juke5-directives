app.directive('songList', function(PlayerFactory) {
	return {
		restrict: 'E',
		templateUrl: '/templates/song-list.html',
		scope: {
			list: '='
			//list is a pointer to whatever we set 'list' to in our <song-list> tag
			//note: list is two-way bound, meaning any changes from either side will propogate to the other side
		},
		link: function(scope, element, attrs) {
			// scope.album = theAlbum;
			//list dynamically changes between 'album', 'artist', or 'playlist' depending on our view/$scope
			scope.isCurrent = function (song) {
				var current = PlayerFactory.getCurrentSong();
				return current && current._id == song._id;
			};
			scope.start = function (song) {
				PlayerFactory.start(song, scope.list.songs);
			};

			scope.generateMailTo = function () {
				if (!scope.list) return;
				var link = 'Check out this groovy album: http://localhost:1337/#/albums/' + scope.list._id;
				return 'mailto:?subject=' + scope.list.name + '&body=' + link;
			};



		}
	}

})