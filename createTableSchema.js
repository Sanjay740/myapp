var AWS = require("aws-sdk");
var AWSconfigdata = require('./config');
var TableNames = require('./TableName')
AWS.config.update(AWSconfigdata);
var dynamodb = new AWS.DynamoDB();

var params = {
};

dynamodb.listTables(params, function (err, data) {
    if (err) {
        console.log(err, err.stack); // an error occurred
    }
    else {
        let Tables = data.TableNames
        for (const element of TableNames) {
            var result = createTable(Tables, element);
            if (result && !!result) {
                console.log("Table Created")
            }
        };
    }

});

function createTable(Tables, element) {
    if ((Tables.indexOf(element.table)) == -1) {
        dynamodb.createTable(element.modules, (error, data) => {
            if (error) console.log(error); // an error occurred
            else {
                return true;
            }
        })
    }
    else
    {
        return  console.log("Table Already Exist")
    }
}