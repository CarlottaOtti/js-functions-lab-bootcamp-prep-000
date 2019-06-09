// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

happyHolidays();

function happyHolidayTo(name) {
  return "Happy Holidays, ${name}!"
}

happyHolidayTo("you");

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}!"
}

happyHolidayTo("Independence Day", "you");


function holidayCountdown(days, holidays) {
  return "It's ${days} days until ${holiday}!"
}

holidayCountdown(20, "Mother's Day");
