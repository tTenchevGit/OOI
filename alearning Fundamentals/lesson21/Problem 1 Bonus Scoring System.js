function separateActions(array) {
    let studentsNumber = Number(array.shift());
    let lectures = Number(array.shift());
    let additionalBonus = Number(array.shift());
    let attendanceEachStudent = array.map(Number); 
    
    return [studentsNumber, lectures, additionalBonus, attendanceEachStudent];
}

function bonusSystemAtendance(studentsNumber, lectures, additionalBonus, attendanceEachStudent) {
    let sortedAttandance = attendanceEachStudent.slice().sort((a, b) =>  b - a);
    let totalBonus = Math.ceil(sortedAttandance[0] / lectures * ( 5 + additionalBonus));
    console.log(`"Max Bonus: ${totalBonus}."\n"The student has attended ${sortedAttandance[0]} lectures."`);
}


let [studentsNumber, lectures, additionalBonus, attendanceEachStudent] = separateActions([
    '5', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);
 

bonusSystemAtendance(studentsNumber, lectures, additionalBonus, attendanceEachStudent);


[
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
