# Practice 1: New Food Idea
This example will have us work with user input and joining strings together.

1. Make a new variable called favFood1, and set it to the result of an 'ask for string with text' block. Inside the ask block, prompt the user with "Name a favorite food!".
2. Make another variable called favFood2 and do the same thing, but with "Name another favorite food!" as the prompt instead.
3. Make another variable called sandwichName, and have that be the result of using a join block on favFood1 and favFood2.
4. Now we're going to splash (display) a sentence that combines our variables. Say our favorite foods inputted were apples and cookies, then our sentence we display should be:
"You should try making a applescookie sandwich!".  To combine our variables with other text that we're describing, you will have to either use join twice or use splash's option to display two separate messages 


```blocks
// :solution
let sandwichName = ""
let favFood2 = ""
let favFood1 = ""
favFood1 = game.askForString("What's your favorite food?")
favFood2 = game.askForString("What's another favorite food?")
sandwichName = "" + favFood1 + favFood2
game.splash("You should try making a ", sandwichName + " sandwich!")
// :end-solution
```


# Practice 2: Phone Numbers

In this practice example we'll be dealing with user input and practicing combining and dividing strings.

1. Ask for a 10-digit US phone number from the user, and set up a variable 'wholeNumber' to store the result. Here's our prompt message if you would like to use it: "Give me a US phone number please! (Ex: 1234567899) but no dashes".
2. Calculate and store the area code portion in a variable: for the example above, the string we want is "123".  You will have to use the 'substring' block of your whole phone number here to get a specific sub-section.  The first thing to put into the substring block is the starting index/position of the sub-section you want, and the second thing to pass in is how many letters to include starting from the specified index.  That means for our example we'll want to substring starting from 0 and include 3 letters. Hint: The starting indices for the next 2 chunks start at 3 and then 6.
3. Now that we have access to the specific area code, let's print it out and proudly declare that it's the area code by using Splash. For our example, we'd want to say "The area code is 123".  We will have to use the 'join' block here to combine two strings together.
4. After that previous step, we should be able to correctly display what the area code is for a given 10 digit phone number.  But let's add some more functionality: do the same thing we did for the area code to the other parts of the phone number.  Print out what the office number is (the middle 3 digits) and the line number is (the last 4 digits).
5. Try adding some exclamation marks to the end of your sentences that you are displaying with Splash. Hint: you may find using more variables helpful for readability.

```blocks
// :solution
let lineNumberSentence = ""
let officeNumberSentence = ""
let areaCodeSentence = ""
let lineNumber = ""
let officeNumber = ""
let areaCode = ""
let wholeNumber = ""
wholeNumber = game.askForString("\"Give me a US phone number please! (Ex: 555-555-5555) but no dashes\"")
areaCode = wholeNumber.substr(0, 3)
officeNumber = wholeNumber.substr(3, 3)
lineNumber = wholeNumber.substr(6, 4)
areaCodeSentence = "The area code is " + areaCode
officeNumberSentence = "The office number is " + officeNumber
lineNumberSentence = "The line number is " + lineNumber
game.splash("" + areaCodeSentence + "!!")
game.splash("" + lineNumberSentence + "!!")
game.splash("" + officeNumberSentence + "!!")
// :end-solution
```

