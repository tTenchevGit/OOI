const solve = (input) => {
    const a = Number(input.shift());
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let found = false; // A flag to track if a match is found

    for (let i = 0; i < arr.length; i++) {
        if (a === arr[i]) {
            console.log(arr[i])
            found = true; // Set the flag to true when a match is found
            break; // Stop the loop when a match is found
        }
    }

    if (!found) {
        console.log("Not found"); // Print "Not found" if no match is found
    }
}

solve(['8']);