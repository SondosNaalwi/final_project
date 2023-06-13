import axios from 'axios';
const axios = require('axios');
const url =  'https://amazon-product-price-data.p.rapidapi.com/product'

const options = {
  
  params: {
    asins: 'B005YQZ1KE,B074R8RQQ2',
    locale: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'f0ae9c1c54mshb915c676270423dp1615a7jsnecf134a0dfa0',
    'X-RapidAPI-Host': 'amazon-product-price-data.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}