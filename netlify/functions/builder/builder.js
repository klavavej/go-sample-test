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

exports.handler = builder(handler);