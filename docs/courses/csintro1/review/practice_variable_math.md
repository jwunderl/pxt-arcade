# Practice 1: Life Questionnaire

This example will get us more experience with math and programming, by getting our computers to play the part of a calculator and a little bit more.

1. Copy and paste the given code into the MakeCode editor. Then try running it!

```block
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

2. The first block that is new for us is the 'ask for string with text' block. This will do a couple of things for us : it'll bring up a keyboard on the screen where the user can type an answer, and then the ask block evaluates to a string. You can see that we currently store it in a variable for later use. We also do one more thing here: we convert the string to an int with another block that is labeled parse to integer. This is just so our computer knows that this piece of data is meant to do math operations on it. There'll be more on this later, so don't worry about all the details right now. Just know that if you want to use input from the user as a number to do math with, you have to use the 'parse as integer' block.
3. Try to calculate the number of months for someone's age and display it however you want. Splash is probably the easiest, but you could also make a sprite and use says. (Note: it's to just change the existing code, but if you want to get practice with user input and some of the oddities earlier rather than later, try to add it as an additional question.). Hint: There are 365 days in a year and there are 12 months in a year.
4. Try to ask for the number of dogs the player has seen in their lifetime, and then calculate and display the number of dogs they've seen per year. Hint: total number of dogs / total number of years will = the number of dogs per year.
5. Add in whatever other questions with number answers that you want in your survey! Some basic ideas are to compute how many weeks old someone is, or how many cats they've seen per year. Feel free to get creative though; there are plenty of fun statistics out there to compute.

```block
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

There are a lot of useful things you can do with the other Math blocks - in this example we'll use random number generating to make something.

1. Make a variable called 'actual'.  Set this variable to the actual random number that was thought of behind the scenes. It's range should go from 1 to 3.
2. Make another variable called 'guess'. Then set it to the result of some user input, parsed as an int (so we can do math with it later). You'll want to prompt the user with the context: "Try to guess the number I'm thinking of. It's between 1 and 3."
3. Use splash to display the output of how close we were, by printing the result of actual - guess.  We can use join in a couple of ways here, but basically we want to display to the user if they got the number right or not. Here's an example message you could display if the actual number was 3 and the guess was 2: "You were 1 off!". If it had turned out that both the actual and the guess were the same number, then the player would have been 0 off because they had the right answer.
4. After you get the previous part working, you may notice that when you run it a couple of times you get some weird sentences that say you were some negative number off.  If you haven't already, take a second to try and think about when and why this weird result is coming up.
5. (It turns out that if the actual number was lower than the guess, the result of actual - guess will go negative. How are we going to fix this to seem like a more natural sentence? We can use something called absolute value: basically how far a number is from 0 on a number line. (For example, -5 and 5 both have an absolute distance of 5. They're both 5 distance away from 0. Basically a number's absolute value is just the same if the original number is positive, but if it was originally negative, you can take away the negative sign.).  So here instead of just subtracting, **use absolute value on the subtraction** to help the sentence make more sense.

```block
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

Extra / optional ideas : 
* Try changing the range of values generated from || math: randomRange ||.
* Try letting the user choose the range from which the random number will be generated!

