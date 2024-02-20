const solve = (input) => {
    let current = Number(input.shift());
    let stepsResult = 0;
    let isgoing = false;
    while (stepsResult <= 10000 ) {
     stepsResult += Number(current);
      current = input.shift();
      if(current === undefined || current === "Going HOME"){
        isgoing = true;
        break;
      }
    }

    if (isgoing) {
        let stepsHome = Number(input.shift());
        stepsResult += stepsHome;
    }
    if(stepsResult >= 10000) {
        console.log("Goal reached! Good job!");
    } else {
        console.log(`${10000 - stepsResult} more steps to reach goal`);
    }
}
solve(['1000', '1500', '2000',"Going HOME", '80000', ""])