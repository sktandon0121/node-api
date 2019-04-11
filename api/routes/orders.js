const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
  res.status(200).json({
    message:"this is GET order "
  })
});


router.patch('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: "this is PATCH order ",
    orderId: req.params.orderId
  });
});

module.exports = router;