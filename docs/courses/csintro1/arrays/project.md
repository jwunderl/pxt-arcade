# Activity: Arrays Project






## Challenge

Build an key collecting MVP game using an array of boolean values to keep to keep track of which keys have been collected.

![Key Collecting Game]

### ~hint

For a game with three keys, you should
* Start with an array that contains three ``||logic:false||`` values
* Create three keys with different ``||sprites:kind||``s - for example, ``||sprites:FirstKey||``, ``||sprites:SecondKey||``, and ``||sprites:ThirdKey||``
* Create overlap events between the player and each kind of key - in one, ``arrays:set value at 0||`` of the array to be true, another ``||arrays:set value at 1 to true||``, and the last ``||arrays:set value at 2 to true||``
* To check if all keys have been collected, use ``||arrays:get value at||`` to get the three boolean values, and use ``||logic:and||`` to combine them.

### ~