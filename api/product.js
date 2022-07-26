const express = require("express");
const router = express.Router();
const MongoClient = require('mongodb').MongoClient

router.post("/", async (req, res) => {
  try {
    
    var url = 'mongodb+srv://khanhdev191:zxcv123321@cluster0.mznq0.mongodb.net/Khanhdev191?retryWrites=true&w=majority'
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("PhuongDong");
      dbo.collection("Products").find({}).toArray(function(err, result) {
        if (err) throw err;
        db.close();
        // console.log((req.body.project));
        // res.send(JSON.stringify(req.body));
        res.json({
          status: 200,
          message: "Get data has successfully",
          data: {result},
          // jsonData: {req.body}
        });
      });
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).send(toString(error));
  }
});

module.exports = router;
