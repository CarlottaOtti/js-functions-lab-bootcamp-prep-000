// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

happyHolidays();

function happyHolidayTo(name) {
  return "Happy Holidays, ${"name"}!"
}

happyHolidayTo("Otti");

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}!"
}

happyHolidayTo("Easter", "Otti");


function holidayCountdown(days, holidays) {
  return "It's ${days} days until ${holiday}!"
}

holidayCountdown(20, "Mother's Day");
