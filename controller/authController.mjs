import 'dotenv/config'

const OAuth_CLIENT_ID = process.env.OAuth_CLIENT_ID;
const OAuth_CLIENT_SECRET = process.env.OAuth_CLIENT_SECRET;
const GITHUB_REDIRECT_URI = `http://localhost:${process.env.PORT}/auth/callback`;
const sessions = new Map();

export const getAccess = async (req, res) => {
    const state = Math.random().toString(36).substring(7);
    sessions.set(state, { created: Date.now() });
    const redirectUrl = `https://github.com/login/oauth/authorize?` +
    `client_id=${OAuth_CLIENT_ID}&` +
    `scope=repo&` +
    `state=${state}`;
    res.redirect(redirectUrl);
};

export const getCallBack = async (req, res) => {
    const code = req.query.code;
    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: OAuth_CLIENT_ID,
          client_secret: OAuth_CLIENT_SECRET,
          code,
        }),
      });
      const {access_token} = await response.json();
      console.log(access_token);
      res.status(200).send("got the access token");
};