angular.module('BookEaterClub', [])
    .controller('CurrentBook', function($scope) {
         $scope.currentBook = [
        {
          title: 'Drood',
          author: 'by Dan Simmons',
          genre: "historical, fiction, fantasy",
          desc: 'Later',
          media: '../media/drood.jpg', 
          picked_by: 'Marcin',
          started: "24.10.2015"
        }
        ];
    });

    
    
    