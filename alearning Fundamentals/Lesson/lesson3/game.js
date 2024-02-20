function adventureGame(choice1, choice2) {
    switch (choice1) {
        case 'enter castle':
            switch (choice2) {
                case 'fight dragon':
                    return 'You bravely fought the dragon and found the treasure!';
                case 'explore dungeon':
                    return 'You found a secret passage and escaped the castle!';
                default:
                    return 'You wandered the castle and found nothing.';
            }
            break;

        case 'cross bridge':
            switch (choice2) {
                case 'talk to troll':
                    return 'The troll gave you a golden key for being friendly!';
                case 'ignore troll':
                    return 'The bridge collapsed, but you swam to safety.';
                default:
                    return 'You enjoyed the view from the bridge and returned home.';
            }
            break;

        case 'climb mountain':
            switch (choice2) {
                case 'enter cave':
                    return 'You discovered an ancient artifact in the cave!';
                case 'scale peak':
                    return 'You reached the peak and enjoyed a breathtaking view!';
                default:
                    return 'You had a peaceful hike up the mountain.';
            }
            break;

        default:
            return 'You decided to stay home and read a book. A wise choice!';
    }
}

// Example of how the function can be called
console.log(adventureGame('cross bridge', 'ignore trolls')); // Expected Output: "You bravely fought the dragon and found the treasure!"
