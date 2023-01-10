
$( document ).ready(function() {
  $('.time-block').each(function(i, obj) {
    const id = $(this).attr('id');
    const value = localStorage.getItem(id);
    $(this).find(".description").val(value);
  });
  updateProjectBlocks();
});

$(".saveBtn").on("click", function(event) {
  const key = $(this).parent().attr("id");
  const value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value);
});

$("#clear-btn").on('click', function(event) {
  $(".description").val("")
});

const dateTime = $("#date-time");
let LastOfficeHour = 17; 
const currentDate = dayjs();

setInterval(updateProjectBlocks, 100000);
setInterval(displayTime, 1000); 

function displayTime() {
  const currentDateFormatted = dayjs().format('dddd, MMMM D YYYY, hh:mm:ss a');
  dateTime.text(currentDateFormatted); 
}

function updateProjectBlocks() { 
  const currentHourEl = $("#hour-" + currentDate.hour());
 console.log("is this working?")
  if (currentHourEl != null && currentHourEl.hasClass('future')) {
    currentHourEl.addClass('present');
    currentHourEl.removeClass('future');

    const pastHour = $("#hour-" + (currentDate.hour() - 1));
    if (pastHour != null && pastHour.hasClass('present'))
        pastHour.addClass('past');
        pastHour.removeClass('present');
  } else if (currentDate.hour() > LastOfficeHour) {
  $('.present').addClass('past');
  $('.past').removeClass('present');
} 

  if (currentDate.hour() == 24) {
    $('.past').addClass('future');
    $('.future').removeClass('past');
  }
}