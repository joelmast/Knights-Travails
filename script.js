let visitedPositions = [];
// For finding legal knight moves
const knightOffset = [
  [-2, -1], [-2, 1], [-1, -2], [-1, 2],
  [1, -2], [1, 2], [2, -1], [2, 1]
];

function knightMoves(start, end) {
    let queue = [];
    visitedPositions = []; // Reset for each call

    let visitedCoords = new Set(); 

    // Start node object
    let startNode = {
        x: start[0],
        y: start[1],
        distance: 0,
        predecessor: null // Initial node has no predecessor
    };

    queue.push(startNode);
    visitedCoords.add(`${startNode.x},${startNode.y}`); // Mark start node as visited

    while (queue.length > 0) {
        let current = queue.shift();

        if (current.x === end[0] && current.y === end[1]) {
            return getPath(current);
        }
        
        let potentialMoves = getPotentialMoves(current, end);

        for (let i = 0; i < potentialMoves.length; i++) {
            let next = potentialMoves[i];
            const coordKey = `${next.x},${next.y}`;

        if (!visitedCoords.has(coordKey)) {
            visitedCoords.add(coordKey);
            queue.push({
                x: next.x,
                y: next.y,
                distance: next.distance,
                predecessor: current
            });
        }
        }
    }
    return null; // No path found
}

// hasNotBeenVisited is no longer needed with visitedCoords Set

// return in correct form (object)
function getPotentialMoves(position) {
    let legalMoves = [];
    for (let i = 0; i < knightOffset.length; i++) {
        let currOffset = knightOffset[i];
        let newX = position.x + currOffset[0];
        let newY = position.y + currOffset[1];
        
        if (isLegal({x: newX, y: newY})) {
            legalMoves.push({
                x: newX, 
                y: newY,
                distance: position.distance + 1
            });
        }
    }
    return legalMoves;
}

function isLegal(obj) {
    // A quick way to make sure it's within the 8x8 board (0 to 7)
    return (obj.x >= 0 && obj.x <= 7) && (obj.y >= 0 && obj.y <= 7);
}

function getPath(obj) {
    let path = [];
    let current = obj;
  
    while (current !== null) {
        path.push([current.x, current.y]);
        current = current.predecessor;
    }
    return path.reverse();
}

console.log(knightMoves([0,0],[7,7]));