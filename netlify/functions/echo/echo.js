exports.handler = async function(event, context) {
  const {jam} = event.queryStringParameters
  console.log(jam)
  return {
    statusCode: 200,
    body: `Hello, ${jam}`,
  };
}
