const request = require('postman-request');
const axios = require('axios');
const superagent = require('superagent');
const url= "https://dog.ceo/api/breeds/image/random";

const dog = async () => {
  try {
    const response = await axios.get(`${url}`);
    console.log(response.data.message);
  }
  catch (e) {
    console.log(e)
}

}

request({url:url, json:true},  (err, res) => {
  if (err) { return console.log(err); }
  console.log(res.body.message);
})

superagent.get(url)
.then(response =>{
console.log(response.body.message)
}).catch(err=>{
    console.log(err)
})

dog();
