const Profiles = require("./index");
const userToken = "";
const userPassword = "";
const profiles = new Profiles({
  api_key: userToken,
  user_password: userPassword,
});

(async () => {
  await profiles.stats().then((result) => console.log(result));

  await profiles
    .fetchUser("milanmdev", "username")
    .then((result) => console.log(result));

  await profiles.search("milanmdev").then((result) => console.log(result));

  await profiles.validateToken(userToken).then((result) => console.log(result));

  // EDIT
  await profiles
    .editBio("13 y/o backend JavaScript developer")
    .then((result) => console.log(result));
})();
