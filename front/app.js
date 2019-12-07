const express = require('express');
const app = express();
const request = require('request');
// app.use(express.static('views'));
const api = process.env.BACKEND_URL;

app.get('/', (req, res) => {
    res.json({api, message: 'api'});
    // res.sendFile('index.html', {api});
});

app.get('/about', (req, res) => {
    request(api, {json: true}, (err, response, body) => {
        if(!err) {
            res.json(body);
        } else {
            res.send(err);
        }
    });
});

app.listen(3000, () => {
    console.log('Listeinig at port 3000');
});
