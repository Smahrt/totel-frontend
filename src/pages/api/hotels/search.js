import nextconnect from 'next-connect';
import axios from 'axios';
import {
  getAmadeusAccessToken
} from '../../../components/apiGetAccessToken';

const handler = nextconnect();

handler.get(async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    type
  } = req.query;

  let query = '';
  if (type === 'city') {
    query = `cityCode=${name}`;
  } else if (type === 'geocode') {
    query = `latitude=${latitude}&longitude=${longitude}`;
  } else {
    return res.status(400).json({
      message: 'Invalid type.'
    });
  }

  const token = await getAmadeusAccessToken();

  if (!token) {
    return res.status(500).json({
      message: 'Could not get access token.'
    });
  }
  // find hotels by name
  const {
    data
  } = await axios.get(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-${type}?${query}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).catch(error => {
    return res.status(500).json({
      message: 'Could not get hotels.',
      error: error.response.data
    });
  });

  if (data) {
    res.send(data.data);
  }
});

export default handler;