```javascript
// Incorrect use of $inc operator with a string value
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: '1'}});
```