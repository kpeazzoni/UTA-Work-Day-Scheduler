// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( document ).ready(function() {
  $('.time-block').each(function(i, obj) {
    var id = $(this).attr('id');
    var value = localStorage.getItem(id);
    $(this).find(".description").val(value);
  });
});
// TODO: Add code to display the current date in the header of the page.
var currentDate = dayjs();
currentDate.format('dddd, MMMM D YYYY, h:mm:ss a');
var dateTime = $("#date-time");
setInterval(displayTime, 1000);

function displayTime() {
    currentDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
    dateTime.text(currentDate); 
};

var projectEl = $(".description").text();
var saveEl = $(".saveBtn");
var hourEl = $(".hour");
var LastOfficeHour = 17; 

// var counter = 10; 
// setInterval(function() {  
//   counter++;
// }, 10000);
setInterval(compareTime, 3600000);

function compareTime() { 
  var currentHourEl = $("#hour-" + currentDate.hour); // currentDate.hour()

  if (currentHourEl != null && currentHourEl.hasClass('future')) {
      currentHourEl.addClass('present');
      currentHourEl.removeClass('future');

      var pastHour = $("#hour-" + (currentDate.hour - 1));
      pastHour.addClass('past');
      pastHour.removeClass('present');
    } else if (currentHourEl > LastOfficeHour) {
    $('.present').addClass('past');
    $('.past').removeClass('present');
  } 

  if (currentDate.hour == 00) {
    $('.past').addClass('future');
    $('.future').removeClass('past');
  }
};

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function?
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

function handleProjectFormSubmit(event) {
  event.preventDefault();
};


$(".saveBtn").on("click", function(event) {
  var key = $(this).parent().attr("id");
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value);
  console.log(event);
});
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// function readProjectsFromStorage() {
//   // key is not defined (in scope) here. value parameter isn't needed
//   // move this up to document.ready function at top of page. 
//   // set storedItems as value for each textarea
//  var storedItems = localStorage.getItem(key, value);
//   return storedItems;
// };