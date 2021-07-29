<div  align="center">

<br>

# profiles.js

<br>

<p>

RESTful Node.js API Wrapper to interact with the WebProfiles API

</p>

<br>

<p>

<br>

<a  href="https://www.npmjs.com/package/profiles.js"><img  src="https://img.shields.io/npm/v/profiles.js.svg?maxAge=3600"  alt="NPM version" /></a>

<a  href="https://www.npmjs.com/package/profiles.js"><img  src="https://img.shields.io/npm/dt/profiles.js.svg?maxAge=3600"  alt="NPM downloads" /></a>

<a  href="https://david-dm.org/WebProfiles-me/profiles.js"><img  src="https://img.shields.io/david/WebProfiles-me/profiles.js.svg?maxAge=3600"  alt="Dependencies" /></a>

<a  href="https://www.npmjs.com/package/profiles.js"><img  src="https://api.ghprofile.me/view?username=WebProfiles-me-profiles.js&label=repository%20view%20count&style=flat"  alt="Repository view count" /></a>

</p>

<br>

<p>

<a  href="https://nodei.co/npm/profiles.js/"><img  src="https://nodei.co/npm/profiles.js.png?downloads=true&stars=true"  alt="npm installnfo" /></a>

</p>

</div>

# Usage

## Add the package

To start, you will need to install the package. To do that, simply run `npm i profiles.js`. In your code, add the following:

```js
const Profiles = require("profiles.js");
const profiles = new Profiles({
  api_key: "your-user-key-here",
});
```

To fetch your user token, run the following in the browser console:

```js
const value = `; ${document.cookie}`;
const parts = value.split(`; pass=`);
if (parts.length === 2) parts.pop().split(";").shift();
```

Now you can use any of the functions below!

---

### GET WebProfiles Statistics

```js
profiles.stats().then((result) => console.log(result));
```

### GET User Information

```js
profiles.fetchUser(id, type).then((result) => console.log(result));
```

`id` is the user id/username, `type` is the type of id provided (`id` or `username`).

### GET User Token Data

```js
profiles.validateToken(token).then((result) => console.log(result));
```

`token` is the token to validate.
