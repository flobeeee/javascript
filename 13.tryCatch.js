// try, catch, finally

try {
  console.log('Start of try runs');

  unicycle; // 에러발생해서 다음으로 넘어가지 않고

  console.log('End of try runs -- never reached');
} catch (err) {
  console.log('Error has occured: ' + err) // 여기로 빠진다
} finally {
  console.log('This is always run')
}

console.log('...Then the execution continues')

// result

// Start of try runs
// Error has occured: ReferenceError: unicycle is not defined
// This is always run
// ...Then the execution continues

let json = '{ "age": 30}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError('Incomplete data: no name')
  }
  console.log(user.name)
} catch (e) {
  console.log( 'JSON Error: ' + e)
}

//result 

// JSON Error: SyntaxError: Incomplete data: no name 
