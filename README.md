# An Array of Anagrams - JavaScript Edition

### Introduction

Arrays are crazy useful. Whether you're planning a party and creating a guest array, going grocery shopping and creating a grocery array, or debating with your friends about the top 10 movies of all time, you likely already do a lot of your thinking in array form.

As a programmer, arrays become powerful tools. For example, if you make a guest array on paper and you want to know how many guests you have, you'd need to go back and number all the guests - for a big party like a wedding, that could take a long time. As a programmer, you can use built in array methods to do things like that for you, and to do it in a LOT less time.

Here are a few examples of built-in function Python can complete almost instantly:
* Alphabetize an array.
* Count the items in an array.
* Access (read or write) a specific item in the array.
* Find a certain item and delete it from the array.
* Insert a new item into an array.

### The goal

We're going to start by making an array of anagrams of the word "stop". If you can rearrange those four letters to make another word, you've found an anagram! We've already got a partial array of anagrams going, but there are a few errors and a few gaps. Let's go back in and make it better.

The challenges are written out in order in a file called arrays.py. Code out your solutions after each challenge in that file, and then run the code to see if it worked.  

To test your code, run the command be sure to open the console and make sure the correct script is linked.

### The trap

A lot of times, it can be tempting to hard-code the answer to simple tasks. AVOID THAT STRATEGY.

Consider this array of numbers:

```js

let cool_numbers = [3, 5, 2, 1, 4]

```

If the instructions asked you to put these numbers in order, you might be tempted to simply go back up and simply rewrite the array:

```js

/// DO NOT CODE THIS WAY. IT IS SUPREMELY INEFFICIENT.
let cool_numbers = [1, 2, 3, 4, 5]

```

If this is the only way you know how to organize, imagine how exhausting your life becomes if you're trying to organize this dataset:

```js

let cool_numbers = [
  99, 18, 89, 8, 48, 61, 30, 66, 14, 68, 76, 38, 37, 59, 38, 12, 87, 25, 67, 53, 17, 23, 89,
  45, 43, 99, 96, 21, 35, 79, 88, 63, 91, 15, 58, 5, 73, 58, 13, 41, 77, 84, 31, 22, 57,
  24, 72, 2, 90, 77, 39, 67, 55, 0, 73, 61, 65, 70, 17, 83, 99, 79, 56, 32, 66, 12, 9,
  92, 20, 76, 52, 67, 11, 89, 53, 6, 58, 2, 10, 30, 21, 23, 62, 84, 24, 27, 48, 49, 90,
  18, 76, 78, 20, 88, 80, 21, 59, 52, 83, 12, 40, 77, 53, 78, 88, 49, 93, 39, 21, 42,
  71, 59, 53, 14, 21, 9, 68, 46, 81, 48, 53, 98, 51, 77, 65, 64, 93, 11, 73, 91, 31, 62,
  98, 73, 85, 43, 61, 82, 81, 1, 43, 73, 25, 62, 14, 71, 37, 61, 14, 35, 6, 12, 43, 73,
  4, 39, 76, 79, 13, 78, 7, 19, 61, 58, 30, 10, 84, 84, 3, 51, 33, 10, 15, 3, 44, 45,
  28, 61, 58, 10, 13, 40, 85, 49, 13, 60, 16, 62, 5, 93, 7, 87, 42, 69, 27, 22, 40,
  5, 19, 30
]

```

Instead, you want to use built-in methods to do your work for you, and then resave that data in the same variable.

```js

let cool_numbers = [3, 5, 2, 1, 4]
cool_numbers.sort() // Many JavaScript methods modify data in place, so this permanently sorts the array.

```

As you go through this lab, you'll want to refer back to the [JavaScript documentation on arrays](https://www.w3schools.com/jsref/jsref_obj_array.asp). This is where you can learn about other methods like ".sort()" that we used above.
