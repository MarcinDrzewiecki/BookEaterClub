var app = angular.module('BookEaterClub', []);


app.controller('PastBooks', function($scope) {
         $scope.books = [
         {
          title: 'Heart of the Dog',
          author: 'by Mikhail Bulgakov',
          genre: "classic, fiction",
          desc: 'Later',
          media: '../media/heart-of-the-dog.jpg', 
          picked_by: 'Mandy',
          data_target: '#modal1'
        },
          {
          title: 'Drood',
          author: 'by Dan Simmons',
          genre: "historical, fiction, fantasy",
          desc: 'Later',
          media: '../media/drood.jpg', 
          picked_by: 'Marcin',
          data_target: '#modal2'
        },
        {
          title: 'The Diamond Age',
          author: 'by Neal Stephenson',
          genre: "science fiction",
          desc: 'Later',
          media: '../media/diamond_age.jpg', 
          picked_by: 'Joe',
          data_target: '#modal3'
        },
        {
          title: 'Success',
          author: 'by Martin Amis',
          genre: "fiction",
          desc: 'Later',
          media: '../media/success.jpg',
          picked_by: 'Maureen',
          data_target: '#modal4'
        },
        {
          title: 'Homicide',
          author: 'by David Simon',
          genre: "crime",
          desc: 'Later',
          media: '../media/homicide.jpg',
          picked_by: 'Sean',
          data_target: '#modal5'
        },
        {
          title: 'The Magic Mountain',
          author: 'by Thomas Mann',
          genre: "classic, fiction",
          desc: 'Later',
          media: '../media/the-magic-mountain.jpg',
          picked_by: 'Mandy',
          data_target: '#modal6'
        },
        {
          title: 'The Gods Themselves',
          author: 'by Isaac Asimov',
          genre: "science fiction",
          desc: 'Later',
          media: '../media/goods_themselves.jpg',
          picked_by: 'Marcin',
          data_target: '#modal7'
        },
        {
          title: 'The Double',
          author: 'by Fyodor Dostoyevsky',
          genre: "classic, fiction",
          desc: 'Later',
          media: '../media/double.jpg',
          picked_by: 'Joe',
          data_target: '#modal8'
        }
    ];
    });


app.controller('NowRead', function($scope) {
    $scope.book = 
        {
          title: 'Tinker, Tailor, Soldier, Spy',
          author: 'by John Le Carre',
          genre: 'historical, fiction, fantasy',
          desc: "A modern classic in which John le Carré expertly creates a total vision of a secret world, Tinker, Tailor, Soldier, Spy begins George Smiley's chess match of wills and wits with Karla, his Soviet counterpart.",
          media: '../media/drood.jpg', 
          picked_by: 'Sean',
          started: '06.02.2016',
          end: 'XX.XX.XXXX',
          pub: 'XXX'
        };
});


app.controller('About', function($scope) {

         $scope.about = [
        {
          name: 'Joe',
          picture: "http://placehold.it/200x200",
          desc: "Lorem ipsum dolor sit amet, quem referrentur sea ads."
        },
        {
          name: 'Marcin',
          picture: '../media/marcin.JPG',
          desc: "Big Star Wars and science fiction fan, books and boardgames collector, and active bridge and chess player. Loves hiking and traveling." },
        {
          name: 'Mandy',
          picture: 'http://placehold.it/200x200',
          desc: 'Lorem ipsum dolor sit amet, quem referrentur sea ads. Lorem ipsum dolor sit amet, quem referrentur sea ads.' 
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
