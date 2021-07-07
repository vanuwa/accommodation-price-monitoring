class Accommodation {
  constructor (location) {
    this._assignLocation(location);
  }

  _assignLocation (location) {
    if (typeof location === 'string') {
      this.location = {
        type: 'place',
        value: location
      };

      return this;
    }

    if (typeof location !== 'undefined' && location.latitude && location.longitude) {
      this.location = {
        type: 'point',
        latitude: location.latitude,
        longitude: location.longitude
      };

      return this;
    }

    this.location = {
      type: 'unsupported',
      value: location
    };

    return this;
  }

  getAveragePrice () {}
}

module.exports = Accommodation;
