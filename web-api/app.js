const exp = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');


const { verifyJWT_MW } = require('./middleware');
const path = "/api/v1"
const pathAuth = path+"/auth"
app = exp();

app.use(bodyParser());
app.use(cors());

app.use(require("./routes/auth"));//Auth Method
app.use(pathAuth, verifyJWT_MW);// verify Token middleware

app.use(path, require("./routes/r1"));

app.listen(3400, ()=>{
    console.log("running")
})