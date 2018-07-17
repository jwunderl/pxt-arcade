# Activity: Info Variables

In this section we worked with variables we created. A lot of the time, though, we want to interact with variables and values that were created elsewhere.

The ``||info:info||`` category in blocks contains a few variables (known as properties) which we are allowed to update. These properties have to do with score, life, and time. We will take a quick look at how to use these variables in our code.

### ~hint
**Teacher Note**
This section dips slightly into a topic that will be covered at length later in the course - events and event handling. This section uses three event blocks - ``||controller:on any button pressed||``, ``||info:on life zero||``, and ``||info:on countdown end||``. This is simply a small introduction to the topic - if any students get particularly caught up on the subject, it's likely best to table it for now and tell them that it will be returned to later in the course in greater detail.
### ~

In this activity students will:

* use the ``||info:score||`` and ``||info:life||`` variables
* combine numeric values with math operators (\*)
* identify the benefits of using ``||info:score||`` and ``||info:life||`` over other options
* use the ``||info:countdown||`` option to put a time limit on a game

## Concept: Using ``||info:score||`` to keep track of button presses

The first example will be a simple one - simply counting the number of buttons pressed and keeping track of them as a score. We will discuss ``||controller:on any button pressed||`` block in more detail later, but for we just need to know that whatever is inside of the block will happen each time a button (``||controller:A||``, ``||controller:up||``, and so on) is pressed.

## Example: Counting button presses

## TODO Video

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "button count")

```blocks
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
```

Noticed that the score popped up in the top right corner - that is one benefit of using the ``||info:score||`` variable to keep track of points the player has earned. Now, we will add in code to add a timer, to see some of the other benefits of the ``||info:info||`` blocks.

## Student Task 1: 10 second button smash
1. Start with the code saved as "button count" in the prior example.
2. Create an ``||loops:on start||`` block
### ~hint
Remember that you can find blocks easily by using the search bar
### ~
3. Add in a ``||info:start countdown 10 (s)||`` block into the ``||loops:on start||`` block

```blocks
// :solution
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.startCountdown(10)
// :end-solution
```

Run the code you created in task 1 a few times, and try to get different scores. Notice the benefits that using just the ``||info:countdown||`` and ``||info:change score by||`` blocks - the countdown creates a timer that counts down to 0, and then ends the game at that point. The score keeps track of the value for you, and shows it in the top right corner, and when the game is over, maintains a high score through multiple runs of the game.

## Concept: Using ``||info:life||``

Beyond score, another important value to keep track of is the players life total. This lets us make games where players can be penalized for mistakes, without simply ending the game immediately.

## Example: changing ``||info:life||`` totals
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "do not touch the buttons")

```blocks
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
info.setLife(1)
```

This simple game gives the user a simple task - to not touch a button. If they do touch a button, the life will go down to 0, and they will lose. The game is a bit boring, but it does demonstrate a few of the benefits of using ``||info:life||``:  life total shows up in the corner as a number of hearts, and when you run out of the lives, the game will end.

## Student Task 2: Touch the button 15 times
1. Start with the code saved as "do not touch the buttons" in the prior example.
2. Modify the initial value of the life to be 15, instead of just 1.
3. Add in the ``||info:change score by||`` block used in the first task, and modify it to add 2 to the score each time a button is pressed.
4. Add in a ``||info:countdown||``, and set it to run out after 2 seconds.

```blocks
// :solution
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(2)
    info.changeLifeBy(-1)
})
info.setLife(15)
info.startCountdown(2)
// :end-solution
```

There was a downside to the last game - no matter what, when the game was over, the same screen was shown, with the only difference being the score. We will attempt to make this better using two blocks: ``||info:on life zero||`` and ``||info:on countdown end||``. These blocks are used to override the default behavior of running out of lives and the count down running out - that is, they make it so that instead of the game just ending when either event occurs, whatever is inside those two blocks will occur instead.

## Student Task 3: Improve "Touch the button 15 times"
1. Add in the ``||info:on life zero||`` and ``||info:on countdown end||`` blocks into your code.
2. Inside the ``||info:on countdown end||`` block, use the ``||info:change score by||`` block to subtract 10 from the score.
3. After subtracting 10 from the score in the ``||info:on countdown end||``, use the ``||game:game over||`` block to end the game.
4. Inside the ``||info:on life zero||`` block, we want to keep the game going. To do so, copy the two blocks in the ``||loops:on start||`` block into the ``||info:on life zero||`` block, so that the timer and the lives will "start over" when lives run out.
5. To give the player some indication that the game is moving on to the next level, we should say something to them. Before resetting the lives and countdown, add in a ``||game:splash||`` block with a message to the player telling them they're moving on to the next level.
6. To make sure that the game keeping track of the countdown correctly, add in a ``||info:stop countdown||`` block before the splash message, so that the countdown will not continue in the background.
7. We can also add a benefit to moving on to the next level by increasing the score more than normal. To do so, we will use the ``||info:set score to||`` block to set the score to two times the current score - to do this, you will need to use the ``||math:x||`` block and the ``||info:score||`` block.

```blocks
// :solution
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(2)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    info.stopCountdown()
    game.splash("Next Level!")
    info.setLife(15)
    info.startCountdown(2)
    info.setScore(2 * info.score())
})
info.onCountdownEnd(function () {
    info.changeScoreBy(-10)
    game.over()
})
info.setLife(15)
info.startCountdown(2)
// :end-solution
```

## What did we learn? 
1. List one extra behavior you get for each of the three values we used in the ``||info:info||`` category (``||info:score||``, ``||info:lives||``, and ``||info:countdown||``).
2. List one potential downside of using ``||info:score||`` over just using your own variables to keep of the state of your game.
### ~hint
What would you do if you needed to keep track of the number of coins the player has earned, the number of keys, and the number of chicken legs they have to eat. Would using ``||info:score be meaningful in that scenario?
### ~

## TODO: rubric items