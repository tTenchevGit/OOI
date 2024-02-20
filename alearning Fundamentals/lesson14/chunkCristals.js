function processCrystal(targetThickness, chunk) {
    let currentThickness = chunk;
    let operationsCount = {
        'Cut': 0,
        'Lap': 0,
        'Grind': 0,
        'Etch': 0,
        'X-ray': 0,
        'Transporting and Washing': 0
    };

    while (currentThickness > targetThickness) {
        if (currentThickness / 4 >= targetThickness) {
            currentThickness /= 4;
            operationsCount['Cut']++;
        } else if (currentThickness * 0.8 >= targetThickness) {
            currentThickness *= 0.8;
            operationsCount['Lap']++;
        } else if (currentThickness - 20 >= targetThickness) {
            currentThickness -= 20;
            operationsCount['Grind']++;
        } else if (currentThickness - 2 >= targetThickness) {
            currentThickness -= 2;
            operationsCount['Etch']++;
        } else if (currentThickness > targetThickness) {
            currentThickness += 1;
            operationsCount['X-ray']++;
        }

        operationsCount['Transporting and Washing']++;
    }

    console.log(`Processing chunk ${chunk} microns`);
    for (let operation in operationsCount) {
        if (operationsCount[operation] > 0) {
            console.log(`${operation} x${operationsCount[operation]}`);
        }
    }
    console.log(`Finished crystal ${targetThickness} microns\n`);
}

function processAllChunks(targetThickness, chunks) {
    for (let chunk of chunks) {
        processCrystal(targetThickness, chunk);
    }
}

const targetThickness = 1375;
const crystalChunks = [50000, 1375];

processAllChunks(targetThickness, crystalChunks);
