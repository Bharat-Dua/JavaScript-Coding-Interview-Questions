//? Find the Largest of Three Numbers

function findLargestNumber(num1, num2, num3) {
  // Your code goes here
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}
