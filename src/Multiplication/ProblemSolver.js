

exports.problemSolver = function(grid) {
    let answers = [];
    let i;
    let answer;
    for (i = 0; i < grid.length; i++){
        answer = grid[i][0] * grid[i][1];
        answers.push(answer);
    }
    console.log("answers",answers)
    return answers;
}

