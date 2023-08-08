function errorHandler(err, req, res, next) {
    res.status(500).send(err.mesaage)
}

module.exports = errorHandler
