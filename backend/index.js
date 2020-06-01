const cors = require('cors');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const passport = require('passport');

const database = require('./database/database');
database.connectWithDatabase();

const accountsRouter = require('./routers/account.router');
const coachesRouter = require('./routers/coach.router');
const playerRouter = require('./routers/player.router');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.use('/accounts', accountsRouter);
app.use('/coaches', coachesRouter);
app.use('/players', playerRouter);



const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/...`);
});