let visitedPositions = [];
// For finding legal knight moves
const knightOffset = [
  [-2, -1], [-2, 1], [-1, -2], [-1, 2],
  [1, -2], [1, 2], [2, -1], [2, 1]
];

function knightMoves(start, end) {
    let queue = [];

    queue.push({
        x: start[0],
        y: start[1],
        distance: 0,
        predecessor: { x: null, y: null }
    })
    while (queue.length > 0) {
        let current = queue.shift();
        if (current.x === end[0] && current.y === end[1]) {
            return getPath(current);
        }
        visitedPositions.push(current);
        let currentMoves = getPotentialMoves(current);
        if (currentMoves > 0) {
            for (let i = 0; i < currentMoves.length; i++) {
                let currMove = currentMoves[i];
                queue.push(
                    {
                        x: currMove.x,
                        y: currMove.y,
                        distance: currMove + 1,
                        predecessor: { x: currMove.predecessor.x, y: currMove.predecessor.y }
                    }                       
                );
            }
        }
        
    }
}

function hasNotBeenVisited(obj) {
    let isOnList = visitedPositions.some(visitedSquare => {
        return visitedSquare.x === obj.x && visitedSquare.y === obj.y;
    })
    return !isOnList;
}


// return in correct form (object)
function getPotentialMoves(position) {
    // get all legal moves for the knight 
    let legalMoves = [];
    for (let i = 0; i < knightOffset.length; i++) {
        let currOffset = knightOffset[i];
        let newX = position.x + currOffset[0];
        let newY = position.y + currOffset[1];
        if (isLegal({
                x: newX, 
                y: newY,
                distance: position.distance + 1,
                predecessor: { x: position.x, y: position.y }
            })) {
            legalMoves.push({
                x: newX, 
                y: newY,
                distance: position.distance + 1,
                predecessor: { x: position.x, y: position.y }
            });
        }
    }
    return legalMoves;
}

function isLegal(obj) {
    if ((obj.x >= 0 && obj.x <= 7) && (obj.y >= 0 && obj.y <= 7)) {
        return true;
    } else {
        return false;
    }
}

function getPath(obj) {
    let path = []
    while (obj.predecessor.x !== null) {
        path.push([obj.predecessor.x, obj.predecessor.y])
    }
    return path;
}

