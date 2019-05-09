
exports.seed = function(knex, Promise) {
  return knex('personal').del()
    .then(function () {
      return knex('personal').insert([
        {
          id:1,
          image:'https://cdn.pixabay.com/photo/2017/08/10/03/00/youtube-2617510_960_720.jpg',
          title:'YouTube Integration',
          tech:'Ruby on Rails, OAuth 2',
          image_two:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png',
          description:'Ruby on Rails YouTube OAuth version 2 integration involving server-side requests for authorization and user data. Also, storing pertinent information, such as an access token React client-side components handling redirects, sending access token server-side, and display user related YouTube data.',
          image_three:'https://cdn.pixabay.com/photo/2017/10/10/21/49/youtuber-2838945_960_720.jpg',
          url:'https://github.com/jdg2384/work/blob/master/youtube.rb',
        },
        {
          id:2,
          image:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/comparison.png',
          title:'Cue Comparison Page',
          tech:'React.js, Flux.js, React-Cookie',
          image_two:'https://cuemarketplace.com/img/website/suzie-hands-out-full.svg',
          description:'React component designed to display additional product comparison information once user provides information, which is stored in cookies and sent to Cue’s server. Integrated Hubspot form API on the server side to send user information to HubSpot to be added to a sale sequence.',
          image_three:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/concert.jpg',
          url:'https://github.com/jdg2384/hoist',
        },
        {
          id:3,
          image:'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
          title:'Node.js Starter Backend',
          tech:'Node.js, Express.js, PostgreSQL, Knex.js, Bcrypt, JSON Web Token(JWT), Mocha.js, Supertest.js.',
          image_two:'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',
          description:'Starter server that allows users to sign up and get access to a web application. Features password hashing, JWT token authentication, Unit Testing',
          image_three:'https://cdn.mos.cms.futurecdn.net/Vq5LSWz9LfvU5xGk5TSAQi-970-80.jpg',
          url:'https://github.com/jdg2384/node_starter_backend',
        },
        {
          id:4,
          image:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/hoist.jpg',
          title:'Hoist',
          tech:'React.js, Redux, Node.js, Knex.js, PostgreSQL, Express.js CRUD routes, Javascript, Axios, Spotify API, React Native, WebSockets, Spotify OAuth  SDK',
          image_two:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/hoistLogo.png',
          description:'Concert ride sharing app giving users the option to join or create a ride to a concert.',
          image_three:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/concert.jpg',
          url:'https://github.com/jdg2384/hoist',
        },
        {
          id:5,
          image:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/camp.jpg',
          title:'Prime Mtn',
          tech:'Django, Sqlite, jQuery, JavaScript,',
          image_two:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/primeLogo.png',
          description:'React Native App designed to match partners based on musical preferences using Spotify API',
          image_three:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/hiking.jpg',
          url:'https://github.com/jdg2384/PrimeMtn',
        },
        {
          id:6,
          image:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/date.jpg',
          title:'Dateify',
          tech:'React Native, Redux, Node.js, Knex.js, PostgreSQL, Express.js CRUD routes, Javascript, Axios, Spotify API, React Native, WebSockets, Spotify OAuth  SDK',
          image_two:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/dateLogo.png',
          description:'React Native App designed to match partners based on musical preferences using Spotify API',
          image_three:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/dating.jpg',
          url:'https://github.com/jdg2384/Dateify',
        },
      ]);
    });
};

// heroku pg:reset DATABASE_URL --confirm peaceful-tor-89083

