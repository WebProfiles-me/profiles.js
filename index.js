const fetch = require("node-fetch");

class Client {
  constructor(options) {
    if (!options.api_key) throw new Error('"api_key" cannot be undefined');

    this.api_key = options.api_key;
    this.user_password = options.user_password;
  }

  /**
   * Gets the statistics for WebProfiles.
   * @returns Statistics for WebProfiles
   */
  async stats() {
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

  /**
   * Fetches a user registered on WebProfiles.
   * @param {String} id | The id/username of the user to fetch.
   * @param {String} type | The type of id provided (id/username).
   * @returns UserElement
   */
  async fetchUser(id, type) {
    try {
      if (!id || typeof id != "string")
        return new Error(`${id} is not a valid value for "id".`);
      if (
        !type ||
        typeof type != "string" ||
        (type !== "id" && type !== "username")
      )
        return new Error(`${type} is not a valid value for "type".`);

      if (type == "id") {
        var res = await fetch(`https://webprofiles.me/api/users/${id}`, {
          method: "GET",
        }).then(async (res) => {
          return await res.json();
        });
      } else if (type == "username") {
        var res = await fetch(
          `https://webprofiles.me/api/utils/fetch-user-via-username/${id}`,
          {
            method: "GET",
          }
        ).then(async (res) => {
          return await res.json();
        });
      }

      return res;
    } catch (err) {
      return err;
    }
  }

  /**
   * Search for a user on WebProfiles.
   * @param {String} query | The query to search for.
   * @returns SearchElement
   */
  async search(query) {
    try {
      if (!query || typeof query != "string")
        return new Error(`${query} is not a valid value for "query".`);

      var res = await fetch(
        `https://webprofiles.me/api/utils/search/${query}`,
        {
          method: "GET",
        }
      ).then(async (res) => {
        return await res.json();
      });

      return res;
    } catch (err) {
      return err;
    }
  }

  /**
   * Validate a user token.
   * @param {String} token | The token to validate.
   * @returns UserElement
   */
  async validateToken(token) {
    if (!token || typeof token != "string")
      return new Error(`${token} is not a valid value for "token".`);

    try {
      const res = await fetch(
        `https://webprofiles.me/api/utils/validate-session-token/${token}`,
        {
          method: "GET",
        }
      ).then(async (res) => {
        return await res.json();
      });

      return res;
    } catch (err) {
      return err;
    }
  }

  // EDIT
  /**
   * Search for a user on WebProfiles.
   * @param {String} query | The query to search for.
   * @returns SearchElement
   */
  async editBio(bio) {
    try {
      if (!bio || typeof bio != "string")
        return new Error(`${bio} is not a valid value for "bio".`);

      let token = await this.validateToken(this.api_key);

      var res = await fetch(`https://webprofiles.me/api/users/edit`, {
        method: "PUT",
        body: JSON.stringify({
          bio: bio,
          id: token.id,
          oldpassword: this.user_password,
          password: this.user_password,
          username: token.username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
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
