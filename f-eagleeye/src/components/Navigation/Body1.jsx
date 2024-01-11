import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style1.css";

const Body1 = () => {
  const location = useLocation();
  const index = location.pathname.split("/")[2];
  let id = index - 1 ;
  class MazeSolver {
    constructor(maze) {
      this.maze = maze;
      this.visited = [];
      for (let i = 0; i < maze.length; i++) {
        this.visited.push([]);
        for (let j = 0; j < maze[i].length; j++) {
          this.visited[i].push(false);
        }
      }
    }

    solve(startRow, startCol, endRow, endCol) {
      let path = [];
      this.dfs(startRow, startCol, endRow, endCol, path);
      return path;
    }

    dfs(row, col, endRow, endCol, path) {
      if (
        row < 0 ||
        col < 0 ||
        row >= this.maze.length ||
        col >= this.maze[row].length
      ) {
        return false; // out of bounds
      }

      if (
        (!(row == endRow && col == endCol) && this.maze[row][col] === 0) || // changed 1 to 0
        this.visited[row][col]
      ) {
        return false; // road or already visited
      }

      path.push([row, col]);
      this.visited[row][col] = true;

      if (row === endRow && col === endCol) {
        return true; // reached the end
      }

      if (this.dfs(row - 1, col, endRow, endCol, path)) {
        return true; // go up
      }

      if (this.dfs(row, col + 1, endRow, endCol, path)) {
        return true; // go right
      }

      if (this.dfs(row + 1, col, endRow, endCol, path)) {
        return true; // go down
      }

      if (this.dfs(row, col - 1, endRow, endCol, path)) {
        return true; // go left
      }

      path.pop();
      return false; // no path found
    }
  }

  // Example usage:
//   let maze = [
//     [1, 1, 1, 0, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1],
//   ];

let maze = [
    [0, 0, 0, 1, 0, 0, 0], // changed 1s to 0s and 0s to 1s
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  // here implementation of path finder

  let mapping = {};

  let ids = 0;
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      mapping[ids] = [i, j];
      ids++;
    }
  }
  console.log(mapping);
  function isArrayInGroup(targetArray, group) {
    return group.some((array) => arraysMatch(array, targetArray));
  }
  function arraysMatch(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    document.querySelectorAll(".item").forEach((item, index) => {
      item.setAttribute("id", `${index}`);
    });
    const solver = new MazeSolver(maze);
    const dist = mapping[id];
    const path = solver.solve(0, 3, dist[0], dist[1]);
    console.log(path);
    document.querySelectorAll(".item").forEach((item, index) => {
      if (isArrayInGroup(mapping[id], path)) {
        document.getElementById(`${id}`).classList.add("path_color");
      }
    });
    path.forEach((item, index) => {
      document
        .getElementById(`${item[0] * 7 + item[1]}`)
        .classList.add("path_color");
    });
    let idk = 0;
    // document.querySelectorAll(".item").forEach((park) => {
    //   park.innerText = idk;
    //   idk++;
    // });
  }, []);

  return (
    <div>
      <div className="p_container {style}">
        {maze.map((row, i) =>
          row.map((cell, j) => {
            if (cell === 0) {
              // It's a parking space
              return <div className="item parking_space">{i * 7 + j + 1}</div>;
            } else  if (cell === 1)  {
              // It's a road
              return <div className="item road"></div>;
            }else{
              return <div className="item "> Entry </div>;

            }
          })
        )}
      </div>
    </div>
  );
};

export default Body1;
