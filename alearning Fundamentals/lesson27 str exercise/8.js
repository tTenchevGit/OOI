function hard(input) {
    // This function takes an array input containing a letter with holes and an array of words to fill the holes.
    function fillWords(letter, words) {
        // Split the letter into an array of words, preserving word boundaries
        let letterArray = letter.split(/\b/);

        // Iterate through each word in the letter array
        for (let i = 0; i < letterArray.length; i++) {
            let word = letterArray[i];
            // Check if the word contains underscores
            if (word.includes("_") && /^[^a-zA-Z0-9]*_{2}[^a-zA-Z0-9]*$/.test(word)) {
                // Count the number of underscores to determine the length of the hole
                let holeLength = word.match(/_/g).length;
                // Find a replacement word from the array of words with the same length as the hole
                let replacementWord = words.find(w => w.length === holeLength);
                // Replace the underscored word in the letter with the replacement word
                letterArray[i] = replacementWord;
             }
        }

        // Join the modified letter array back into a single string
        let filledLetter = letterArray.join("");
        
        // Return the filled letter
        return filledLetter;
    }

    // Extract the letter and words array from the input
    let letter = input[0];
    let words = input[1];

    // Call the fillWords function with the letter and words array
    return fillWords(letter, words);
}

// Example usage
console.log(hard([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter __a vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]));
