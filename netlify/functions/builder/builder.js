
   
const { builderFunction } = require("@netlify/functions");

async function handler(event, context) {
  const {test} = event.queryStringParameters
  console.log(test)
  return {
    statusCode: 200,
    body: `Hello, ${test}`,
  };
}

exports.handler = builderFunction(handler);
