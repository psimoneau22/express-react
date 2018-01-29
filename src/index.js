import path from 'path';
import express from 'express';
import auth from './auth';
import { logger, errorLogger } from './logging';
import api from'./api';
import app from'./app';

var server = express();

server.use(express.static(path.join(__dirname, '../dist/wwwroot'), { index: false }));
server.use(express.json())
server.use(logger);
server.use(auth)
server.use('/api', api);
server.use(app)
server.use(errorLogger);

server.listen(3000, () => console.log('listening on 3000'))