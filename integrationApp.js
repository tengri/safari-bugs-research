const express = require('express');

const app = express();

app.get('/integration', (req, res) => {
    res.sendFile('integration.html', {root: __dirname });
});

app.listen(8081, () => console.log('integrationApp is listening on port 8081'));
