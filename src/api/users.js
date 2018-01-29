import { Router } from 'express';

let users = [
    { id: 1, name: 'phil'},
    { id: 2, name: 'matthew'},
    { id: 3, name: 'mark'},
]

export default Router()
    .get('', getCurrentUser)
    .get(':id', getUserById);

function getCurrentUser(req, resp) {
    const user = getUserById(req.user.id);
    if (user) {
        resp.json(user);
    }

    resp.status(404).json('Not Found');
}

function getUser(req, resp) {
    const userId = +req.paramas.id;
    const user = getUserById(userId);
    if (user) {
        resp.json(user);
    }

    resp.status(404).json('Not Found');
}

function getUserById(userId) {
    return users.find(u => u.id === userId);
}

