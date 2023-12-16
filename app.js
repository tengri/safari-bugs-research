const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname });
});

app.get('/return', (req, res) => {
    res.sendFile('/return.html', {root: __dirname });
})

app.post('/localstorage-test', (req, res) => {
    console.log('localStorageTestResult', req.body);
    res.send('ok');
});

app.listen(8080, () => console.log('App is listening on port 8080'));
