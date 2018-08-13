# Activity: User Input and String Logic

Logical expressions like ``||logic:if||`` and ``||logic:else||`` can be used with values beyond just comparing numeric values. Any value can be compared and used to change the way the programs we write behave depending on the different conditions.

One major example of this can be found in some of the earliest computer games - text-based adventure games. These rely heavily on crafting a story, and having the player interact with this story by prompting them with questions and identifying what the user gives back as a response.

In this activity, students will:
* ``||game:ask||``
* ``||game:ask for string with text||``
* Use boolean logic with Strings

## Example #1: Asking a question

1. Review the code below
2. Create the sample code and run the code
3. Identify what condition makes you win (and what that means about what ``||game:ask||`` turns into)

```blocks
if (game.ask("Do you want to win?")) {
    game.splash("You win!")
}
```

## Student Task #1: Option for failure!

1. Start with the code from example #1
2. Add an ``||logic:else||`` branch so that there is a possibility for failing

### TODO add in something in between to describe accepting user input

## Example #2: Taking in a user name

1. Review the code below
2. Create the sample code and run the code
3. Identify how the users input affects the game

```blocks
let input = game.askForString("What is your name?")
game.splash("Hello " + input)
```

## Student Task #2: Making a (secret?) password

1. Start with the code from example #2.
2. Create a new variable, and ``||game:ask for string||`` with the prompt "What is your password?" to find a word to store in that new variable
3. Create an ``||logic:if else||`` block
4. Use the ``||logic:=||`` block to compare the 'password' the user inputted with the string "Hunter2"
5. If those two are the same, ``||game:splash||`` "login successful"
6. Otherwise, ``||game:splash||`` "login failed"
7. **Challenge:** Use the ``||logic:or||`` block to also compare your stored password with "\*\*\*\*\*\*\*" and accept the password if the user's input is equal to **either**
