var timeBlock = $("#timeblock");
var startingTime = 1;
var dayBlock = $("#currentDay");
var currentTime = moment();
dayBlock.textContent = currentTime.format("MMM DD, YYYY - HH:mm:ss a");


//Current Time
$("#currentDay").append(dayBlock.textContent)

//Main Div Dom Creation
for (let i = 0; i < 24; i++) {
  $("#timeSection").append(` <div id="timeBlock" class="row d-flex justify-content-center">

    <section class="hour col-1" id="timeSlotArea">${i + 1}:00 PST</section>

    <section class="row col-8 past"><input type="text" class="past border-0 col-12" id="calendarInfo${i + 1}""></section>

    <section class="d-flex col-1 justify-content-center saveBtn"><button type="button" class="fa align-self-center lockButtons"
          id="lockButton">&#xf023;</button></section>

          </div>
        </section>`);
};

//Local Storage
//Storage Variables
var allStorage = [calendarInfo1, calendarInfo2, calendarInfo3, calendarInfo4, calendarInfo5, calendarInfo6, calendarInfo7, calendarInfo8, calendarInfo9, calendarInfo10,calendarInfo11,calendarInfo12,calendarInfo13,calendarInfo14,calendarInfo15,calendarInfo16,calendarInfo17,calendarInfo18,calendarInfo19,calendarInfo20,calendarInfo21,calendarInfo22,calendarInfo23,calendarInfo24]
var calendarInfo1 = $("#calendarInfo1")
var calendarInfo2 = $("#calendarInfo2")
var calendarInfo3 = $("#calendarInfo3")
var calendarInfo4 = $("#calendarInfo4")
var calendarInfo5 = $("#calendarInfo5")
var calendarInfo6 = $("#calendarInfo6")
var calendarInfo7 = $("#calendarInfo7")
var calendarInfo8 = $("#calendarInfo8")
var calendarInfo9 = $("#calendarInfo9")
var calendarInfo10 = $("#calendarInfo10")
var calendarInfo11 = $("#calendarInfo11")
var calendarInfo12 = $("#calendarInfo12")
var calendarInfo13 = $("#calendarInfo13")
var calendarInfo14 = $("#calendarInfo14")
var calendarInfo15 = $("#calendarInfo15")
var calendarInfo16 = $("#calendarInfo16")
var calendarInfo17 = $("#calendarInfo17")
var calendarInfo18 = $("#calendarInfo18")
var calendarInfo19 = $("#calendarInfo18")
var calendarInfo20 = $("#calendarInfo20")
var calendarInfo21 = $("#calendarInfo21")
var calendarInfo22 = $("#calendarInfo22")
var calendarInfo23 = $("#calendarInfo23")
var calendarInfo24 = $("#calendarInfo24")

//Saving Storage Upon Clicking
$(".lockButtons").on("click", function () {
localStorage.setItem('Activities', JSON.stringify(allStorage));
}
);

//Pushing Storage
var activitiesArray = JSON.parse(localStorage.getItem('Activities')) || [];
for (let i = 0; i < activitiesArray.length; i++) {
 calendarInfo1.textContent = activitiesArray
}