const models = require('../models');
const db = require('../database/config.js');

module.exports = {
  getBookingInfo: function(id, callback) {
    console.log('here id: ', id);
    // need to grab all the prices, rating, and numratings
    let query = 'SELECT pricePerNight, cleaningFee, serviceFee, rating, numRatings FROM listings WHERE listingID = ?';
    db.db.query(query, id, (err, result) => {
      if (err) { console.log(err); } else {
        console.log('result: ', result);
        callback(result);
      }
    });
  },

  addBookingInfo: function(callback) {
    // posts booking info into the DB reservations table
    // {
    //   "booking_info": {
    //     "email": "user@mail.com",
    //     "check_in": "2020-10-06",
    //     "check_out": "2020-10-10",
    //     "adults": 2,
    //     "children": 1,
    //     "infants": 0,
    //   },
    //   "booking_fees": {
    //     "price_per_night": 171.00,
    //     "cleaning_fee": 57.00,
    //     "service_fee": 32.00,
    //     "total_price": 260.00,
    //   }
    // }

  }
};