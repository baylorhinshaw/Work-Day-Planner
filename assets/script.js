// Use jQuery 02 to help make elements and create classes etc.
// Use Mini-Project 28 to help make displayDay and reference to
// Use Form Elements 06 as reference to use .on .val 
// Use local storage to save schedule and display after page is refreshed
$(document).ready(function () {

  let currentDayEl = $('#currentDay');
  let twentyFourHours = moment().format('H');
  let twelveHours = moment().format('h');
  let savedSchedule = JSON.parse(localStorage.getItem("savedSchedule"));
  let $scheduleContainerDiv = $('#scheduleContainer');
  const test = false;

  function displayDay() {
    let today = moment().format('dddd, MMMM Do');
    currentDayEl.text(today);
  }

  displayDay();

  if (test) {
    twentyFourHours = 13;
    twelveHours = 1;
  }

  if (test) { console.log(savedSchedule); }

  if (savedSchedule !== null) {
    console.log(savedSchedule)
    scheduleTextArray = savedSchedule;
  } else {
    scheduleTextArray = new Array(9);
  }

  if (test) { console.log(scheduleTextArray); }


  $scheduleContainerDiv.empty();

  if (test) { console.log(twelveHours); }


  for (let hour = 9; hour <= 17; hour++) {

    let index = hour - 9;

    let $rowDiv = $('<div>');
    $rowDiv.addClass('row');
    $rowDiv.attr('hour-index', hour);

    let $hoursDiv = $('<div>');
    $hoursDiv.addClass('col-md-2');

    const $hoursSpn = $('<span>');

    $hoursSpn.attr('class', 'hours-spn');

    let displayHour = 0;
    let meridiem = "";
    if (hour > 12) {
      displayHour = hour - 12;
      meridiem = "pm";
    } else {
      displayHour = hour;
      meridiem = "am";
    }

    $hoursSpn.text(`${displayHour} ${meridiem}`);

    $rowDiv.append($hoursDiv);
    $hoursDiv.append($hoursSpn);

    let $dailyScheduleInput = $('<input>');

    $dailyScheduleInput.attr('id', `input-${index}`);
    $dailyScheduleInput.attr('hour-index', index);
    $dailyScheduleInput.attr('type', 'text');
    $dailyScheduleInput.attr('class', 'dailySchedule');

    $dailyScheduleInput.val(scheduleTextArray[index]);

    let $col9IptDiv = $('<div>');
    $col9IptDiv.addClass('col-md-9');

    $rowDiv.append($col9IptDiv);
    $col9IptDiv.append($dailyScheduleInput);
    $dailyScheduleInput.on('input', function (e) {
      scheduleTextArray[index] = e.target.value;
    });
    let $col1SaveDiv = $('<div>');
    $col1SaveDiv.addClass('col-md-1');

    let $saveBtn = document.createElement('button');
    $saveBtn.type = 'button';
    $saveBtn.innerHTML = 'save';
    $saveBtn.className = 'buttonStyling';
    $saveBtn.addEventListener("click", function (e) {
      localStorage.setItem('savedSchedule', JSON.stringify(scheduleTextArray));
      console.log(scheduleTextArray);
    })

    $rowDiv.append($col1SaveDiv);
    $col1SaveDiv.append($saveBtn);

    updateRowColor($rowDiv, hour);

    $scheduleContainerDiv.append($rowDiv);
  };

  function updateRowColor($hourRow, hour) {

    if (test) { console.log("rowColor ", twentyFourHours, hour); }

    if (hour < twentyFourHours) {
      if (test) { console.log("lessThan"); }
      $hourRow.css("background-color", "grey")
    } else if (hour > twentyFourHours) {
      if (test) { console.log("greaterthan"); }
      $hourRow.css("background-color", "green")
    } else {
      if (test) { console.log("eqaul"); }
      $hourRow.css("background-color", "red")
    }
  };
});