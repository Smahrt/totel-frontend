import axios from 'axios';

/**
 * Authorizes the user with the API and returns the access token.
 * @returns {Promise<string|undefined>} - access token
 */
export const getAmadeusAccessToken = async () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', process.env.AMADEUS_CLIENT_ID);
  params.append('client_secret', process.env.AMADEUS_CLIENT_SECRET);

  const {
    data
  } = await axios.post(`https://test.api.amadeus.com/v1/security/oauth2/token`, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).catch(error => {
    console.log('getAmadeusAccessToken:error:', error.data);
    return {
      data: {}
    };
  });
  return data.access_token;
}