//variable to check if we are still slaying
var slaying = true;
//variable to check if we hit the dragon
var youHit = Math.floor(Math.random()*2);
//variable to keep track of how much damange we've dealt the dragon this round
var damageThisRound = Math.floor(Math.random()*5+1);
//variable to keep track of total damage
var totalDamage = 0;

//while slaying is true, keep attacking
while(slaying)
{
    if (youHit === 1)
    {
        console.log("You hit the dragon");
      totalDamage += damageThisRound;
        if (totalDamage >= 4)
        {
            console.log("You killed the dragon");
            slaying=false;
        }
    } else
    {
        console.log("Sorry, you are defeated");
        

slaying=false;
    }
}
