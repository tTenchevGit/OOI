function solve(input) {
    let juryCount = Number(input.shift());
    let presentationName = input.shift();
    let totalAverageGrade = 0;
    let presentationCount = 0;

    while (presentationName !== "Finish") {
        let totalPresentationGrade = 0;

        for (let i = 0; i < juryCount; i++) {
            let grade = Number(input.shift());
            totalPresentationGrade += grade;
        }

        let averageGrade = totalPresentationGrade / juryCount;
        totalAverageGrade += averageGrade;
        presentationCount++;

        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);

        presentationName = input.shift();
    }

    let finalAverageGrade = totalAverageGrade / presentationCount;
    console.log(`Student's final assessment is ${finalAverageGrade.toFixed(2)}.`);
}

solve([
    '2',
    'While-Loop',
    '6.00',
    '5.50',
    'For-Loop',
    '5.84',
    '6',
    'Finish'
]);
