
   
const { builderFunction } = require("@netlify/functions");

async function handler(event, context) {
  const { name } = event.queryStringParameters;
  const time = new Date();

  return {
    statusCode: 200,
    body: `${name || "Someone"} called this function on ${time}`,
  };
}

exports.handler = builderFunction(handler);