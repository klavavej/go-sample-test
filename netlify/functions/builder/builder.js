const { builder } = require("@netlify/functions")

async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
    <!DOCTYPE html>
	    <html>
		    <body>
		      Hello from a builder
		    </body>
    </html>
    `,
  };
}

exports.handler = builder(handler);