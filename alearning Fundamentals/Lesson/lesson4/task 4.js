const solve = (input) => {
    const numTabs = Number(input.shift()); // Number of tabs
    const salary = Number(input.shift()); // ammount before penalty
    let faceBookP = 0;     // variable for the forbine sites 
    let instagramP = 0;   // variable for the forbine sites 
    let redditP = 0;     // variable for the forbine sites 
    for (let p = 1; p <= numTabs; p++) {    // Loop to check all tabs for Forbine websites, p is for penalties 
        const nameTabs = input.shift();

        switch (nameTabs) {
            case 'facebook':
                faceBookP += 150;
                break;
            case 'instagram':
                instagramP += 100;
                break;
            case 'reddit':
                redditP += 50;
                break;
        }



        //  if(nameTabs === 'facebook'){
        //      faceBookP += 150
        //  }
        //  if(nameTabs === 'instagram'){
        //      instagramP += 100
        // }
        //if(nameTabs === 'reddit'){
        //    redditP += 50
        //  }
    }
    const resultP = faceBookP + instagramP + redditP;
    if (resultP >= salary) {
        console.log(`'No Money, for you slacker!!!'`);
    } else {
        let result = salary - resultP;
        console.log(result);
    }
}
solve(['4', '750', 'facebook', 'instagram', 'facebook', 'facebook',])