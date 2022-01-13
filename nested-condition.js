var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 40;
var packedWell = true;

// if (danishPrice < myBudget) {
//     console.log('Danish khabo')
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('butter bon khabo')
// }
// else if (toastBiscuitPrice < myBudget) {
//     console.log('tost khamu')
// }
// else {
//     console.log('batash khamu')
// }

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('danish khabo')
    }
    else {
        console.log('danish khamu na')
    }
}