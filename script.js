
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    imageSrc: 'img/harry.png'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    imageSrc: 'img/krol.png'
  },
  {
    id: 3,
    title: 'Kubuś Pucahtek',
    desc: 'Film o misiu',
    imageSrc: 'img/kubus.jpg'
  },
  {
    id: 4,
    title: 'Masza i niedźwiedź',
    desc: 'Film o misiu i nie tylko',
    imageSrc: 'img/masza.jpg'
  }
];

// Title  
var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    return (React.createElement('h1', {}, this.props.title)
    );
  }
});

// Description  
var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function () {
    return (
      React.createElement('div', { className: 'card_script_review' },
        React.createElement('p', {}, this.props.desc)
      )
    );
  }
});

// 	Image      
var CardImage = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
  },
  render: function () {
    return (
      React.createElement('div', { className: 'card_image' },
        React.createElement('img', { src: this.props.image })
      )
    );
  }
});

// Script  
var CardScript = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function () {
    return (
      React.createElement('div', { className: 'card_script' },
        React.createElement(MovieTitle, { title: this.props.movie.title }),
        React.createElement(MovieDescription, { desc: this.props.movie.desc })
      )
    );
  }
});

// Move  
var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function () {
    return (
      React.createElement('div', { className: 'card' },
        React.createElement(CardScript, { movie: this.props.movie }, ''),
        React.createElement(CardImage, { image: this.props.movie.imageSrc }, '')

      )
    );
  }
});

var Cards = movies.map(function (movie) {
  return React.createElement(Movie, { key: movie.id, movie: movie });

});

var element = React.createElement('section', {},
  React.createElement('div', { className: 'container' }, React.createElement('h1', {}, 'Lista filmów:'), Cards)
);

ReactDOM.render(element, document.getElementById('app'));