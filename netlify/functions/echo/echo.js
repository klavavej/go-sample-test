async function handler(event, context) {
  const {test} = event.queryStringParameters
  console.log(test)
  return {
    statusCode: 200,
    body: `Hello, ${test}`,
  };
}
