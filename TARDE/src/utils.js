// Utility for grid logic
export function getRandomEmpty(rows, cols) {
  return {
    row: Math.floor(Math.random() * rows),
    col: Math.floor(Math.random() * cols)
  };
}
