const express = require("express");
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/src/templates/portfolio.html');
});

app.get('*', (req, res) => {
    res.status(404).json({error: "404 Page Not Found"});
});

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});