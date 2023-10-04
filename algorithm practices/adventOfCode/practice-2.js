function findMaxCalories(elvesInput) {
  const lines = elvesInput.split("\n");
  let currentSum = 0;
  let maxSum = 0;
  const topThreeSums = [];

  for (const line of lines) {
    if (line.trim() === "") {
      if (currentSum > maxSum) {
        topThreeSums.push(currentSum);
        topThreeSums.sort((a, b) => b - a);
        if (topThreeSums.length > 3) {
          topThreeSums.pop();
        }
        maxSum = topThreeSums[0];
      }
      currentSum = 0;
    } else {
      currentSum += parseInt(line);
    }
  }
  
  if (currentSum > maxSum) {
    topThreeSums.push(currentSum);
    topThreeSums.sort((a, b) => b - a);
    if (topThreeSums.length > 3) {
      topThreeSums.pop();
    }
    maxSum = topThreeSums[0];
  }

  const sumOfTopThree = topThreeSums.reduce((sum, value) => sum + value, 0);
  return sumOfTopThree;
}

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const result = findMaxCalories(input);
console.log("Sum of Top Three Maximum Calories:", result);
