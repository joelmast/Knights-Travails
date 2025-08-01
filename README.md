# Knight's Travails

A JavaScript implementation that finds the shortest path for a knight to move from one square to another on a standard 8x8 chessboard using BFS (Breadth-First Search).

## Problem Description

Given a knight's starting and ending positions on a chessboard, find the shortest possible path between them. A knight moves in an L-shape: two squares in one direction and one square perpendicular, or one square in one direction and two squares perpendicular.

## Usage

```javascript
knightMoves([0,0], [1,2]) 
// Returns: [[0,0], [1,2]]

knightMoves([0,0], [3,3])
// Returns: [[0,0], [2,1], [3,3]] or [[0,0], [1,2], [3,3]]

knightMoves([3,3], [4,3])
// Output: You made it in 3 moves! Here's your path:
//   [3,3]
//   [4,5] 
//   [2,4]
//   [4,3]
```

## Implementation

- Uses BFS to guarantee the shortest path
- Represents the chessboard as an implicit graph where each square is a node
- Tracks visited positions to avoid cycles
- Validates moves to stay within board boundaries (0-7 for both x and y coordinates)

## Key Features

- Finds optimal (shortest) path between any two squares
- Handles multiple valid solutions by returning any correct shortest path
- Prevents infinite loops through visited position tracking
- Validates all knight moves according to chess rules
