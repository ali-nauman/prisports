const cors = require('cors');
const express = require('express');
const http = require('http');

const database = require('./database/database');
const accountsRouter = require('./routes/accounts');
const coachesRouter = require('./routes/coaches');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/accounts', accountsRouter);
app.use('/coaches', coachesRouter);

database.connectWithDatabase();

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/...`);
});