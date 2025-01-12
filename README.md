# MongoDB $inc Operator Error
This example demonstrates an error that occurs when using the MongoDB `$inc` operator with a string value instead of a number. The `$inc` operator is used to increment a numerical value by a specified amount.  If a string is provided, MongoDB will throw an error.

## Bug
The `bug.js` file contains code that attempts to increment the `age` field of a document by a string value ('1'). This will result in an error. 

## Solution
The `bugSolution.js` file shows the corrected code where the increment value is a number (1) resulting in the proper increment of the age field.
