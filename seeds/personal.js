
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('personal').del()
    .then(function () {
      // Inserts seed entries
      return knex('personal').insert([
        {
          id:1,
          image:'https://www.digitaltrends.com/wp-content/uploads/2013/05/Online-Dating-Guide-header.jpg',
          title:'Dateify',
          tech:'React Native, Redux, Node.js, Knex.js, PostgreSQL, Express.js CRUD routes, Javascript, Axios, Spotify API, React Native, WebSockets, Spotify OAuth  SDK',
          image_two:'https://www.digitaltrends.com/wp-content/uploads/2013/05/Online-Dating-Guide-header.jpg',
          description:'React Native App designed to match partners based on musical preferences using Spotify API',
          image_three:'https://www.digitaltrends.com/wp-content/uploads/2013/05/Online-Dating-Guide-header.jpg',
          url:'https://github.com/jdg2384/Dateify',
        },
        {
          id:2,
          image:'https://urban-plains.com/wp-content/uploads/2015/04/FEATURE_Hitchhiking-e1429978037775-1280x640.jpg',
          title:'Hoist',
          tech:'React Native, Redux, Node.js, Knex.js, PostgreSQL, Express.js CRUD routes, Javascript, Axios, Spotify API, React Native, WebSockets, Spotify OAuth  SDK',
          image_two:'https://urban-plains.com/wp-content/uploads/2015/04/FEATURE_Hitchhiking-e1429978037775-1280x640.jpg',
          description:'Concert ride sharing app giving users the option to join or create a ride to a concert.',
          image_three:'https://urban-plains.com/wp-content/uploads/2015/04/FEATURE_Hitchhiking-e1429978037775-1280x640.jpg',
          url:'https://www.facebook.com/joseph.grounds.3',
        },
        {
          id:3,
          image:'https://www.digitaltrends.com/wp-content/uploads/2013/05/Online-Dating-Guide-header.jpg',
          title:'testOne',
          tech:'React Native, Redux, Node.js, Knex.js, PostgreSQL, Express.js CRUD routes, Javascript, Axios, Spotify API, React Native, WebSockets, Spotify OAuth  SDK',
          image_two:'https://www.digitaltrends.com/wp-content/uploads/2013/05/Online-Dating-Guide-header.jpg',
          description:'React Native App designed to match partners based on musical preferences using Spotify API',
          image_three:'https://www.digitaltrends.com/wp-content/uploads/2013/05/Online-Dating-Guide-header.jpg',
          url:'https://www.facebook.com/joseph.grounds.3',
        },
        {
          id:4,
          image:'https://urban-plains.com/wp-content/uploads/2015/04/FEATURE_Hitchhiking-e1429978037775-1280x640.jpg',
          title:'testTwo',
          tech:'React Native, Redux, Node.js, Knex.js, PostgreSQL, Express.js CRUD routes, Javascript, Axios, Spotify API, React Native, WebSockets, Spotify OAuth  SDK',
          image_two:'https://urban-plains.com/wp-content/uploads/2015/04/FEATURE_Hitchhiking-e1429978037775-1280x640.jpg',
          description:'Concert ride sharing app giving users the option to join or create a ride to a concert.',
          image_three:'https://urban-plains.com/wp-content/uploads/2015/04/FEATURE_Hitchhiking-e1429978037775-1280x640.jpg',
          url:'www.link.com',
        },
        
      ]);
    });
};
