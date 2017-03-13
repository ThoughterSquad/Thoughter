(function () { //IIFE
  'use strict'; //use Javascript exactly how it's written

    window.thoughter = window.thoughter || {};

    // retrieves a selection of thought objects from backend DB and displays them on recent thoughts page
    window.thoughter.retrieveThoughts = function retrieveThoughts() {
      //Fetch request for thoughts
      fetch('https://thoughter.herokuapp.com/api/Thoughts?filter={"limit":20, "order":"createTime DESC"}', {
        method: 'GET'
      })
      .then(function handleResponse(responseObj) {
        if (responseObj.status > 199 && responseObj.status < 300) {
          responseObj.json().then(function printData(data) {
            data.forEach(function logThought(thoughtObj) {
              // let thoughtObjUl = document.querySelector('.recentthoughts-section');
              // console.log(typeof thoughtObj);
              // console.log(thoughtObj.content);
              let liWithRightStuffInsideOfIt = window.thoughter.buildThoughtListItem(thoughtObj);
              // console.log(liWithRightStuffInsideOfIt);
              $('.recentthoughts-section').append(liWithRightStuffInsideOfIt);
            });
          });
        }
      });
    };

    window.thoughter.retrieveThoughts();

}) ();
