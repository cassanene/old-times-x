

function RandomProblems(size){
    let problemsGrid = [];
    // the max should change based on the size of the grid we can add that later
    let i;
    let RANGE;
    size == 20 ? RANGE = 11: RANGE = 21; 
    for (i = 0; i < size; i++){
        let numbers = new Array(2);
        numbers[0] = Math.floor(Math.random() * Math.floor(RANGE));
        numbers[1] = Math.floor(Math.random() * Math.floor(RANGE));
        problemsGrid.push(numbers);
    }
    return problemsGrid;
}

export default RandomProblems;