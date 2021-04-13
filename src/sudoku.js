export default function 
Sudoku(grid){
  this.grid=grid;
}
Sudoku.prototype.checkRows= function (){
  for(let row=0; row<9; row++){
    for(let i=1; i<10; i++){
      if(!this.grid[row].includes(i)){
        return false;
      }
    }
  }
  return true;
}