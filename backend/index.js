const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');

const accountsRouter = require('./routes/accounts');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/accounts', accountsRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});