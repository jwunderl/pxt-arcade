# Practice 1: Life Questionnaire

## TODO: add in singular blocks in place of wordy descriptions throughout.

This example will get us more experience with math and programming, by getting our computers to play the part of a calculator and a little bit more.

1. Copy and paste the given code into the MakeCode editor. Then try running it!

```blocks
let ageInDays = 0
let ageSentence = ""
let age = 0
let name = ""
name = game.askForString("What's your name?")
age = parseInt(game.askForString("How old are you?"))
ageSentence = "" + name + " is "
ageInDays = age * 365
ageSentence = "" + ageSentence + ageInDays
game.splash("" + ageSentence + " days old")
```

2. The 'ask for string with text' block is needed, which will bring up a keyboard on the screen where the user can enter numbers and text. Regardless if we enter numbers or text the entry evaluates as string. You can see that we currently store it in a variable for later use. We also do one more thing here: we convert the string to an int with another block that is labeled parse to integer. This is just so our computer knows that this piece of data is meant to be a number, rather than a word or phrase. More on this later, so don't worry about all the details right now. Just know that if you want to use input from the user as a number that you can do math with, you have to use the 'parse as integer' block, and if you want to switch that number back to a string to display, you need to use the join block.

3. Calculate the number of months for someone's age and display it however you want. Splash is probably the easiest, but you could also make a sprite and use say. We will say that there are 365 days in a year and there are 12 months in a year, ignoring leap years.

4. Ask for the number of dogs the player has seen in their lifetime, and then calculate and display the number of dogs they've seen per year on average.

5. Add in two more questions of your choice that have numeric answers to your survey. Some basic ideas are to compute how many weeks old someone is, or how many cats they've seen per year. Feel free to get creative though; there are plenty of fun statistics out there to compute.

```blocks
// :solution
let dogsPerDay = 0
let ageInMonths = 0
let ageInDays = 0
let ageSentence = ""
let dogsSeen = 0
let age = 0
let name = ""
name = game.askForString("What's your name?")
age = parseInt(game.askForString("How old are you?"))
dogsSeen = parseInt(game.askForString("How many dogs have you seen in your life?"))
ageSentence = "" + name + " is "
ageInDays = age * 365
ageInMonths = age * 12
ageSentence = "" + ageSentence + ageInDays
game.splash("" + ageSentence + " days old")
game.splash("or " + ageInMonths + " months old")
dogsPerDay = dogsSeen / 365
game.splash("You've seen " + dogsPerDay + " dogs per day!")

// :end-solution
```

# Practice 2: Random Mind Reading

There are many useful functions in the  Math blocks - in this example we will use the random number generation functionality to make a guessing game.

1. Make a variable called 'actual'.  
    - Set the 'actual' variable to a random number that is generated using  ``||math:pick random||`` block .
2. Make another variable called 'guess'
    - set guess to the result of the user input
    - we need an integer so use ``||text:parse to integer||`` so we can do math with it later. 
    -  prompt the user with the context: "guess a number 1 through 3." 
3. Use splash to display the output of how close we were, by printing the result of actual - guess.  You can choose what response says exactly, but it should be a clear response to the guess. Here's an example message you could display if the actual number was 3 and the guess was 2: "You were 1 off!". If it had turned out that both the actual and the guess were the same number, then the player would have been 0 off because they had the right answer.
4. After you get the previous part working, you may notice that when you run it a couple of times you get some weird sentences that say you were some negative number off.  If you haven't already, take a second to try and think about when and why this weird result is coming up before moving on.
5. It turns out that if the actual number was lower than the guess, the result of `actual - guess` will go negative. How are we going to fix this to seem like a more natural sentence? We can use something called absolute value: basically how far a number is from 0 on a number line. (For example, -5 and 5 both have an absolute distance of 5. They're both 5 distance away from 0. Basically a number's absolute value is just the same if the original number is positive, but if it was originally negative, you can take away the negative sign.).  So here instead of just subtracting, use `abs` to find the absolute value of the result to help the sentence make more sense, and also make the game slightly harder to beat.

```blocks
// :solution
let actual = 0
let guess = 0
while (true) {
    guess = parseInt(game.askForString("Try to guess the number I'm thinking of. It's between 1 and 3."))
    actual = Math.randomRange(1, 3)
    game.splash("You were " + Math.abs(actual - guess) + " off")
}
// :end-solution
```

Challenge: 
* Try changing the range of values generated from ``||math:randomRange||``.
* Try letting the user choose the range from which the random number will be generated!