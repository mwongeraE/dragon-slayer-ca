var slaying = true;
var youHit = Math.floor(Math.random() * 2); //sets youHit to arandom number that's either 0 or 1
var damageThisRound = Math.floor(Math.random() * 5 + 1); //set a random number between 1 and 5
var totalDamage = 0;

//while loop
while (slaying) {
    if (youHit === true) {
        console.log("You hit the dragon");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You win!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("The dragon defeated you");
        slaying = false;
    }
}
