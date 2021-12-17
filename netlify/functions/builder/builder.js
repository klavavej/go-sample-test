const { builderFunction } = require("@netlify/functions");

async function(event, context) {
  const {
    path,
    queryStringParameters,
  } = event;
  console.log(`params are ${queryStringParameters}`);
    return {
        statusCode: 200,
        body: JSON.stringify({query: queryStringParameters})
    };
}

exports.handler = builderFunction(handler);

