(function newThoughtModule() {
  'use strict';
    window.thoughter = window.thoughter || {};

    let promise = fetch(
  'https://thoughter.herokuapp.com/api',
  {
      method: 'POST',
      headers: {
        Authorization: 'token ' + ''
      },
      body: {
        JSON.stringify
      }

  }
});





}());
