# Activity: Math Operators with Variables 

We have previously used variables for the names of our sprites.  The use of variables is extensive in any program code because variables allow us to write code in a generic way that makes code more useful and easy to reuse.  Similarly, Math equations provide familiar examples in the use of variables that apply to code by assigning know values to variables to calculate unknown variable values.

In this activity student will work with: 
* combine numeric values with math operators (+, -, *, /)
* store the result of an equation in a variable 
* evaluate equations using variables
* modify and create variable equations
* display text with || game: splash|| buy using || text: join ||


## Concept: Using Math Operators with Variables  

# TODO: Create Video 


## Example: math equation in a variable
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "equation variable") 

https://makecode.com/_TeL0L56VwWiE

```block  
let answer = 0
answer = 3 + 5
game.splash("3 + 5 = " + answer)
```  

### ~hint
**Teacher Note**
## Discuss with students
The join block is used to coerce a number into a sting.  JavaScript needs to have strings for "splash" or "show long text" so we use join in this case. Then splash  knows that we are displaying the string representation of our `answer` variable.

If only displaying a number we use an empty string in the join 
```block
let answer = 0
answer = 3 + 5
game.splash("" + answer)

```
### ~

## Student Task 1: Try new values in the equation 
1. starting with the above example 
2. Experiment using different numbers in our equation (e.g.  `9 + 2`)
3. Test at least 3 different equations
4. Challenge: make longer addition equations so the code calculates the sum of 5 or more numbers. If the equation gets too long, then display using "show long text"?

### ~hint
In order to combine multiple items we will need to add additional Math blocks

![animation: adding 3 numbers with blocks](..\Static\add3Numbers.gif)

```block
// :solution
// https://makecode.com/_h6vfmy28s34T

let answer = 0
answer = 9 + 2
game.splash("9 + 2 = " + answer)
answer = 17 + 12 
game.splash("17+12 = " + answer)
answer = 17 + 12 
game.splash("21+22 = " + answer)

// :end-solution
```

### ~

### ~hint
The splash screen is designed for short sentences.  This limits the length of equation we can display. "Show long text" allows for longer text.
### ~  

```block
// :solution
// https://makecode.com/_VaeKM9dowVam

let answer = 0
answer = 13 + 9 + 1 + 0 + 18 + 5
game.splash("13+9+1+0+18+5=" + answer)
/* longer equation */
answer = 13 + 9 + 1 + 0 + 18 + 5 + 19 + 4 + 7
game.showLongText("13 + 9 + 1 + 0 + 18 + 5 + 19 + 4 + 7 = " + answer, DialogLayout.Bottom)

// :end-solution
```

## Concept: basic math operators with variables 

# TODO: short video here 
We can convert basic math into code using variables and math operators.

### Operators 
In order of operation precedence:

- Addition (**`+`**)  and  Subtraction (**`-`**)  
- Multiplication (**`*`**)  and - Division (**`/`**)  


## Example:  

1. Review the code below
2. Create the sample code and run the code
3. press any button to see then second equation on splash message

```block
let answer = 0
let firstNumber = 0
let secondNumber = 0
firstNumber = 15
secondNumber = 5
answer = firstNumber - secondNumber
game.splash("15 - 5 = " + answer)
firstNumber = 5
secondNumber = 7
answer = firstNumber * secondNumber
game.splash("5 * 7 = " + answer)
```
## Student Task 2: basic math operators with variables
1. starting with the previous example 
2. add a thirdNumber variable with a unique value
3. create an equation using both the addition operator (`+`) and the multiplication operator (`*`)
4, Swap the additional and Multiplication operator and run the program (Typically the answers will differ)

### ~hint
Look at the JavaScript.  Parenthesis `( )`are first in order of Operations. With Multiple operators **Blocks often create parenthesis**, always check the JavaScript to see if that is what you intended.
![animation: Parenthesis in math code](..\Static\parenthesisMath.gif)
### ~

