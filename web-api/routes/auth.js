import express from 'express'

import db from '../models'
import { createJWToken } from '../libs/auth'
import { paramCheck } from '../middlewares'

const router = express.Router()

/*
  ROUTES
*/

router.post('*', paramCheck(['email', 'password']))

router.post('/login', (req, res) =>
{
  let { email, password } = req.body

  if(email=="teste@teste.com" && password=="teste"){//simulating a true login
    let user = {
        email,
        password
    }
    res.status(200)
      .json({
        success: true,
        token: createJWToken({
            sessionData: user,
            maxAge: 3600
          })
      })
  }
  else{
    res.status(401)
      .json({
        message: err || "Validation failed. Given email and password aren't matching."
      })
  }
})

export default router;