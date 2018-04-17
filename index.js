const express = require('express');
const app = express();
const path = require('path');
const distPath = path.join(__dirname, 'dist');
const indexPath = path.resolve(__dirname, 'dist/index.html');
const port = 2300;

app.use(express.static(distPath));

app.get('*', function (request, response, next) {
    response.sendFile(indexPath);
});

app.listen(port);

console.log(`Server listening on port ${port}`);