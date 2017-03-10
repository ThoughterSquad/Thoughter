(function newThoughtModule() {
  'use strict';
    window.thoughter = window.thoughter || {};

    function postThought(thought) {
      fetch('https://thoughter.herokuapp.com/api/Thoughts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(thought)
        }
      );
    }

}());
