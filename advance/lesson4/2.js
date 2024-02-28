function html(input) {
    let html = "<table> ";
    input.forEach(json => {
        let obj = JSON.parse(json);
        html += `\n\t<tr>\n\t\t<td>${obj.name}</td>\n\t\t<td>${obj.position}</td>\n\t\t<td>${Number(obj.salary)}</td>\n\t</tr>`
    });
    html += "\n</table>"
    console.log(html);
}
html(['{"name":"Pesho","position":"Promenliva","salary":100000}',
       '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}']);