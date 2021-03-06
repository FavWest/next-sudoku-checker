import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {
  let correctSudoku;
  let badSudoku;

  beforeEach(() => {
    correctSudoku = new Sudoku(
      [[8, 2, 7, 1, 5, 4, 3, 9, 6],
      [9, 6, 5, 3, 2, 7, 1, 4, 8],
      [3, 4, 1, 6, 8, 9, 7, 5, 2],
      [5, 9, 3, 4, 6, 8, 2, 7, 1],
      [4, 7, 2, 5, 1, 3, 6, 8, 9],
      [6, 1, 8, 9, 7, 2, 4, 3, 5],
      [7, 8, 6, 2, 3, 5, 9, 1, 4],
      [1, 5, 4, 7, 9, 6, 8, 2, 3],
      [2, 3, 9, 8, 4, 1, 5, 6, 7]]);
    badSudoku = new Sudoku(
      [[8, 2, 7, 1, 5, 4, 3, 9, 6],
      [9, 6, 2, 3, 2, 7, 1, 4, 8],
      [3, 4, 1, 6, 8, 9, 7, 5, 2],
      [5, 9, 3, 4, 6, 8, 2, 7, 1],
      [4, 7, 2, 5, 1, 3, 6, 8, 9],
      [6, 1, 8, 9, 7, 2, 4, 3, 5],
      [7, 8, 6, 2, 3, 5, 9, 1, 4],
      [1, 5, 4, 7, 9, 6, 8, 2, 3],
      [2, 3, 9, 8, 4, 1, 5, 6, 7]]);
  });

  test ('should correctly create a Sudoku object', () => {
    expect(correctSudoku.grid).toEqual([[8, 2, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5, 3, 2, 7, 1, 4, 8],
    [3, 4, 1, 6, 8, 9, 7, 5, 2],
    [5, 9, 3, 4, 6, 8, 2, 7, 1],
    [4, 7, 2, 5, 1, 3, 6, 8, 9],
    [6, 1, 8, 9, 7, 2, 4, 3, 5],
    [7, 8, 6, 2, 3, 5, 9, 1, 4],
    [1, 5, 4, 7, 9, 6, 8, 2, 3],
    [2, 3, 9, 8, 4, 1, 5, 6, 7]]);
  });

  test ('should return true if each row contains numbers 1-9 without repeats', () => {
expect(correctSudoku.checkRows()).toEqual(true);
  });

  test ('should return false if any row is missing a number between 1-9', () => {
    expect(badSudoku.checkRows()).toEqual(false);
  });
  test ('should return true if all the columns contain numbers 1-9', () => {
    expect(correctSudoku.checkColumn()).toEqual(true);
  });
});