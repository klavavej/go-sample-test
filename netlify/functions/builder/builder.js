
   
const { builderFunction } = require("@netlify/functions");

async function handler(event, context) {
  const {test} = event.queryStringParameters;
  console.log(test)
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
    <script>
    const queryString = window.location.search;
     console.log(queryString);
    </script>
    
    <script>
     console.log("Is this log on?");
    </script>
    `,
  };
}

exports.handler = builderFunction(handler);
