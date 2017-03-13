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
            window.thoughter.displayNewThought(newThoughtObject);
          });
        } else {
          console.log('Error posting thought');
        }
      });
    };

    // says window.thoughter.buildThoughtListItem is not a function ???????????
    window.thoughter.displayNewThought = function displayNewThought(newThoughtObject) {
      // let newThoughtListItem = window.thoughter.buildThoughtListItem(newThoughtObject);
      // console.log(newThoughtListItem);
      // $('.newthought-section').append(newThoughtListItem);
      // $('.newthought-main').css('display', 'block');
    };

    /**
     * Upon the event of sumbission, this
     * function prevents the user from navigating to a new page.
     * @param  {Object} e jQuery submit event object
     * @return {void}
     */
    function newThoughtPoster(e) {
      e.preventDefault();
      window.thoughter.postThought($('#newthought-input').val());
    }
    $('.newthought-form').on('submit', newThoughtPoster );

}());
