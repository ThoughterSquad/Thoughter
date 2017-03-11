(function () { //IIFE
  'use strict'; //use Javascript exactly how it's written

    window.thoughter = window.thoughter || {};
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
              let thoughtObjLi = document.createElement('li');
              thoughtObjLi.setAttribute('class','recent-thought');
              let thoughtHeader = document.createElement('h5');
              thoughtHeader.setAttribute('class', 'alert alert-info');
              thoughtHeader.innerText = thoughtObj.createTime;
              let thoughtContent = document.createElement('p');
              thoughtContent.innerText = thoughtObj.content;
              thoughtObjLi.appendChild(thoughtHeader);
              thoughtObjLi.appendChild(thoughtContent);
              thoughtObjUl.appendChild(thoughtObjLi);
              console.log(thoughtObjUl);
            });
          });
        }
      });
    };

    window.thoughter.retrieveThoughts();
}) ();
