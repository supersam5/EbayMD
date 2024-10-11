const axios = require('axios');
const getAccessToken = require('./getToken');
require('dotenv').config();

async function getListings(categoryString) {
    const accessToken = await getAccessToken();
    
    const url = `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=${categoryString}`;
    
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    };
    
    try {
        const response = await axios.get(url, { headers });
        const items = response.data.itemSummaries;
        return items;
    } catch (error) {
        console.error('Error fetching listings:', error.response.data);
    }
}

module.exports = getListings;
