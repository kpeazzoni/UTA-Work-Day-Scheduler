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

$(".saveBtn").on("click", function(event) {
  var key = $(this).parent().attr("id");
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value);
});

var dateTime = $("#date-time");
var LastOfficeHour = 17; 

setInterval(compareTime, 3600000);
setInterval(displayTime, 1000);

function displayTime() {
  var currentDateFormatted = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  dateTime.text(currentDateFormatted); 
}

function compareTime() { 
  var currentDate = dayjs();
  var currentHourEl = $("#hour-" + currentDate.hour());
  if (currentHourEl != null && currentHourEl.hasClass('future')) {
      currentHourEl.addClass('present');
      currentHourEl.removeClass('future');

      var pastHour = $("#hour-" + (currentDate.hour() - 1));
      pastHour.addClass('past');
      pastHour.removeClass('present');
    } else if (currentHourEl > LastOfficeHour) {
    $('.present').addClass('past');
    $('.past').removeClass('present');
  } 

  if (currentDate.hour() == 00) {
    $('.past').addClass('future');
    $('.future').removeClass('past');
  }
}