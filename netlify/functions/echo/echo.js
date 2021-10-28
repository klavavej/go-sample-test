exports.handler = async function(event, context) {
  const {
    path,
    queryStringParameters,
  } = event;
  
    return {
        statusCode: 200,
        body: JSON.stringify({query: queryStringParameters})
    };
}
