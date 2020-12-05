
exports.compareGrids = function(playerGrid, answerGrid, problems) {
    let problemsCorrect = {};
    let correctness = 0;
    let i;
    for (i = 0; i < answerGrid.length; i++){
        if (playerGrid[i] == null){
            problemsCorrect[problems[i]] = false;
            continue;
        }
        else if (Number(playerGrid[i]) == answerGrid[i]){
            problemsCorrect[problems[i]] = true;
            correctness++;
        }
        else{
            problemsCorrect[problems[i]] = false;
        }
    }
    return correctness;
}