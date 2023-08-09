// Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

function compare_dates(date1, date2) {
    
  if (date1 < date2) {
    return `${date1} is less than ${date2}`;
  } else if (date1 > date2) {
    return `${date1} is greater than ${date2}`;
  } else {
    return `${date1} is equal to ${date2}`;
  }
}

console.log(
  compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00"))
);
console.log(
  compare_dates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"))
);
console.log(
  compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01"))
);
