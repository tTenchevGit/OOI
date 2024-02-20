function word(input) {
    let obj = {}
    input.forEach(x => {
        let count = 0;
        input.forEach(y => {
            if (x === y) {
                count++;
            }
        });
        obj[x] = count;
    });

    const sortedObject = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (const i of sortedObject) {
        console.log(`${i[0]} -> ${i[1]} times`);
    }

}
word(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",

    "finally", "the", "third", "sentence"]);