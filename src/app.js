import path from 'path';
import { Router } from 'express';

export default Router().get('*', (req, resp) => {
    resp.sendFile(path.join(__dirname, '../dist/wwwroot/index.html'))
});

