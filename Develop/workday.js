//Document Creation
var dayBlock = $("#currentDay");
var currentTime = moment();
dayBlock.textContent = currentTime.format("MMM DD, YYYY - HH:mm:ss a");

//Current Time
$("#currentDay").append(dayBlock.textContent)

//Local Storage
var calendarInfo1 = $("#calendarInfo1").val()
var calendarInfo2 = $("#calendarInfo2").val()
var calendarInfo3 = $("#calendarInfo3").val()
var calendarInfo4 = $("#calendarInfo4").val()
var calendarInfo5 = $("#calendarInfo5").val()
var calendarInfo6 = $("#calendarInfo6").val()
var calendarInfo7 = $("#calendarInfo7").val()
var calendarInfo8 = $("#calendarInfo8").val()
var calendarInfo9 = $("#calendarInfo9").val()
var calendarInfo10 = $("#calendarInfo10").val()
var calendarInfo11 = $("#calendarInfo11").val()
var calendarInfo12 = $("#calendarInfo12").val()
var calendarInfo13 = $("#calendarInfo13").val()
var calendarInfo14 = $("#calendarInfo14").val()
var calendarInfo15 = $("#calendarInfo15").val()
var calendarInfo16 = $("#calendarInfo16").val()
var calendarInfo17 = $("#calendarInfo17").val()
var calendarInfo18 = $("#calendarInfo18").val()
var calendarInfo19 = $("#calendarInfo18").val()
var calendarInfo20 = $("#calendarInfo20").val()
var calendarInfo21 = $("#calendarInfo21").val()
var calendarInfo22 = $("#calendarInfo22").val()
var calendarInfo23 = $("#calendarInfo23").val()
var calendarInfo24 = $("#calendarInfo24").val()
var allStorage = [calendarInfo1, calendarInfo2, calendarInfo3, calendarInfo4, calendarInfo5, calendarInfo6, calendarInfo7, calendarInfo8, calendarInfo9, calendarInfo10, calendarInfo11, calendarInfo12, calendarInfo13, calendarInfo14, calendarInfo15, calendarInfo16, calendarInfo17, calendarInfo18, calendarInfo19, calendarInfo20, calendarInfo21, calendarInfo22, calendarInfo23, calendarInfo24]

//Saving Storage Upon Clicking
$(".lockButtons").on("click", function () {
  console.log(calendarInfo1)
    localStorage.setItem('Activities', JSON.stringify(allStorage));
  }
  );

//Pushing Storage
//var activitiesArray = JSON.parse(localStorage.getItem('Activities')) || [];
//for (let i = 0; i < activitiesArray.length; i++) {
// calendarInfo1.textContent = activitiesArray
//}

//console.log(calendarInfo1.textContent)

