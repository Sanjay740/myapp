const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuring the AWS environment
AWS.config.update({
    accessKeyId: "AKIAJSIIIJNWXKHMA4FQ",
    secretAccessKey: "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",
    region: 'us-east-2',
     endpoint: "http://localhost:4200"
});

var s3 = new AWS.S3();
// var directconnect = new AWS.DirectConnect();
// AWS.config.update({region: 'US East'});
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
// directconnect.allocateConnectionOnInterconnect(params, function (err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

var params = {
    TableName: 'test',
    Item: {
      'CUSTOMER_ID' : {N: '001'},
      'CUSTOMER_NAME' : {S: 'Richard Roe'},
    }
  };
  
  // Call DynamoDB to add the item to the table
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
var filePath = "./text.doc";

//configuring parameters
var paramss = {
  Bucket: 'sanjay740',
  Body : fs.createReadStream(filePath),
  Key : "folder/"+Date.now()+"_"+path.basename(filePath)
};

s3.upload(paramss, function (err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }

  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});