app.config(function ($stateProvider) {
	$stateProvider.state('album', {
		url: '/albums/:albumId',
		templateUrl: '/templates/album.html',
		controller: 'AlbumCtrl',
		resolve: {
			//theAlbum is the resolved result of a promise for an album
			theAlbum: function (AlbumFactory, $stateParams) {
				return AlbumFactory.fetchById($stateParams.albumId);
			}
		}
	});
});