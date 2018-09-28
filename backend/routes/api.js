const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const config = require('../config/dbconnect');

//mongodb connection
const dbConnection = (closure) => {
    return MongoClient.connect(config.database, { useNewUrlParser: true },(err, client) => {
        if (err) return console.log(err);
         console.log('Connected to mongodb..');
         
         closure(client.db());

    });
};

// Error handling
const responseError = (err, res) => {
    responseObj.status = 501;
    responseObj.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};



// Response object
let responseObj = {
    status: 200,
    data: [],
    message: null
};
router.get('/',(req,res)=>{
    res.send();
}); 

// Get users
router.get('/users', (req, res) => {
    dbConnection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                responseObj.data = users;
                res.json(responseObj);
            })
            .catch((err) => {
                responseError(err, res);
            });
    });
});
module.exports = router;