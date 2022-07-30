const express = require("express");
const router = express.Router();
const fs = require('fs');
var nodeBase64 = require('nodejs-base64-converter');

router.post("/", async (req, res) => {
  try {
    
        res.json({
          status: 200,
          message: "Get data has successfully",
          data:' {result}',
          // jsonData: {req.body}
        });
      

  } catch (error) {
    console.error(error);
    return res.status(500).send(toString(error));
  }
});

module.exports = router;
