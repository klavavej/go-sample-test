
   
const { builderFunction } = require("@netlify/functions");

async function handler(event, context) {
  const { name } = event.queryStringParameters;
  const time = new Date();

  return {
    statusCode: 200,
     body: `
    <!DOCTYPE html>
	    <html>
		    <body>
		      Hello World
		    </body>
    </html>
    `,
  };
}

exports.handler = builderFunction(handler);