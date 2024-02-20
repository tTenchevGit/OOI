function splitByCapitalLetters(string) {
    // Use a regular expression to insert a space before each capital letter
    return string.replace(/([A-Z])/g, ' $1').trim();
}

// Test the function
console.log(splitByCapitalLetters('SplitThisStringByCapitalLetters')); // Output: "Split This String By Capital Letters"
console.log(splitByCapitalLetters('CamelCase')); // Output: "Camel Case"
console.log(splitByCapitalLetters('AnotherExample')); // Output: "Another Example"
