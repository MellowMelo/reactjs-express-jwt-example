const exp = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

app = exp();

app.use(bodyParser());
app.use(cors());

app.use(require("./routes/auth"))
app.use(require("./routes/dashboard"))

app.listen(3400, ()=>{
    console.log("running")
})