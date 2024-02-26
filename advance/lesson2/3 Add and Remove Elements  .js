function addRemove(array) {
    let count = 1;
    const result = [];
    array.forEach(x => {
        if (x === "add") {
            result.push(count);
        } else {
            result.pop();
        }
        count++
    });
    result.length === 0 ? console.log('Empty') : console.log(result.join('\n'));
}
addRemove(['add', 'add', 'remove', 'add', 'add'])