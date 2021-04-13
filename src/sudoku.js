export default function 
Sudoku(grid){
  this.grid=grid;
}
Sudoku.prototype.checkRows= function (){
  for(let i=1; i<10; i++){
    if(!this.grid[0].includes(i)){
      return false;
    }
  }
  return true;
}