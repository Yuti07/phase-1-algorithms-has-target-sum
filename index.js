// function hasTargetSum(array, target)
  // Write your algorithm here
  // 1.Initialize an empty set called seen to store the seen elements.
  // 2.Iterate through each number num in the given array:
  // a.Calculate the complement as complement = target - num, where target is the target number.
  // b. Check if the complement exists in the seen set using has()method. If it does, return true as there is a pair that adds up to the target.
  // c.Add the current number num to the seen set using add()method.
  // 3.If no pair is found after iterating through the entire array, return false.

/*
  Write the Big O time complexity of your function here
*/
// The Big O time complexity of the hasTargetSum function is O(n), where n is the number of elements in the input array.
// The function iterates through each element in the array once, performing constant time operations within each iteration. The operations include calculating the complement (target - num), checking for the complement in the seen set (seen.has(complement)), and adding the current number to the seen set (seen.add(num)).
// Since the number of iterations is directly proportional to the size of the array, the time complexity of the function is linear, or O(n). As the size of the input array increases, the number of operations performed by the function scales linearly.
// In summary, the Big O time complexity of the hasTargetSum function is O(n) because it has a linear relationship with the input size.
/*
  Add your pseudocode here
*/
// describe hasTargetSum(array, target):
//     seen = empty Set

//     for num in array:
//         complement = target - num

//         it complement is in seen:
//             else true

//         add num to seen

//     else false


/*
  Add written explanation of your solution here

// function hasTargetSum(array, target) {
//   const seen = new Set(); //Stores the seen elements

//   for (const num of array) {
//     const complement = target - num; // Calculates the complement of the current number

//     if (seen.has(complement)) { // Checks if the complement of the current number exists in the set then
//   returns true; // If complement of the number exists, returns true as a pair that adds up to the target is found
//     }
//     seen.add(num); // Checks for the next loop ,Adds the current number to the set
//   }
//   return false; // No pair is found, returns false
// }
Pseudo code explanations:

// Create an empty set called seen to store the numbers that have been seen so far.
// Iterate through each num in the array:
// Calculate the complement as complement = target - num, where target is the target number.
// Check if the complement exists in the seen set using the has() method.
// If the complement exists, a pair that adds up to the target is found, so return true.
// Add the current number num to the seen set using the add() method.
// If no pair is found after iterating through the entire array, return false.
*/

// You can run `node index.js` to view these console logs
function hasTargetSum(array, target) {
  const seen = new Set(); // Store the seen elements

  for (const num of array) {
    const complement = target - num;

    if (seen.has(complement)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

if (require.main === module) {
  // add your own custom tests in here
console.log("Expecting: true");
console.log("=>", hasTargetSum([10, -2, 5, 3, 9], 7));
// There are multiple pairs that add up to 7: (10, -2) and (5, 3)

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 0));
// No pair adds up to 0

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 1, 1, 1, 1], 2));
// Multiple pairs of 1s add up to 2: (1, 1), (1, 1), (1, 1)

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
