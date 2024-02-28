function html(input) {
    let html = "<table> ";
    input.forEach(json => {
        let obj = JSON.parse(json);
        html += `\n       <tr> \n           <td>${obj.name}</td>\n           <td>${obj.position}</td>\n           <td>${Number(obj.salary)}</td>\n       </tr>`
    });
    html += "\n</table>"
    console.log(html);
}
html(['{"name":"Pesho","position":"Promenliva","salary":100000}',
       '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}']);