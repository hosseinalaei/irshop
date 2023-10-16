export function convertToPersianDate(gregorianDate) {
  const persianDate = new Date(gregorianDate); // You need a function for this conversion
  const today = new Date();
  const previous = new Date(today.getTime());
  previous.setDate(today.getDate() - 1);

  const hour =
    persianDate.getHours() < 10
      ? `0${persianDate.getHours()}`
      : persianDate.getHours();
  const minutes =
    persianDate.getMinutes() < 10
      ? `0${persianDate.getMinutes()}`
      : persianDate.getMinutes();

  const persian = new Intl.DateTimeFormat("fa-IR", {})
    .format(persianDate)
    .toLocaleString();

  console.log("ppppppppppppppppppppp", persian);

  if (isSameDay(persianDate, today)) {
    return `${hour}:${minutes}`;
  } else if (isSameDay(persianDate, previous)) {
    return `دیروز ${hour}:${minutes}`;
  } else {
    // const year = persianDate.getFullYear();
    // const month = persianDate.getMonth() + 1; // Months are zero-based
    // const day = persianDate.getDate();
    return `${new Intl.DateTimeFormat("fa-IR").format(
      persianDate
    )} - ${hour}:${minutes}`;
  }
}

// Example function to check if two dates are the same day
function isSameDay(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

// Example function to convert Gregorian date to Persian date
// function convertGregorianToPersian(gregorianDate) {
//   // You'll need to implement a Persian date conversion function or use a library for this purpose.
//   // One popular library is "jalali-moment" for Persian date manipulation in JavaScript.
//   // Here's a sample usage: https://github.com/fingerpich/jalali-moment
//   // You can use it to convert gregorianDate to a Persian date.
// }
