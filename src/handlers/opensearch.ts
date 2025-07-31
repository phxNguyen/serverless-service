import { SQSEvent, Context } from 'aws-lambda';

export const handler = async (event: SQSEvent, context: Context) => {
  console.log("=== OPEN SEARCH SERVICE ===");
  console.log("Processing messages for search indexing...");

  for (const record of event.Records) {
    try {
      // Parse the SNS message from SQS
      const snsMessage = JSON.parse(record.body);
      const userData = JSON.parse(snsMessage.Message);
      
      console.log("🤤🤤🤤🤤🤤Received user data:", JSON.stringify(userData, null, 2));
      
      console.log(`User ${userData.userId} successfully indexed in OpenSearch`);
      
    } catch (error) {
      console.error("Error processing message in OpenSearch service:", error);
      console.error("Record:", JSON.stringify(record, null, 2));
    }
  }
  
  console.log("=== OPEN SEARCH PROCESSING COMPLETE ===");
};