const results = [{
  name: 'joe',
  place: 1,
  rank: '?'
}, {
  name: 'roger',
  place: 2,
  rank: '?'
}, {
  name: 'heather',
  place: 3,
  rank: '?'
}, {
  name: 'craig',
  place: 4,
  rank: '?'
}, {
  name: 'sally',
  place: 5,
  rank: '?'
// }, {
//   name: 'cory',
//   place: 6,
//   rank: '?'
// }, {
//   name: 'joel',
//   place: 7,
//   rank: '?'
}];
results
.forEach(person=>person.rank 
   = (+((results.length - person.place + 1) / results.length * 100).toFixed(2)) + '%');
console.log(results);