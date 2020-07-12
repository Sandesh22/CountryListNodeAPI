const { baseUrl } = require("../../config");
const { get } = require("../common-helper/api.helper");

module.exports = {
  // get all countries.
  async getCountries(query) {
    let start = parseInt(query.start);
    let size = parseInt(query.size);
    const url = baseUrl + "all";
    let countries = await get(url);
    // starting point & size available.
    // if ((start || start == 0) && size) {
    //   countries = countries.slice(start, start + size);
    // }
    return countries;
  },

  // get country by name.
  async getCountryByName(query) {
    let start = parseInt(query.start);
    let size = parseInt(query.size);
    const url = `${baseUrl}name/${query.country}`;
    console.log(url);

    // console.log(start, size);
    let countries = await get(url);

    // // starting point & size available.
    // if ((start || start == 0) && size) {
    //   countries = countries.slice(start, start + size);
    // }
    return countries;
  },
};
