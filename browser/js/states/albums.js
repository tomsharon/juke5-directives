app.config(function ($stateProvider) {
	$stateProvider.state('albums', {
		url: '/albums',
		templateUrl: '/templates/albums.html',
		controller: 'AlbumsCtrl',
		resolve: {
			//allAlbums is the resolved result of a promise for all albums
			allAlbums: function (AlbumFactory) {
				return AlbumFactory.fetchAll();
			}
		}
	});
});