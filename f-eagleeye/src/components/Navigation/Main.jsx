// import { useState, useEffect } from 'react';
// import './style1.css'
// function Main({ maze }) {
    
//     const mapping = {};
//     let ids = 0;
//     const [visited, setVisited] = useState([]);
//     const [path, setPath] = useState([]);
//     const arraysMatch = (a, b) => {
//         if (a.length !== b.length) {
//             return false;
//         }
//     }
//     const isArrayInGroup = (targetArray, group) => {
//         return group.some((array) => arraysMatch(array, targetArray));
//     };
//     for (let i = 0; i < 7; i++) {
//         for (let j = 0; j < 7; j++) {
//             mapping[ids] = [i, j];
//             ids++;
//         }
//     }
    
//     useEffect(() => {
//         document.querySelectorAll('.item').forEach((item, index) => {
//             if (isArrayInGroup(mapping[item.id], path)) {
//                 document.getElementById(item.id).classList.add('path_color');
//             }
//         });
//     }, [path]);


//     const solve = (startRow, startCol, endRow, endCol) => {
//         const visitedCopy = visited.slice();
//         const pathCopy = [];
//         dfs(startRow, startCol, endRow, endCol, pathCopy, visitedCopy);
//         setVisited(visitedCopy);
//         setPath(pathCopy);
//     };

//     const dfs = (row, col, endRow, endCol, path, visited) => {
//         // if (row < 0 || col < 0 || row >= maze.length || col >= maze[row].length) {
//         //     return false; // out of bounds
//         // }

//         // if ((!(row === endRow && col === endCol)) && (maze[row][col] === 1 )|| (visited[row][col])) {
//         //     return false; // wall or already visited
//         // }
    
//         if (row < 0 || col < 0 || row >= maze.length || col >= maze[row].length) {
//                 return false; // out of bounds
//         }

//         if ((!(row === endRow && col === endCol)) && (maze[row][col] === 1 || visited[row][col])) {
//             return false; // wall or already visited
//         }


//         path.push([row, col]);
//         visited[row][col] = true;

//         if (row === endRow && col === endCol) {
//             return true; // reached the end
//         }

//         if (dfs(row - 1, col, endRow, endCol, path, visited)) {
//             return true; // go up
//         }

//         if (dfs(row, col + 1, endRow, endCol, path, visited)) {
//             return true; // go right
//         }

//         if (dfs(row + 1, col, endRow, endCol, path, visited)) {
//             return true; // go down
//         }

//         if (dfs(row, col - 1, endRow, endCol, path, visited)) {
//             return true; // go left
//         }

//         path.pop();
//         return false; // no path found
//     };

    
//     return (
//         <h1>Hello</h1>
//     )
// }

// export default Main;




