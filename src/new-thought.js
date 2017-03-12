(function () {
  'use strict';
    window.thoughter = window.thoughter || {};

    // POSTs a new thought to the backend database
    function postThought(thought) {
      fetch('https://thoughter.herokuapp.com/api/Thoughts', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(thought)
        }
      ).then(function verifyNewThougthPost(data) {

      });
    }

    $('.login-form').on('submit', function loginEventHandler(e) {
      e.preventDefault();
      window.localStorage.setItem('username', $('#login-username').val());
      window.thoughter.loginUser($('#login-password').val());
    });

}());
