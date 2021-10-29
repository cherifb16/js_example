// declaration while

// let i = 0; // Define a variable to hold the number value
// while (i < 100) { // true while i is less than 100
//   console.log(i); // Output number value
//   i = i + 2; // Substitute i plus 1 for i (increase by 1)
//   // Repeat until i reaches 100
// }


// example: infinite loop


// while (true) { // When the condition is true
//     console.log('infinite loop') // Since it is true all the time, it will be output as long as the pc works
// }


// example: break statement

let i = 0;
while (true) {
  if (i === 100) { // Processing ends when i is 100
    break;
  }
  console.log(i);
  i = i + 1;
}