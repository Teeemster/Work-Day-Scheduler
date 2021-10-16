var timeBlock = $("#timeblock");
var startingTime = 1;
var dayBlock = $("#currentDay");
var currentTime = moment();
var calendarInfo = $(".calendarInfo")
var calendarInfoValue = calendarInfo.textContent
dayBlock.textContent = currentTime.format("MMM DD, YYYY - HH:mm:ss a");


//Current Time
$("#currentDay").append(dayBlock.textContent)

//Main Div Dom Creation
for (let i = 0; i < 24; i++) {
  $("#timeSection").append(` <div id="timeBlock" class="row d-flex justify-content-center">

    <section class="hour col-1" id="timeSlotArea">${i + 1}:00 PST</section>

    <section class="row col-8 past"><input type="text" class="past border-0 col-12 calendarInfo"></section>

    <section class="d-flex col-1 justify-content-center saveBtn"><button type="button" class="fa align-self-center"
          id="lockButton">&#xf023;</button></section>

          </div>
        </section>`);
};

//Local Storage
$("#lockButton").on("click", function () {
    if (localStorage.getItem('Activities') == null) {
      localStorage.setItem('Activities', '[]');
    } 
    localStorage.setItem('Activities', JSON.stringify(calendarInfoValue));
    localStorage.getItem('Activities');
}
);


