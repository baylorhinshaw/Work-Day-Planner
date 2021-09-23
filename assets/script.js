let currentDayEl = $('#currentDay');

function displayDay() {
    let today = moment().format('dddd, MMMM Do');
    currentDayEl.text(today);
}

displayDay();

for (let hours = 0; hours <= 9; hours++) {
    let index = hours;

    let $rowsDiv = $('<div>');
    $rowsDiv.addClass('rows');
    $rowsDiv.addClass('schedulerRow')

}