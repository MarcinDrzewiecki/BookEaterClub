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
          desc: "science fiction"
        },
        {
          name: 'Marcin',
          picture: 'http://placehold.it/200x200',
          desc: 'science fiction'
        },
        {
          name: 'Mandy',
          picture: 'http://placehold.it/200x200',
          desc: 'science fiction'
        },
        {
          name: 'Sean',
          picture: 'http://placehold.it/200x200',
          desc: 'science fiction'
        },
        {
          name: 'Maureen',
          picture: 'http://placehold.it/200x200',
          desc: 'science fiction'
        }
        
    ];
    });
    
    
    