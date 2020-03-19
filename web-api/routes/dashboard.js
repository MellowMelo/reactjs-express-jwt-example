const express = require('express');

const { verifyJWT_MW } = require('../middleware');

const router = express.Router();

/*
  R0UTES
*/

router.all('*', verifyJWT_MW);

router.get('/', (req, res) =>
{
  res.status(200)
    .json({
      success: true,
      data: "Super secret data!"
    })
})

module.exports = router;