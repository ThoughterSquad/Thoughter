(function () { //IIFE
  'use strict'; //use Javascript exactly how it's written

    window.thoughter = window.thoughter || {};

    /**
     * retrieveThoughts retrieves a selection of thought objects from the
     * backend DB and displays them on the recent thoughts page
     * @return {Promise}
     */
    window.thoughter.retrieveThoughts = function retrieveThoughts() {
      //Fetch request for thoughts
      fetch('https://thoughter.herokuapp.com/api/Thoughts?filter={"limit":20, "order":"createTime DESC"}', {
        method: 'GET'
      })
      .then(function handleResponse(responseObj) {
        if (responseObj.status > 199 && responseObj.status < 300) {
          responseObj.json().then(function printData(data) {
            data.forEach(function logThought(thoughtObj) {
              let thoughtObjUl = document.querySelector('.recentthoughts-section');
              thoughtObjUl.appendChild(window.thoughter.buildThoughtListItem(thoughtObj));
            });
          });
        }
      });
    };

    window.thoughter.retrieveThoughts();

}) ();
