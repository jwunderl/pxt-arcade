# Practice #1: Summer Countdown

1. Make a sprite that will be our player for this game and make and set a new variable called 'schoolDaysLeft' to be some number near 50. You'll probably also want to set the horizontal position of your sprite to somewhere on the left side of the screen (maybe 8 or so).
2. On any button press, subtract 1 from schoolDaysLeft (use change by).
3. Here's where we'll add an if/else to say different messages depending on how many days of school are left.
	- If there are no more school days left, have your sprite say "Done with school!!". Hint: use a logic block that can compare numbers to use schoolDaysLeft with some other value)
	- Otherwise, have your sprite say how many more days of school are left. For example if there were 48 more days of school left, an ideal message would be "48 days of school left!!". You'll have to use the 'join' block to join a variable and string message together.
4. Try running it! The countdown should work right now, but we can use if/elses to make this a little more fancy.
	- Add some more logic so that if it's the final week (1 to 7 days of school left), the sprite doesn't say any of the countdown stuff, but instead says "FINAL WEEK!! WOOHOO!!". You'll need to add another branch to your current if/else (click the + button bottom of the blue if block to add another branch) to add this behavior in.
	- Add some more logic (another branch to the if/else) so that if the remainder of schoolDaysLeft divided by 7 is = 0, the sprite should say how many weeks there are left instead. (There will be schoolDays / 7 weeks left at that point).

```block
// :solution
enum SpriteKind {
    Player,
    Enemy
}

let schoolDaysLeft = 0
let sprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    schoolDaysLeft += -1
    if (schoolDaysLeft == 0) {
        sprite.say("Done with school!!")
        pause(2000)
        game.over()
    } else if (schoolDaysLeft < 8) {
        sprite.say("FINAL WEEK!! WOOHOO!!")
    } else if (schoolDaysLeft % 7 == 0) {
        sprite.say("" + schoolDaysLeft / 7 + " weeks of school left!")
    } else {
        sprite.say("" + schoolDaysLeft + " days of school left!")
    }
})
sprite = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 1 6 6 6 6 6 6 1 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 1 6 6 6 6 6 6 6 6 6 1 6 6 6 
6 6 6 1 6 6 6 6 6 6 6 6 1 6 6 6 
6 6 6 6 1 1 6 6 6 6 6 1 6 6 6 6 
6 6 6 6 6 1 1 1 1 1 1 1 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Player)
schoolDaysLeft = 48
sprite.x = 8
// :end-solution
```

# Practice #2: Dream Fictional Job Survey

In this example, we'll explore using if/elses inside other if/elses. We'll be surveying the user by asking yes/no questions to figure out what fictional job suits them. Here's what the logic of our game will look like.

![Job Logic Flowchart](../static/fictional_job_survey.png)

Each of the questions will represent if/elses, and depending on which answer the user gives back, we'll go down one side of the if, else we'll go down the other side :).

1. Try adding in the left side branch first and ignore the upper right side.  Add an if/else block that will splash "job prediction: dragon slayer" in the first branch and "job prediction: dragon rider" in the second branch.  The condition to figure out which branch to go down will be based on the ask block (see the Game section). Use "Would you like to fight them?" as the prompt text, and the user will press A or B in repsonse. That response will evaluate to true or false and can be used like any other condition like we've used earlier. Test it out and make sure that works.

2. Next, add in a block to represent the previous question, "Would you like to see dragons?". This block should surround / contain the if/else block we made from step one.  

3. Expand the if from the previous step so that its else branch includes the logic for "Would you prefer to be the authority over those around you?". This means you will need to add another if/else for those two answers, asking that question, and put it inside the main else branch.

4. Get creative! Feel free to add some more questions and fun jobs as possibilities.

```block
// :solution
if (game.ask("Would you like to see dragons?")) {
    if (game.ask("Would you like to fight them?")) {
        game.splash("job prediction:", "dragon slayer")
    } else {
        game.splash("job prediction:", "dragon rider")
    }
} else {
    if (game.ask("Would you prefer to rule your people (A) or work with them (B).")) {
        game.splash("job prediction:", "royal ruler")
    } else {
        game.splash("job prediction:", "wise elf")
    }
}

// :end-solution
```
