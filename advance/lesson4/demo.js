function jsonToHtmlTable(input) {
    let employees = input.map(jsonString => JSON.parse(jsonString));

    let html = '<table>\n';
    html += '<tr><th>Name</th><th>Position</th><th>Salary</th></tr>\n';

    employees.forEach(employee => {
        html += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>\n`;
    });

    html += '</table>';
    return html;
}


let input = [
    '{"name":"John","position":"Developer","salary":1000}',
    '{"name":"Jane","position":"Designer","salary":2000}',
    '{"name":"Jim","position":"Manager","salary":3000}'
];

console.log(jsonToHtmlTable(input));
