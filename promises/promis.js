let p = new Promise((resolve, reject) => {
    let a = 2 + 2;
    if (a === 2) {
        resolve('sweet');
    } else {
        reject('failed');
    }
});

p.then((message) => {
    console.log('this is the then ' + message);
}).catch((message) => {
    console.log('this is the catch ' + message);
});