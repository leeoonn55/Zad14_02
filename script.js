// var element = React.createElement('div', {}, 'Hello world!');


var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      image: 'img/harry.png'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      image: 'img/krol.png'
    },
    {
        id: 3,
        title: 'Kubuś Pucahtek',
        desc: 'Film o misiu',
        image: 'img/kubus.jpg'
      },
      {
        id: 4,
        title: 'Masza i niedźwiedź',
        desc: 'Film o misiu i nie tylko',
        image: 'img/masza.jpg'
      }  
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src:movie.image} )
        // React.createElement('img', {src:"img/harry.png"})
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));