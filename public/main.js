var app = angular.module('BookEaterClub', []);


app.controller('PastBooks', function($scope) {
         $scope.books = [
        {
          title: 'The Diamond Age',
          author: 'by Neal Stephenson',
          genre: "science fiction",
          desc: 'Later',
          media: '../media/diamond_age.jpg', 
          picked_by: 'Joe'
        },
        {
          title: 'Success',
          author: 'by Martin Amis',
          genre: "fiction",
          desc: 'Later',
          media: '../media/success.jpg',
          picked_by: 'Maureen'
        },
        {
          title: 'Homicide - A Year on the Killing Streets',
          author: 'by David Simon',
          genre: "crime",
          desc: 'Later',
          media: '../media/homicide.jpg',
          picked_by: 'Sean'
        },
        {
          title: 'The Magic Mountain',
          author: 'by Thomas Mann',
          genre: "classic, fiction",
          desc: 'Later',
          media: '../media/the-magic-mountain.jpg',
          picked_by: 'Mandy'
        },
        {
          title: 'The Gods Themselves',
          author: 'by Isaac Asimov',
          genre: "science fiction",
          desc: 'Later',
          media: '../media/goods_themselves.jpg',
          picked_by: 'Marcin'
        },
        {
          title: 'The Double',
          author: 'by Fyodor Dostoyevsky',
          genre: "classic, fiction",
          desc: 'Later',
          media: '../media/double.jpg',
          picked_by: 'Joe'
        }
    ];
    });


app.controller('NowRead', function($scope) {
    $scope.book = 
        {
          title: 'Drood',
          author: 'by Dan Simmons',
          genre: 'historical, fiction, fantasy',
          desc: 'Later',
          media: '../media/drood.jpg', 
          picked_by: 'Marcin',
          started: '24.10.2015',
          end: 'XX.XX.XXXX',
          pub: 'XXX'
        };
});


app.controller('About', function($scope) {

         $scope.about = [
        {
          name: 'Joe',
          picture: "http://placehold.it/200x200",
          desc: "Lorem ipsum dolor sit amet, quem referrentur sea ad, saepe pertinax eloquentiam mei te, pri sonet eirmod eripuit ex. Duo eu sumo mentitum, vim an ridens perfecto euripidis. Facilisis vituperata eu duo. Ei vivendum gubergren gloriatur vis, sea possim accusata dignissim ex. Amet labitur ut vim, vix aliquam perfecto recusabo ea. Id omnis iisque volumus eam, his eu dissentiunt contentiones mediocritatem."
        },
        {
          name: 'Marcin',
          picture: '../media/marcin.JPG',
          desc: 'Big Star Wars and science fiction fan. Also books and boardgames collector, as well as active bridge and chess player. Loves hicking and traveling.'
        },
        {
          name: 'Mandy',
          picture: 'http://placehold.it/200x200',
          desc: 'Lorem ipsum dolor sit amet, quem referrentur sea ad, saepe pertinax eloquentiam mei te, pri sonet eirmod eripuit ex. Duo eu sumo mentitum, vim an ridens perfecto euripidis. Facilisis vituperata eu duo. Ei vivendum gubergren gloriatur vis, sea possim accusata dignissim ex. Amet labitur ut vim, vix aliquam perfecto recusabo ea. Id omnis iisque volumus eam, his eu dissentiunt contentiones mediocritatem.'
        },
        {
          name: 'Sean',
          picture: 'http://placehold.it/200x200',
          desc: 'Lorem ipsum dolor sit amet, quem referrentur sea ad, saepe pertinax eloquentiam mei te, pri sonet eirmod eripuit ex. Duo eu sumo mentitum, vim an ridens perfecto euripidis. Facilisis vituperata eu duo. Ei vivendum gubergren gloriatur vis, sea possim accusata dignissim ex. Amet labitur ut vim, vix aliquam perfecto recusabo ea. Id omnis iisque volumus eam, his eu dissentiunt contentiones mediocritatem.'
        },
        {
          name: 'Maureen',
          picture: '../media/maureen.jpg',
          desc: 'Mo is a UX person. She likes Patricia Highsmith, audiobooks, and almost any detective novel.'
        }
        
    ];
    });


app.controller('FundooCtrl', function($scope, $window) {
    $scope.rating = 5;
    $scope.saveRatingToServer = function(rating) {
      /*$window.alert('Rating selected - ' + rating);<--- need to put some code here*/
    };
  })
  .directive('fundooRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating">' +
                  '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                    '\u2605' +
                  '</li>' +
                '</ul>',
      scope: {
        ratingValue: '=',
        max: '=',
        readonly: '@',
        onRatingSelected: '&'
      },
      link: function (scope, elem, attrs) {

        var updateStars = function() {
          scope.stars = [];
          for (var  i = 0; i < scope.max; i++) {
            scope.stars.push({filled: i < scope.ratingValue});
          }
        };

        scope.toggle = function(index) {
          if (scope.readonly && scope.readonly === 'true') {
            return;
          }
          scope.ratingValue = index + 1;
          scope.onRatingSelected({rating: index + 1});
        };

        scope.$watch('ratingValue', function(oldVal, newVal) {
          if (newVal) {
            updateStars();
          }
        });
      }
    }
  });
    
    