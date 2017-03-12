(function () {
  'use strict';
    window.thoughter = window.thoughter || {};

    // POSTs a new thought to the backend database
    window.thoughter.postThought = function postThought(newThoughtContent) {
      let newThoughtObject = {"content": newThoughtContent, "authorId": window.localStorage.userId};
      fetch('https://thoughter.herokuapp.com/api/Thoughts', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(newThoughtObject)
        }
      ).then(function verifyNewThougthPost(response) {
        if (response.status > 199 && response.status < 300) {
          response.json().then(function handleData(data){
            console.log('new thought posted successfully!');
          });
        } else {
          console.log('Error posting thought');
        }
      });
    };

    window.thoughter.displayNewThought = function displayNewThought(newThoughtObject) {
      
    }

    $('.newthought-form').on('submit', function loginEventHandler(e) {
      e.preventDefault();
      window.thoughter.postThought($('#newthought-input').val());
    });

}());
