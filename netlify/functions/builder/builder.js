const { builder } = require('@netlify/functions')

const handler = async (event, context) => {
  return {
    statusCode: 200,
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