//Document Creation
var dayBlock = $("#currentDay");
var currentTime = moment();
dayBlock.textContent = currentTime.format("MMM DD, YYYY - HH:mm a");

//Current Time
$("#currentDay").append(dayBlock.textContent)

//Saving Storage Upon Clicking
$(".lockButtons").on("click", function () {
  var calendarInfo9 = $("#calendarInfo9").val()
  var calendarInfo10 = $("#calendarInfo10").val()
  var calendarInfo11 = $("#calendarInfo11").val()
  var calendarInfo12 = $("#calendarInfo12").val()
  var calendarInfo13 = $("#calendarInfo13").val()
  var calendarInfo14 = $("#calendarInfo14").val()
  var calendarInfo15 = $("#calendarInfo15").val()
  var calendarInfo16 = $("#calendarInfo16").val()
  var calendarInfo17 = $("#calendarInfo17").val()

  var allStorage = [calendarInfo9, calendarInfo10, calendarInfo11, calendarInfo12, calendarInfo13, calendarInfo14, calendarInfo15, calendarInfo16, calendarInfo17]
  localStorage.setItem('Activities', JSON.stringify(allStorage));
}
);

//Pull Storage
var activitiesArray = JSON.parse(localStorage.getItem('Activities')) || [];
for (let i = 0; i < activitiesArray.length; i++) {
  var textInfo = $(`#calendarInfo${i + 9}`).val(activitiesArray[i]);
  
  var divTimeSlot = $(`#timeSlotArea${i + 9}`).text().slice(0,-6)
  var momentCurrentTime = currentTime.format("HH")

console.log(divTimeSlot)

  //Add Colors Based On Time
  if (divTimeSlot > momentCurrentTime) {
    $(`#calendarInfo${i + 9}`).addClass("future")
  }

 else if (divTimeSlot < momentCurrentTime) {
    $(`#calendarInfo${i + 9}`).addClass("past")
  }

  else {
    $(`#calendarInfo${i + 9}`).addClass("")
  }
}


