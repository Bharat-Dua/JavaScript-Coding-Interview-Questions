//? Determine if a Number is Positive, Negative, or Zero

function checkNumberType(num) {
  if (num < 0) {
    return "Negative";
  } else if (num === 0) {
    return "Zero";
  } else {
    return "Positive";
  }
}
