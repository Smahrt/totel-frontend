import nextconnect from 'next-connect';
import axios from 'axios';
import {
  getAmadeusAccessToken
} from '../../../components/apiGetAccessToken';

const handler = nextconnect();

  handler.get(async (req, res) => {
    // await db.connect();
    const {
      noOfAdults,
      noOfRooms,
      checkInDate,
      checkOutDate,
      hotelIds,
    } = req.query;

    // authorize Hotel API

    const token = await getAmadeusAccessToken();

    if (!token) {
      return res.status(500).json({
        message: 'Could not get access token.'
      });
    }

    // search hotel offers
    const {
      data
    } = await axios.get(`https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${hotelIds}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&adults=${noOfAdults}&rooms=${noOfRooms}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).catch(error => {
      console.log(error);
      return res.status(500).json({
        message: 'Could not get hotel offers.'
      });
    });
    // Working path: https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=BWLON187&adults=1&checkInDate=2022-09-08&checkOutDate=2022-09-09
    res.send(data.data);
  });

export default handler;