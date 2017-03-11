(function () {
  'use strict';
  window.thoughter = window.thoughter || {};

  // function loginUser distinct from authenticateUser? after login, just authenticate before posting a new thought?
  // store username, id and password in namespace vars?
  // or use helper functions to retrieve username and password across all pages from namespace
  // how do we pass username and password to the other pages after navigating away from login page?

  window.thoughter.authenticateUser = function authenticateUser(username, password) {
      fetch('https://thoughter.herokuapp.com/api/Authors/login', { method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ 'username': 'jordan', 'password': 'foobar' })
          })
          .then(function responseHandler(response) {
            if (response.status > 199 && response.status < 300) {
              console.log(response.status);
              response.json().then(function printData(data){
                console.log('Successful login for userId: ' + data.userId);
                console.log(data);
              });
            } else {
              console.log('Error logging in user: ' + username);
            }
          });
  };

    $('.login-form').on('submit', function loginEventHandler(e) {
      e.preventDefault();
      console.log('Log In button clicked!');
      window.thoughter.authenticateUser('jordan', 'foobar');
    });
})();
