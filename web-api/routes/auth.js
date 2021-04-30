const express = require('express');

const { createJWToken } = require('../libs/auth');
const { paramCheck } = require('../middleware');

const router = express.Router();

/*
  ROUTES
*/

// router.post('*', paramCheck(['login', 'password']))

router.post('/login', (req, res) =>
{
  let { login, password } = req.body

  if(login=="teste@teste.com" && password=="teste"){//simulating a true login
    let user = {//Payload
        login,
        password
    }
    // NOTE:
    //   Never put the login along with the password on 
    //   the JWT payload, because this is a security breach.
    //   You should use other informations like Login and User Id.
    //   I am only using this because his is a quick example.
    const token = createJWToken({
      sessionData: user,
      maxAge: 3600
    })
    res.cookie('token', token, { httpOnly: true }).status(200).json({ token: token});
    // res.status(200)
    //   .json({
    //     success: true,
    //     token: createJWToken({
    //         sessionData: user,
    //         maxAge: 3600
    //       })
    //   })
  }
  else{
    res.status(401)
      .json({
        message: "Validation failed. Given login and password aren't matching."
      })
  }
});

router.post("/logout", (req, res)=>{
  res.cookie('token', 'invalid', { httpOnly: true }).status(200).json({});
});

module.exports = router;
