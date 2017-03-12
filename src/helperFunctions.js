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

  // creates a thought list item with header and content
  window.thoughter.buildThoughtListItem = function buildThoughtListItem(thoughtObj) {
    let thoughtObjLi = document.createElement('li');
    thoughtObjLi.setAttribute('class','recent-thought');
    let thoughtHeader = document.createElement('h5');
    thoughtHeader.setAttribute('class', 'alert alert-info');
    thoughtHeader.innerText = window.thoughter.formatThoughtHeader(new Date(thoughtObj.createTime));
    let thoughtContent = document.createElement('p');
    thoughtContent.innerText = thoughtObj.content;
    thoughtObjLi.appendChild(thoughtHeader);
    thoughtObjLi.appendChild(thoughtContent);
    return thoughtObjLi;
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
