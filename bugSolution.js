```javascript
// Correct use of $inc operator with a numeric value
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: 1}});
```