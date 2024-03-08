const visualizeLoadingBar = (percentage) => {
    
    switch (true) {
        case (percentage >= 0 && percentage < 10):
            return (`${percentage}% [%.........] Still loading...`);
        case (percentage >= 10 && percentage < 20):
            return (`${percentage}% [%%........] Still loading...`);
        case (percentage >= 20 && percentage < 30):
            return (`${percentage}% [%%%.......] Still loading...`);
        case (percentage >= 30 && percentage < 40):
            return (`${percentage}% [%%%%......] Still loading...`);
        case (percentage >= 40 && percentage < 50):
            return (`${percentage}% [%%%%%.....] Still loading...`);
        case (percentage >= 50 && percentage < 60):
            return (`${percentage}% [%%%%%%....] Still loading...`);
        case (percentage >= 60 && percentage < 70):
            return (`${percentage}% [%%%%%%%...] Still loading...`);
        case (percentage >= 70 && percentage < 80):
            return (`${percentage}% [%%%%%%%%..] Still loading...`);
        case (percentage >= 80 && percentage < 90):
            return (`${percentage}% [%%%%%%%%%.] Still loading...`);
        case (percentage >= 90 && percentage < 100):
            return (`${percentage}% [%%%%%%%%%%] Still loading...`);
        case (percentage === 100):
            return (`${percentage}% Complete! [%%%%%%%%%%]`);
        default:
            return ('Invalid percentage.');
    }
};


console.log(visualizeLoadingBar(20));
console.log(visualizeLoadingBar(30));
console.log(visualizeLoadingBar(40));
console.log(visualizeLoadingBar(50));
console.log(visualizeLoadingBar(60));
console.log(visualizeLoadingBar(70));
console.log(visualizeLoadingBar(80));
console.log(visualizeLoadingBar(90));
console.log(visualizeLoadingBar(100));
console.log(visualizeLoadingBar(95));