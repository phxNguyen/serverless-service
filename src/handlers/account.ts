import { Context } from 'aws-lambda';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

const snsClient = new SNSClient({ region: process.env.AWS_REGION });

export const handler = async (event: any, context: Context) => {
  console.log("=== ACCOUNT SERVICE ===");
  console.log("Processing user update...");
  
  // Simple user update data for demo
  const userData = {
    action: "update_user",
    userId: "12345",
    name: "John Doe",
    email: "john@example.com"
  };

  console.log("User data:", JSON.stringify(userData, null, 2));

  try {
    // Publish to SNS Topic for fan-out
    const publishCommand = new PublishCommand({
      TopicArn: process.env.ACCOUNT_TOPIC_ARN,
      Message: JSON.stringify(userData),
      Subject: "User Update Event"
    });

    await snsClient.send(publishCommand);
    console.log("User update event published to SNS successfully, yee hee boy!");
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "User update processed and distributed",
        userId: userData.userId
      })
    };
  } catch (error) {
    console.error("Error publishing to SNS:", error);
    throw error;
  }
};