// Middleware para tratamento de erros
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
}

module.exports = errorHandler;