```block
// :solution
// https://makecode.com/_Euh8RJRuzhsf

let answer = 0
let firstNumber = 0
let secondNumber = 0
let thirdNumber = 0
firstNumber = 15
secondNumber = 5
thirdNumber = 3
answer = firstNumber + secondNumber * thirdNumber
game.splash("15 + 5 * 3 = " + answer)
answer = firstNumber * secondNumber + thirdNumber
game.splash("15 * 5 + 3 = " + answer)

// :end-solution
```

## Student Task 3: multiple operators and variables equation  
1. starting with the previous example 
2. add a fourthNumber variable
3. create an equation using 3 different operators
4. Challenge: create an equation using all 4 basic operators (`+, -, *, /`) and at least 5 unique variables.  

### ~hint
Look at the JavaScript code.  For multiple operator equations it is often easier to code in JavaScript. Note how using parenthesis `( )` changes the equation.
### ~

```block
// :solution
// https://makecode.com/_eC9Cwk3uXiCr

let answer = 0
let firstNum = 0
let secondNum = 0
let thirdNum = 0
let fourthNum = 0
firstNum = 15
secondNum = 5
thirdNum = 9
fourthNum = 6
answer = firstNum * secondNum + thirdNum / fourthNum
game.splash("15 * 5 + 9 / 6 = " + answer)

// :end-solution

```block
// :solution
// Challenge:https://makecode.com/_WyA12wV0K74p  

let answer = 0
let fifthNum = 0
let fourthNum = 0
let thirdNum = 0
let secondNum = 0
let firstNum = 0
firstNum = 15
secondNum = 5
thirdNum = 9
fourthNum = 6
fifthNum = 10
answer = firstNum * secondNum + thirdNum / fourthNum - fifthNum
game.splash("15*5+9/6-10 = " + answer)

// :end-solution
```

## Student Task 4: Conversion  
1. create 2 variables
    - tempC (temperature Celsius) 
    - tempF (temperature Fahrenheit)
2. initialize tempC with common Celsius temperature (e.g., 22.0)
3. create an equation using  the formula: tempF = tempC × 9/5 + 32
4. Show the temp in a Splash Screen
4. Challenge: create an equation for converting to Celsius:   
    - tempC = (tempF - 32) × 5/9
    - be sure to pay attention to the parenthesis

### ~hint
It can be difficult to structure parenthesis using blocks.  Look at and edit the JavaScript code to create the formula where it looks much more like a math equation, except for **\*** is used for multiplication and **/** is used for division.  Note: evaluate parenthesis first because code follows the the same parenthesis rules as mathematics.
### ~

```block
// :solution
// https://makecode.com/_A3PHiyg9rTD6

let tempF = 0
let tempC = 0
tempC = 22
tempF = tempC * (9 / 5) + 32
game.splash("" + tempC + " C", "Fahrenheit " + tempF)
tempF = 75
// Challenge
tempC = (tempF - 32) * (5 / 9)
game.splash("" + tempF + " F", "Celsius " + tempC)

// :end-solution
```
## What did we learn? [create 2 questions] TODO

1. In MakeCode JavaScript what is the resulting value of answer for `answer = 5 + 3 * 2`? Explain.
2. How is putting operators and numbers into a calculator different than writing in code  (example: 2 + 3 + 4 * 4)?  Explain.
3. Research and describe 2 other Math Operators using the math menu in MakeCode (hover over values for more information) and/or use other JavaScript resources.


## Rubrics

### Code Tasks
| points | 5 | 7 | 9 | 10 |
|:---:|:---:|:---:|:---:|:---:|
| Variable Math | Completed 3 coding tasks |Completed All 4 Coding Tasks |"splash" screens display helpful explanation text with answers | Completed 2 or more Challenges |

### Score = \_\_\_\_\_\_ /10 

### What did we learn Questions

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | Uses multiple examples and clear explanations |  Explanations are outstanding in detail and/or use creative examples |
### Score = \_\_\_\_\_\_ /10 