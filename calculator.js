const enter1 = prompt("Enter the first number");
const enter2 = prompt("Enter the secund number");

const x = parseFloat(enter1);
const y = parseFloat(enter2);

const sum = x + y;
const subtraction = x - y;
const multiplication = x * y;
const division = x / y;

alert(
  "Resultados:\n" +
    "\nSum: " +
    sum +
    "\nSubtraction: " +
    subtraction +
    "\nMultiplication: " +
    multiplication +
    "\nDivision: " +
    division
);
