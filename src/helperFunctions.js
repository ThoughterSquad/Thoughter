(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  // comverts UTC datecode into a user readable string
  window.thoughter.formattedDate = function formattedDate(date) {
    let formattedDate = '';
    let minutes = date.getMinutes();
    if (minutes.toString().length < 2) minutes = '0' + minutes;
    formattedDate = date.getHours() + ':' + minutes + ' on ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear().toString().substr(2, 3);
    console.log(formattedDate);
    return formattedDate;
  };

  // function used with thought creation date and author username to format a header for thought display
  window.thoughter.formatThoughtHeader = function formatThoughtHeader(date)
    // , username) // commented out until username functionality implemented
    {
    return 'Posted at ' + window.thoughter.formattedDate(date)
    //  + ' by ' + username // include this line for epic mode
    ;
  };

}());
