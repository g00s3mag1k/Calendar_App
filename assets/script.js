//Displays current date and actual day
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

  //save button click listener
  $(".saveBtn").on("click", function () {

    //gets values of description in jquery    
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    //saves in local storage
    localStorage.setItem(time, text);
  
  })

  function timeTracker() {
    
    //grabs current number of hours
    var timeNow = moment().hour();

    //loops over time-blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      //checks time and adds classes for background/color
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } 
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      
      }
    
    })
  
  }

  //grab item from local storage if applicable
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  timeTracker();

 });