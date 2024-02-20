const solve = (input) => {
    let unHappyGrades = Number(input.shift());
    let command = input.shift();
    let cheks = 0;
    let unHappyGradesR = 0
    let lastProblem = 'none'
    let sum = 0;
    while (command !== 'Enough') {
        let tasksGrades = Number(input.shift());
        lastProblem = command;
        cheks++;
        sum += tasksGrades;
        if (tasksGrades <= 4) {
            unHappyGradesR++;
            if (unHappyGradesR >= unHappyGrades) {
                console.log(`You need a break, ${unHappyGrades} poor grades.`)
                break;
            }
        }
        command = input.shift();
    }
    if (command === 'Enough') {
        let average = sum / (cheks)
        console.log(`AVERAGE: ${average}`);
        console.log(`num : ${cheks}`);
        console.log(`last  : ${lastProblem}`);
    }
}
solve(['2', 'Stronger', '3', 'Life Style', '6', 'Troy', '4'])