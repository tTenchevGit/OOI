
function solve(input) {
    let propList = JSON.parse(input);
    let resut = propList.reduce((a,x)=> ({...a, ...x}),{});
    console.log(resut);
}
solve(`[{"canFly": true},{"canMove":true,

"doors": 4},{"capacity":

255},{"canFly":true, "canLand":

true}]`);