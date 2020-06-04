const cors = require('cors');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const passport = require('passport');

const database = require('./database/database');
database.connectWithDatabase();

const accountRouter = require('./routers/account.router');
const coachRouter = require('./routers/coach.router');
const playerRouter = require('./routers/player.router');
const adminRouter = require('./routers/admin.router');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.use('/accounts', accountRouter);
app.use('/coaches', coachRouter);
app.use('/players', playerRouter);
app.use('/admins', adminRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/...`);
});