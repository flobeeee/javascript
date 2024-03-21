const got = require('got');
// import got from 'got';


// const {data} = await got.post('https://httpbin.org/anything', {
// 	json: {
// 		hello: 'world'
// 	}
// }).json();



(async () => {
  try {
    const response = await got('https://api.example.com/data');
    console.log(response.body);
  } catch (error) {
    console.error(error);
  }
})();
