import { Router } from 'express';
import users from './users';
import values from './values';

export default Router()
    .use('/users', users)
    .use('/values', values);

