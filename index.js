const fetch = require("node-fetch");

class Client {
  constructor(options) {
    if (!options.api_key) throw new Error('"api_key" cannot be undefined');

    this.api_key = options.api_key;
  }

  /**
   * Gets the statistics for WebProfiles.
   * @returns Statistics for WebProfiles
   */
  async status() {
    try {
      const res = await fetch(`https://webprofiles.me/api/info/stats`, {
        method: "GET",
      }).then(async (res) => {
        return await res.json();
      });

      return res;
    } catch (err) {
      return err;
    }
  }
}

module.exports = Client;
