---
id: sudoku-solver
title: Sudoku Solver
sidebar_label: Sudoku Solver
---
## Description
<div class="description">
<p>Write a program to solve a Sudoku puzzle by filling the empty cells.</p>

<p>A&nbsp;sudoku solution must satisfy <strong>all of&nbsp;the following rules</strong>:</p>

<ol>
	<li>Each of the digits&nbsp;<code>1-9</code> must occur exactly&nbsp;once in each row.</li>
	<li>Each of the digits&nbsp;<code>1-9</code>&nbsp;must occur&nbsp;exactly once in each column.</li>
	<li>Each of the the digits&nbsp;<code>1-9</code> must occur exactly once in each of the 9 <code>3x3</code> sub-boxes of the grid.</li>
</ol>

<p>Empty cells are indicated by the character <code>&#39;.&#39;</code>.</p>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" style="height:250px; width:250px" /><br />
<small>A sudoku puzzle...</small></p>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png" style="height:250px; width:250px" /><br />
<small>...and its solution numbers marked in red.</small></p>

<p><strong>Note:</strong></p>

<ul>
	<li>The given board&nbsp;contain only digits <code>1-9</code> and the character <code>&#39;.&#39;</code>.</li>
	<li>You may assume that the given Sudoku puzzle will have a single unique solution.</li>
	<li>The given board size is always <code>9x9</code>.</li>
</ul>

</div>

## Solution(javascript)
```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isValid(board, row, col, c){
        for(let i = 0; i < 9; i++) {
            if(board[i][col] != '.' && board[i][col] == c) return false; //check row
            if(board[row][i] != '.' && board[row][i] == c) return false; //check column
            if(board[3 * Math.floor(row/3) + Math.floor(i/3)][ 3 * Math.floor(col/3) + i % 3] != '.' && board[3 * Math.floor(row/3) + Math.floor(i/3)][3 * Math.floor(col/3) + i % 3] == c) return false; //check 3*3 block
        }
        return true;
    }
    
    function solve(board){
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(board[i][j] == '.'){
                    for(let c = '1'; c <= '9'; c++){//trial. Try 1 through 9
                        if(isValid(board, i, j, c)){
                            board[i][j] = '' + c; //Put c for this cell
                            
                            if(solve(board))
                                return true; //If it's the solution return true
                            else
                                board[i][j] = '.'; //Otherwise go back
                        }
                    }
                    
                    return false;
                }
            }
        }
        return true;
    }
    
    solve(board);
};
```