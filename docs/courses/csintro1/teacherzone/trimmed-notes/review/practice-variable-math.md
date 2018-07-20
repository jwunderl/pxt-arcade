# Practice 1: Life Questionnaire

```blocks
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
```

# Practice 2: Random Mind Reading
```blocks
let actual = 0
let guess = 0
while (true) {
    guess = parseInt(game.askForString("Try to guess the number I'm thinking of. It's between 1 and 3."))
    actual = Math.randomRange(1, 3)
    game.splash("You were " + Math.abs(actual - guess) + " off")
}
```
