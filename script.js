
// For finding legal knight moves
const knightOffset = [
  [-2, -1], [-2, 1], [-1, -2], [-1, 2],
  [1, -2], [1, 2], [2, -1], [2, 1]
];

function knightMoves(start, end) {
    
}

function getPotentialMoves(position) {
    // get all legal moves for the knight 
    let legalMoves = [];
    for (let i = 0; i < knightOffset.length; i++) {
        let currOffset = knightOffset[i];
        if (isLegal([position[0] + currOffset[0], position[1] + currOffset[1]])) {
            legalMoves.push([position[0] + currOffset[0], position[1] + currOffset[1]]);
        }
    }
    return legalMoves;
}

function isLegal(arr) {
    if ((arr[0] >= 0 && arr[0] <= 7) && (arr[1] >= 0 && arr[1] <= 7)) {
        return true;
    } else {
        return false;
    }
}
console.log(getPotentialMoves([0,0]));
console.log(getPotentialMoves([4,4])); // Should show all 8 moves from center
// knightMoves([2,2], [6,5])