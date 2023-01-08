// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( document ).ready(function() {
  console.log( "ready!" );
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

var projectEl = $(".description")

var saveEl = $(".saveBtn");
var deleteEl;
var userInputEl;
var hourEl = $(".hour");
var LastOfficeHour = 17; 

var counter = 10; 
setInterval(function() {  
  counter++;
}, 10000);
//setInterval(compareTime, 3600000);
setInterval(compareTime, 5000);

function compareTime() { 
  var currentHourEl = $("#hour-" + counter);
  
  if (currentHourEl != null && currentHourEl.hasClass('future')) {
      currentHourEl.addClass('present');
      currentHourEl.removeClass('future');

      var pastHour = $("#hour-" + (counter - 1));
      pastHour.addClass('past');
      pastHour.removeClass('present');
    } else if (currentHourEl > LastOfficeHour) {
    $('.present').addClass('past');
    $('.past').removeClass('present');
  } 

  if (counter == 00) {
    $('.past').addClass('future');
    $('.future').removeClass('past');
  }
}
console.log(compareTime)
// once it gets to 18, set 17 to past and next day change all to future
// if (currentDate.hour().isBefore.currentHourEl) {
//   document.getElementsByClassName("time-block").classList.add("past") 
// } else if (currentDate.hour().isSame.currentHourEl)
  // get the element by "hour-" + currentDate.hour and remove future class
  // if element is found:
  // then add 'present' class
  // then get previous element, "hour-" + (currentDate.hour - 1), and replace present with past class

  

  // if (currentDate.hour().isBefore.officeHours[officeHoursIndex].hour) {
  //   document.getElementById
  //     .setAttribute("style", "background-color:gray");
  // }else if (currentDate.hour().isSame.officeHours[officeHoursIndex].hour) {
  //   projectEl
  //         .setAttribute("style", "background-color:gray");
  // } else (currentDate.hour().isAfter.officeHours[officeHoursIndex].hour) 
  //   projectEl
  //   .setAttribute("style", "background-color:green");
// if (currentDate.hour() > officeHours[officeHoursIndex].hour) {
//       projectEl
//       .setAttribute("style", "background-color:gray");
//   } else if (currentDate.hour() == officeHours[officeHoursIndex].hour) {
//      projectEl
//       .setAttribute("style", "background-color:red");
//   } else (currentDate.hour() < officeHours[officeHoursIndex].hour) 
//     projectEl
//     .setAttribute("style", "background-color:green");
//   };
// console.log(currentDate.hour());


// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.

// function readProjectsFromStorage() {
//   var projects = localStorage.getItem('projects');
//   if (projects) {
//     projects = JSON.parse(projects);
//   } else {
//     projects = [];
//   }
//   return projects;
// }

// function saveProjectsToStorage(projects) {
//   localStorage.setItem('projects', JSON.stringify(projects));
// }

// function printProjectData() {
//   // clear current projects on the page
//   projectDisplayEl.empty();

//   for (var i = 0; i < projects.length; i += 1) {
//     var project = projects[i];
//     var projectDate = dayjs(project.date);
//     // get date/time for start of today
//     var today = dayjs().startOf('day');

//     // Create row and columns for project
//     var rowEl = $('<tr>');
//     var nameEL = $('<td>').text(project.name);
//     var typeEl = $('<td>').text(project.type);
//     var dateEl = $('<td>').text(projectDate.format('MM/DD/YYYY'));

//     // Save the index of the project as a data-* attribute on the button. This
//   

// will be used when removing the project from the array.
//     var deleteEl = $(
//       '<td><button class="btn btn-sm btn-delete-project" data-index="' +
//         i +
//         '">X</button></td>'
//     );

//     // add class to row by comparing project date to today's date
//     if (projectDate.isBefore(today)) {
//       rowEl.addClass('project-late');
//     } else if (projectDate.isSame(today)) {
//       rowEl.addClass('project-today');
//     }

//     // append elements to DOM to display them
//     rowEl.append(nameEL, typeEl, dateEl, deleteEl);
//     projectDisplayEl.append(rowEl);
//   }
// }

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});

/* 
var officeHours = [
{
  hour:"09",
  id: "hour-9"
},
{
  hour:"10",
  id: "hour-10"
},
{
  hour:"11",
  id: "hour-11"
},
{
  hour:"12",
  id: "hour-12"
},
{
  hour:"13",
  id: "hour-13"
},
{
  hour:"14",
  id: "hour-14"
},
{
  hour:"15",
  id: "hour-15"
},
{
  hour:"16",
  id: "hour-16"
},
{
  hour:"17",
  id: "hour-17"
},
];
*/
