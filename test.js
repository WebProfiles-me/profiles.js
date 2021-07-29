const Profiles = require("./index");
const userToken = "";
const profiles = new Profiles({
  api_key: userToken,
});

(async () => {
  await profiles.stats().then((result) => console.log(result));

  await profiles
    .fetchUser("milanmdev", "username")
    .then((result) => console.log(result));

  await profiles
    .validateToken(userToken)
    .then((result) => console.log(result));
})();
