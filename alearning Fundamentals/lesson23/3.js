function solve(input) {
    let obj = {};

    for (const x of input) {
        let [name, ...grades] = x.split(' ');
        
        if (obj[name]) {
            obj[name].push(...grades.map(Number));
        } else {
            obj[name] = grades.map(Number);
        }
    }

    let sortedGrades = Object.entries(obj).sort((a, b)=> {
        let averageGrA = averageGradesS(a[1]);
        let averageGrB = averageGradesS(b[1]);
        return averageGrA - averageGrB;
    });
   

    for (const i of sortedGrades) {
        console.log(`${i[0]}: ${i[1]}`)
    }


    function averageGradesS(grades){
        let gradesSum = 0;
        let count = 0 ;
        for (const grade of grades) {
            count++;
            gradesSum += grade;
        }
        return gradesSum / count;
    }
}

solve(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
