const axios = require('axios');
const qs = require('qs');
const EbayAuthToken = require('ebay-oauth-nodejs-client')
require('dotenv').config();

async function getAccessToken() {
    const clientId = process.env.EBAY_CLIENT_ID;
    const clientSecret = process.env.EBAY_CLIENT_SECRET;

    try{
        const ebayAuthToken = new EbayAuthToken({
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: ''
        });
        const token = await ebayAuthToken.getApplicationToken('PRODUCTION');
        console.log("Access Token: "+ JSON.stringify(token))
        return token;
    } catch (error) {
        console.error('Error getting access token:', error.response.data);
    }
}
    
    
    /*const tokenUrl = 'https://api.ebay.com/identity/v1/oauth2/token';
    //
    basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    console.log('Basic auth token: '+ basicAuth)
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${basicAuth}`
    };
    
    const data = qs.stringify({
        grant_type: 'client_credentials',
        scope: 'https://api.ebay.com/oauth/api_scope'
    });
    
    try {
        const response = await axios.post(tokenUrl, data, { headers });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error.response.data);
    }*/


module.exports = getAccessToken;
