# Activity: User Input and String Logic

## Example #1: Asking a question

## Student Task #1: Option for failure!

```blocks
if (game.ask("Do you want to win?")) {
    game.splash("You win!")
} else {
    game.splash("You lose!")
}
```

## Example #2: Taking in a user name

## Student Task #2: Making a (secret?) password

### Standard Solution:

```blocks
let password = ""
let input = ""
input = game.askForString("What is your name?")
password = game.askForString("What is your password?")
game.splash("Hello " + input)
if (password == "Hunter2") {
    game.splash("login successful")
} else {
    game.splash("login failed")
}
```

### Challenge Solution:

```blocks
let password = ""
let input = ""
input = game.askForString("What is your name?")
password = game.askForString("What is your password?")
game.splash("Hello " + input)
if (password == "Hunter2" || password == "*******") {
    game.splash("login successful")
} else {
    game.splash("login failed")
}
```