import { Router } from 'express';

export default Router()
    .get('/', function(req, resp){
        resp.json({ prop: 'val'});
    })