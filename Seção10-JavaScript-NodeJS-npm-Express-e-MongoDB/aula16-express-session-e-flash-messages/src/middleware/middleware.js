exports.middlewareGlobal = (req, resp, next) => {
    console.log('Middleware global');
    next();
};

exports.outroMiddleware = (req, resp, next) => {
    console.log('Outro middleware');
    next();
}