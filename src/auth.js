const AuthType = 'Bearer'

export default function(req, resp, next) {
    const authHeader = req.get('Authorization');

    if(!authHeader || authHeader.substring(0, AuthType.length) !== AuthType) {
        return next();
    }

    const bearerToken = authHeader.substring(AuthType.length + 1);
    req.userId = +bearerToken;
    next();
}