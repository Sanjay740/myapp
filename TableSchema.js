exports.User ={
    AttributeDefinitions: [
       {
      AttributeName: "Artist", 
      AttributeType: "S"
     }, 
       {
      AttributeName: "SongTitle", 
      AttributeType: "S"
     }
    ], 
    KeySchema: [
       {
      AttributeName: "Artist", 
      KeyType: "HASH"
     }, 
       {
      AttributeName: "SongTitle", 
      KeyType: "RANGE"
     }
    ], 
    ProvisionedThroughput: {
     ReadCapacityUnits: 5, 
     WriteCapacityUnits: 5
    }, 
    TableName: "User"
   };

   exports.Music ={
    AttributeDefinitions: [
       {
      AttributeName: "Artist", 
      AttributeType: "S"
     }, 
       {
      AttributeName: "SongTitle", 
      AttributeType: "S"
     }
    ], 
    KeySchema: [
       {
      AttributeName: "Artist", 
      KeyType: "HASH"
     }, 
       {
      AttributeName: "SongTitle", 
      KeyType: "RANGE"
     }
    ], 
    ProvisionedThroughput: {
     ReadCapacityUnits: 5, 
     WriteCapacityUnits: 5
    }, 
    TableName: "Music"
   };

   
