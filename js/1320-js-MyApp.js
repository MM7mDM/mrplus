var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element


  name: 'evallstore', // App name
  theme: 'md', // Automatic theme detection

  // App root data
  data: function () {
    return {
      user: {
        firstName: 'Evall',
        lastName: 'Store',
      },
 
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});
