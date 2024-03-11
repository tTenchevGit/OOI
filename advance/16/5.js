function breakfastChefRobot() {
    // Initial ingredients inventory
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    // Recipes and their required ingredients
    const recipes = {
        'Apple': {carbohydrate: 1, flavour: 2},
        'Lemonade': {carbohydrate: 10, flavour: 20},
        'Burger': {carbohydrate: 5, fat: 7, flavour: 3},
        'Eggs': {protein: 5, fat: 1, flavour: 1},
        'Turkey': {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    // Function to restock ingredients
    function restock(ingredient, quantity) {
        ingredients[ingredient] += quantity;
        return 'Success';
    }

    // Function to prepare a recipe
    function prepare(recipe, quantity) {
        const requiredIngredients = recipes[recipe];
        for (let ingredient in requiredIngredients) {
            if (ingredients[ingredient] < requiredIngredients[ingredient] * quantity) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }
        for (let ingredient in requiredIngredients) {
            ingredients[ingredient] -= requiredIngredients[ingredient] * quantity;
        }
        return 'Success';
    }

    // Function to generate report
    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }

    // Management function
    return function(instruction) {
        const [command, ...args] = instruction.split(' ');
        if (command === 'restock') {
            return restock(args[0], parseInt(args[1]));
        } else if (command === 'prepare') {
            return prepare(args[0], parseInt(args[1]));
        } else if (command === 'report') {
            return report();
        }
    };
}

// Usage example:
const manageBreakfastChef = breakfastChefRobot();

console.log(manageBreakfastChef("restock carbohydrate 100")); // Success
console.log(manageBreakfastChef("restock flavour 200"));      // Success
console.log(manageBreakfastChef("prepare Apple 2"));          // Error: not enough carbohydrate in stock
console.log(manageBreakfastChef("restock carbohydrate 200")); // Success
console.log(manageBreakfastChef("restock flavour 20"));       // Success
console.log(manageBreakfastChef("prepare Apple 2"));          // Success
console.log(manageBreakfastChef("report"));                   // protein=0 carbohydrate=196 fat=0 flavour=196
