const { builderFunction } = require("@netlify/functions");

async function handler(event, context) {
  const {jam} = event.queryStringParameters
  console.log(jam)
  return {
    statusCode: 200,
    body: `Hello, ${jam}`,
  };
}

exports.handler = builderFunction(handler);
