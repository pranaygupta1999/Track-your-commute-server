/**
 * @author Pranay Gupta
 * @created 2 Sept 2019
 * @version 0.0.1
 */
import  express=  require("express");
import { Location, User } from "./types/requests";
import bodyParser = require("body-parser");
import {data as Data} from "./data/data";
import { Response, Request } from "express-serve-static-core";
const app  = express();
app.listen(3000, ()=>{
    console.log("started");
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var location: Location = {
    latitude: 27.3321,
    longitude: 33.5636
}
app.get('/location', (req:Request,res:Response)=>{
    console.log("got get request");
    res.send(location);
});
app.get('/', (req:Request, res: Response)=>{
    res.send("Ping worked");
})
app.post('/location', (req:Request, res:Response)=>{
    var _location: Location = req.body;
    location = _location;
    res.send("Done");
    console.log("Got post request");
});

app.post('/login', (req:Request, res:Response)=>{
    console.log(req.body);
    const username = req.body['username'];
    const password = req.body['password'];
    for(let i=0; i< Data.Users.length; i++){
        let user:User = Data.Users[i];
        if(user.userName == username && user.password == password){
            res.status(200).json({msg: "Welcome back", dev:"Success in logging in"});
            return;
        }
        else if(user.userName == username && user.password != password){
            res.status(400).json({msg:"Invalid credentials", dev:"password did not match"});
            return;
        }
    }
    res.status(404).json({msg: "We couldn't find you", dev: "User not in database"});
});


