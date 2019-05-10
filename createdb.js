
var AWS = require("aws-sdk");
var region = "us-east-2";
// var creds = new AWS.Credentials({
//     accessKeyId: 'AKIAIEW5MAPPUCJYTXOA', 
//     secretAccessKey:'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'
// });
AWS.config.update({
    region: region,
    accessKeyId: "AKIAILFCZKOEOKOOMZXQ",
    secretAccessKey: "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"
});
var dynamodb = new AWS.DynamoDB();
var ddbClient = new AWS.DynamoDB.DocumentClient()

//region

//credentials: creds


var client = ddbClient;
var tableName = "aaa";

var iterations = 1;

var params = {
    TableName: tableName,
    Key: {
        "a": "san"
    }
};

var startTime = new Date().getTime();
var table = "Movies";

// var newParams = {
//     AttributeDefinitions: [
//        {
//       AttributeName: "Artist", 
//       AttributeType: "S"
//      }, 
//        {
//       AttributeName: "SongTitle", 
//       AttributeType: "S"
//      }
//     ], 
//     KeySchema: [
//        {
//       AttributeName: "Artist", 
//       KeyType: "HASH"
//      }, 
//        {
//       AttributeName: "SongTitle", 
//       KeyType: "RANGE"
//      }
//     ], 
//     ProvisionedThroughput: {
//      ReadCapacityUnits: 5, 
//      WriteCapacityUnits: 5
//     }, 
//     TableName: "Songs"
//    };


   var params = {
    Item: {
    //  "AlbumTitle": {
    //    S: "Somewhat Famous"
    //   }, 
     "Artist": {
       S: "No One You Know"
      }, 
     "SongTitle": {
       S: "Call Me Today"
      }
    }, 
    ReturnConsumedCapacity: "TOTAL", 
    TableName: "Songs"
   };

//    dynamodb.createTable(newParams, (err, data)=>{

//     if(err)
//     {
//         console.error("unable to insert", err)
//     }
//     else
//     {
//         console.log(">>>>>>>>data>>>>", data)  
//     }
//   })

// dynamodb.putItem()
dynamodb.putItem(params, function (err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log(">>>>>>>>data>>>>", data)
        // Query succeeded
    }
});
// client.get(params, function (err, data) {
//     if (err) {
//         console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log(">>>>>>>>data>>>>", data)
//         // Query succeeded
//     }
// });
// dynamodb.batchGetItem(params, function (err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
//   });
var endTime = new Date().getTime();
