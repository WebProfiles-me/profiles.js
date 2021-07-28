<div align="center">
  <br>

# profiles.js

<br>
<p>
RESTful Node.js API Wrapper to interact with the WebProfiles API
</p>
<br>
<p>
<br>
<a href="https://www.npmjs.com/package/profiles.js"><img src="https://img.shields.io/npm/v/profiles.js.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/profiles.js"><img src="https://img.shields.io/npm/dt/profiles.js.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://david-dm.org/WebProfiles-me/profiles.js"><img src="https://img.shields.io/david/WebProfiles-me/profiles.js.svg?maxAge=3600" alt="Dependencies" /></a>
<a href="https://www.npmjs.com/package/profiles.js"><img src="https://api.ghprofile.me/view?username=WebProfiles-me-profiles.js&label=repository%20view%20count&style=flat" alt="Repository view count" /></a>
</p>

<br>

<p>
<a href="https://nodei.co/npm/profiles.js/"><img src="https://nodei.co/npm/profiles.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>

</div>

# Usage

## Add the package

To start, you will need to install the package. To do that, simply run `npm i profiles.js`. In your code, add the following:

```js
const Profiles = require("profiles.js");

const profiles = new Tixte({
  api_key: "your-user-key-here",
});
```

Now you can use any of the functions below!

---

### Checking a user

```js
profiles.stats().then((result) => console.log(result));
```

The code above should return a 200 OK message. (JSON)
