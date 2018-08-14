# Activity: Arrays Intro

Software developers often need to store multiple related values at once - for example, multiple sprites that are "enemies," or the names of the highest scoring players in a leaderboard. Arrays allow for the storage and use of a large number of values that share a type.

Arrays store values at different indices, so that you can keep track of where values are located within the array.

In Blocks, arrays can be found under the Advanced category of the toolbox.

![locating arrays](/static/courses/csintro1/arrays/locating-arrays)

In this activity, students will:
* Interact with arrays
* Create arrays of numbers
* ``||arrays:length||``
* ``||arrays:add||`` and ``||arrays:remove||`` values from arrays

## Concept: Creating Arrays

## Example #1: Creating an array of numbers

1. Review the code below 
2. Create the sample code and run the code
3. Save the code for the example (name it "Arrays")

```blocks
let list: number[] = []
list = [1, 2]
game.splash("" + list[1])
```

The first block in the ``||loops:on start||`` creates a new array, with two values to start with - 1 and 2. The next block prints out the value that is stored at **index 1** - the value **2**. 

This might seem odd - after all, there are two values in the array, and the first one listed is **1**, not **2**. The reason that index 1 stores the value 2 is due to the fact that arrays are indexed starting at 0 in JavaScript - that is, the first value in the array is stored at index 0.

### ~hint

One way to think about this is in terms of where the value is located within the array - the first value is located **0** positions away from the beginning, the second value is **1** position away from the beginning, and so on. As such, index 0 means "0 values away from the first."

### ~

## Student Task #1: Random values from Arrays

1. Start with the code from example #1
2. Add two more numbers to the array, by pressing the ``||arrays:+||`` button on the block
3. Instead of always splashing the value at index 1, change the ``||arrays:get value at||`` block to choose a random index between 0 and 3 using the ``||math:pick random||`` block
4. Add one more number to the array. Identify whether this value will ever show up as one of the values being ``||game:splashed||``

### ~hint

What index will the new value be located at?

### ~

## Concept: Modifying an Array

Arrays can also be added to and modified after they are created. For example, you can add more values to an array after it has been created, or remove values that you no longer need to keep track of.

## Example #2: Adding to an array

1. Review the code below 
2. Create the sample code and run the code
3. Save the code for the example (name it "Adding to an Array")

```blocks
let list: number[] = []
list = [1, 2]
list.push(5)
```

In this example, we added 5 to the end of the array, after it's already been created. This might seem simple in this case, but it allows for many other uses of arrays we create - for example, adding a new high score, or keeping track of where a sprite has already been.