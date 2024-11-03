//? Generate Multiplication Table for a Given Number

// Function to generate the multiplication table for a given number
function generateMultiplicationTable(number) {
  // TODO: Write your code here
  if (typeof number !== "number" || Number.isNaN(number)) {
    return [];
  }
  let table = [];
  for (let i = 1; i <= 10; i++) {
    let tableMul = `${number} x ${i} = ${number * i}`;
    table.push(tableMul);
  }
  console.log(table);
  return table;
}

// Function to print the multiplication table for a given number
function printMultiplicationTable(number) {
  const table = generateMultiplicationTable(number);
  return table.join("\n");
}
