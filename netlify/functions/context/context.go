package lambdacontext

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"context"
)

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	lc, ok := lambdacontext.FromContext(ctx)
	if !ok {
		return &events.APIGatewayProxyResponse{
			StatusCode: 503,
			Body:       "Something went wrong :(",
		}, nil
	}

	cc := lc.ClientContext

	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       "Hello, " + cc.Client.AppTitle,
	}, nil
}
