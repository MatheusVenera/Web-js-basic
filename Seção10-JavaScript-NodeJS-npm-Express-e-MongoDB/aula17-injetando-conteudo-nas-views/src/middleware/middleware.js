exports.middlewareGlobal = (req, resp, next) => {
    resp.locals.variavelLocal = 'Este é o valor da variável local';
    next();
};

exports.outroMiddleware = (req, resp, next) => {
    next();
}