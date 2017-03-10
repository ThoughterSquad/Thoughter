(function () { //IIFE
  'use strict'; //use Javascript exactly how it's written

    window.thoughter = window.thoughter || {};

    console.log('data module');

    window.thoughter.retrieveThoughts = function retrieveThoughts() {
      //Fetch request for thoughts
      let promise = fetch('https://thoughter.herokuapp.com/api/Thoughts', {
        method: 'GET'
      })
      .then(function handleResponse(responseObj) {
        console.log(responseObj.status);// check for response status
        if (responseObj.status > 199 && responseObj.status < 300) {
          responseObj.json().then(function printData(data) {
            console.log('All thoughts!', data);
          });
        }
      });
    };

    window.thoughter.retrieveThoughts();

}) ();
