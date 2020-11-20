

function RandomProblems(size){
    let problemsGrid = [];
    // the max should change based on the size of the grid we can add that later
    let i;
    for (i = 0; i < size; i++){
        let numbers = new Array(2);
        numbers[0] = Math.floor(Math.random() * Math.floor(10));
        numbers[1] = Math.floor(Math.random() * Math.floor(10));
        problemsGrid.push(numbers);
    }

    return problemsGrid;
}

export default RandomProblems;