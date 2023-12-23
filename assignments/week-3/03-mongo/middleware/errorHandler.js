const errorHandler = (err, req, res, next) => {
    res.status(404).send({
        message: err
    })
    next()
  }

  module.exports = errorHandler;