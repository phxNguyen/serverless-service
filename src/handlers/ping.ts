import { ScheduledEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

export const scheduledHandler = async (
  event: ScheduledEvent,
  context: Context
): Promise<void> => {
  console.log("Event received:", JSON.stringify(event, null, 2));
  console.log("Function name:", context.functionName);
  console.log("Request ID:", context.awsRequestId);
  console.log("Remaining time:", context.getRemainingTimeInMillis(), "ms");
  
  // Demo adhoc task processing
  console.log("hello lighthouse 💡🏠, this is adhoc task scheduler!");

  console.log("Task completed successfully at:", new Date().toISOString());
};

// Optional HTTP endpoint for manual testing
export const handler = async (
  event: any,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log("HTTP ping received:", JSON.stringify(event, null, 2));
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Adhoc task scheduler is running!',
      timestamp: new Date().toISOString(),
      requestId: context.awsRequestId
    })
  };
};