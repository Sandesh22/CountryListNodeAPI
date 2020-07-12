const request = require("request");
const {apiHost, apiKey} = require("../../config");

module.exports = {
    // all get requests from here.
    async get(url) {
        const options = {
            method: 'GET',
            url: `${url}`,
            headers: {
                'x-rapidapi-host': apiHost,
                'x-rapidapi-key': apiKey,
                useQueryString: true
            }
        };

        return new Promise(async (resolve, reject) => {
            await request(options, (error, response) => {
                if (error) reject();
                resolve(JSON.parse(response.body));
            });
        });
    }
}