

function RandomProblems(size){
    let problemsGrid = [];
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