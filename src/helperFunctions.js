(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  // comverts UTC datecode into a user readable string
  window.thoughter.formattedDate = function formattedDate(date) {
    let formattedDate = '';
    formattedDate = date.getHours() + ':' +date.getMinutes() + ' on ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear().toString().substr(2, 3);
    console.log(formattedDate);
    return formattedDate;
  };

  // function used with thought creation date and author username
  window.thoughter.formatThoughtHeader = function formatThoughtHeader(date, username) {
    return 'Posted at ' + window.thoughter.formattedDate(date) + ' by ' + username;
  };

}());
