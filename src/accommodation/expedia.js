const Accommodation = require('../accommodation');
const settings = require('config');

const BASE_URL = settings.get('sources.expediacom.base_url');
const URI = settings.get('sources.expediacom.uri');

class Expedia extends Accommodation {
  constructor (location) {
    super(location);

    this.base_url = BASE_URL;
    this.uri = URI;
  }

  _requestOptions () {
    return {
      startDate: '2021-07-08',
      endDate: '2021-07-09',
      destination: 'Cascais',
      SearchArea: 'City',
      SearchType: 'Place',
      adults: 2,
      rfrr: 'hotel.search'
    };
  }

  getAveragePrice () {
    super.getAveragePrice();
  }
}

module.exports = Expedia;
