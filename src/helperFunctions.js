(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

/**
 * turns a date string from a thought object into a user readable format
 * @param  {String} date a UTC date stamp
 * @return {String}      a date in the style: 'MM/DD/YY at HH:MM'
 */
  window.thoughter.formattedDate = function formattedDate(date) {
    let formattedDate = '';
    let minutes = date.getMinutes();
    if (minutes.toString().length < 2) minutes = '0' + minutes;
    formattedDate = date.getHours() + ':' + minutes + ' on ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear().toString().substr(2, 3);
    console.log(formattedDate);
    return formattedDate;
  };

/**
 * creates a thought list item with header and content
 * @param  {thoughtObject} thoughtObj an object with a creation time and a content
 * @return {Object}   an html li element with date time header and thought content
 */
  window.thoughter.buildThoughtListItem = function buildThoughtListItem(thoughtObj) {
    let thoughtObjLi = $(document.createElement('li'))
      .addClass('recent-thought')
      .append($(document.createElement('h5'))
        .addClass('alert alert-info')
        .text(window.thoughter.formatThoughtHeader(new Date(thoughtObj.createTime))))
      .append($(document.createElement('p'))
        .text(thoughtObj.content));
    return thoughtObjLi;
  };

  /**
   * function used with thought creation date and author username to format a header for thought display
   * @param  {String} date A date string formatted for user readability: 'MM/DD/YY at HH:MM'
   * @return {String}      message to insert into a header for a displayed thought object: 'Posted on MM/DD/YY at HH:MM'
   */
  window.thoughter.formatThoughtHeader = function formatThoughtHeader(date)
    // , username) // commented out until username functionality implemented
    { return 'Posted at ' + window.thoughter.formattedDate(date);
    //  + ' by ' + username // include this line for epic mode
  };

}());
