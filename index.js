// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const input = [
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1],
];
let count = 0;

function largestIsland(input) {
  let visited = [];
  let largest = 0;

  for (let i = 0; i < input.length; i++) {
    visited.push([]);
    for (let j = 0; j < 5; j++) {
      visited[i][j] = 0;
    }
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (input[i][j] && !visited[i][j]) {
        count++;
        visited[i][j] = 1;
        DFS(input, i, j, visited);
        if (largest < count) largest = count;
      }
      count = 0;
    }
  }

  return largest;
}

function isSafe(input, row, col, visited) {
  return (
    row >= 0 &&
    col >= 0 &&
    row < input.length &&
    col < 5 &&
    input[row][col] &&
    !visited[row][col]
  );
}

function DFS(input, row, col, visited) {
  const rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
  const colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < 8; i++) {
    if (isSafe(input, row + rowNbr[i], col + colNbr[i], visited)) {
      count++;
      visited[row + rowNbr[i]][col + colNbr[i]] = 1;
      DFS(input, row + rowNbr[i], col + colNbr[i], visited);
    }
  }
}

console.log(largestIsland(input));
