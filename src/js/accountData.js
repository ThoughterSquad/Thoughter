(function () {
  'use strict';
  window.thoughter = window.thoughter || {};

  // logs in a user
  // sets a localStorage.userId for authenticating events on all pages
  window.thoughter.loginUser = function loginUser(password) {
    fetch('https://thoughter.herokuapp.com/api/Authors/login', { method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 'username': window.localStorage.username, 'password': password })
    })
    .then(function responseHandler(response) {
      if (response.status > 199 && response.status < 300) {
        response.json().then(function handleData(data){
          window.localStorage.setItem('userId', data.id);
        });
      } else {
        console.log('Error logging in user: ' + window.localStorage.username);
      }
    });
  };

  // event handler for log-in form submission
  // sets a localStorage.username property for site-wide use
  /**
   * This function recieves form data: username and password and then
   * submits data to allow the user to log-in
   * @param  {Object} e submit event object
   * @return {void}   
   */
  function loginEventHandler(e) {
    e.preventDefault();
    window.localStorage.setItem('username', $('#login-username').val());
    window.thoughter.loginUser($('#login-password').val());
  }
  $('.login-form').on('submit', loginEventHandler );

  // TODO logout function must return localStorage.username and id to ""

})();
