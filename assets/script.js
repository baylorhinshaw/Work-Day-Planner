let currentDayEl = $('#currentDay');

function displayDay() {
    let today = moment().format('dddd, MMMM Do');
    currentDayEl.text(today);
}

displayDay();