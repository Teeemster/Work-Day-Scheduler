var timeBlock = $("#timeblock");
var startingTime = 1


//Main Div Dom Creation
for (let i = 0; i < 24; i++) {
    $("#timeSection").append(` <div id="timeBlock" class="row d-flex justify-content-center">

    <section class="hour col-1" id="timeSlotArea"></section>

    <section class="row col-8 past"><input type="text" class="past border-0 col-12"></section>

    <section class="d-flex saveBtn col-1 justify-content-center"><i style="font-size:24px" class="fa align-self-center"
          id="lockButton">&#xf023;</i></section>

          </div>
        </section>`)
};

//Cascading Time
//for (let i = 0; i < 24; i++) {
 //   var timeSlots = startingTime++;
  //  $("#timeSlotArea").append(startingTime)
//}

//Local Storage
