const { builder } = require('@netlify/functions');
async function myfunction(event, context) {
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

exports.handler = builder(myfunction);