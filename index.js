const axios = require('axios');
const app = require('express')();
let config = require('./config.json');
let users = {};


request()

setInterval(() => {
    request()
}, config.interval);

app.get('/', async (req, res) => {
    let headers = req.headers;
    console.log('[API]', (req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"] || req.ip));

    if (config.API.password.trim().length != 0 && (headers.password == null || headers.password != config.API.password)) {
        res.status(401);
        res.send({
            error: 'incorrect password'
        });
        return;
    }

    res.status(200);
    res.send(users);
})

app.listen(config.API.port, () => {
    console.log('[API] Online!');
})

function request() {
    axios({
        url: 'https://discord.com/api/v9/guilds/' + config.guildID + '/premium/subscriptions',
        timeout: 5000,
        headers: {
            authorization: config.token
        },
        method: 'get',
    }).then(x => {
        x = x.data.filter(y => y.ended == false);
        let temp = {};

        for (const boost of x) {
            temp[boost.user_id] = temp[boost.user_id] + 1 || 1;
        }

        users = temp;
    }).catch(err => {
        console.log("failed to get boosters" + (err.response != null ? `[${err.response.statusText}]` : ''));

        if (err.response != null && err.response.data != null) console.log(err.response.data);
    })
}
