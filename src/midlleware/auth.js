const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')

const authentication = async function (req, res, next) {

    try {
        // getting token from headers
        const token = req.headers['x-api-key'];

        if (!token) {
            return res.status(400).send({ status: false, message: "Token is mandatory" });
        }
        // veryfying token using by checking token with secret-key
        jwt.verify(token, process.env.SECRETKEY, (err, decodedToken) => {

            if (err) {
                return res.status(400).send({ status: false, message: err.message })
            }

            // setting userId in headers
            req.headers['loggedUser'] = decodedToken.user

            next();
        })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

//====================================================================================

const authorisation = async function (req, res, next) {

    try {
        
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { authentication, authorisation }