const express = require('express');

const router = express.Router();

/*
  R0UTES
*/

router.all('/auth/m1', (req, res) =>
{
  res.status(200)
    .json({
      success: true,
      data: "You token is Valid!"
    })
})

router.all('/m2', (req, res) =>
{
  res.status(200)
    .json({
      success: true,
      data: "This route dosen't need auth"
    })
})

module.exports = router;