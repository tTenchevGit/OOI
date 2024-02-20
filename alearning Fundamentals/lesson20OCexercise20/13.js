function schoolRegister(students) {
    let gradeList = {};

    students.forEach(student => {
        let details = student.split(', ');
        let grade = details.find(detail => detail.includes('Grade:')).split(': ')[1];
        let name = details.find(detail => detail.includes('Student name:')).split(': ')[1];
        let average = parseFloat(details.find(detail => detail.includes('Average annual grade from last year:')).split(': ')[1]);

        if (!(grade in gradeList)) {
            gradeList[grade] = [];
        }
        gradeList[grade].push({ name, average });
    });
     console.log(gradeList);
    return gradeList;
}

function newSchoolYear(gradeList) {
    for (const grade in gradeList) {
        let students = gradeList[grade];
        let total = students.reduce((acc, student) => acc + student.average, 0);
        let average = total / students.length;
        console.log(`${grade} Grade List of students: ${students.map(student => student.name).join(', ')} Average annual grade from last year: ${average.toFixed(2)}`);
    }
}

let students = [
    "Student name: Mark, Grade: 9, Average annual grade from last year: 5.35",
    "Student name: Ethan, Grade: 10, Average annual grade from last year: 5.52",
    "Student name: Joey, Grade: 10, Average annual grade from last year: 5.52",
    "Student name: Steven, Grade: 11, Average annual grade from last year: 4.42",
    "Student name: Bob, Grade: 12, Average annual grade from last year: 5.02",
    "Student name: Daryl, Grade: 9, Average annual grade from last year: 5.35",
    "Student name: Bill, Grade: 10, Average annual grade from last year: 5.52",
    "Student name: Philip, Grade: 11, Average annual grade from last year: 4.42",
    "Student name: Peter, Grade: 12, Average annual grade from last year: 5.02",
    "Student name: Gavin, Grade: 11, Average annual grade from last year: 4.42"
];

let gradeList = schoolRegister(students);
newSchoolYear(gradeList);
