"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Pranay Gupta
 * @created 2 Sept 2019
 * @version 0.0.1
 */
var express = require("express");
var bodyParser = require("body-parser");
var data_1 = require("./data/data");
var app = express();
app.listen(3000, function () {
    console.log("started");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var location = {
    latitude: 27.3321,
    longitude: 33.5636
};
app.get('/location', function (req, res) {
    console.log("got get request");
    res.send(location);
});
app.get('/', function (req, res) {
    res.send("Ping worked");
});
app.post('/location', function (req, res) {
    var _location = req.body;
    location = _location;
    res.send("Done");
    console.log("Got post request");
});
app.post('/login', function (req, res) {
    console.log(req.body);
    var username = req.body['username'];
    var password = req.body['password'];
    for (var i = 0; i < data_1.data.Users.length; i++) {
        var user = data_1.data.Users[i];
        if (user.userName == username && user.password == password) {
            res.status(200).json({ msg: "Welcome back", dev: "Success in logging in" });
            return;
        }
        else if (user.userName == username && user.password != password) {
            res.status(400).json({ msg: "Invalid credentials", dev: "password did not match" });
            return;
        }
    }
    res.status(404).json({ msg: "We couldn't find you", dev: "User not in database" });
});
