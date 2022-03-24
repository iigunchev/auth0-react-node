const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const guard = require('express-jwt-permissions')();

const port = process.env.PORT || 8080;

const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-irybvkxi.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://www.challenges-api.com',
    issuer: 'https://dev-irybvkxi.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/challenges', guard.check(['read:challenges']), function (req, res) {
    res.json({ 
        challenge1: 'This is the first challenge', 
        challenge2: 'This is the first challenge'});
});

app.listen(port);