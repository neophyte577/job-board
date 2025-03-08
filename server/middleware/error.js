export const errorHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).json({message: err.message});
    } else {
        res.status(500).json({message:err.message});
    }
};

export const notFound = (req, res, next) => {
    const error = new Error('Unfound');
    error.status = 404;
    next(error);
}

