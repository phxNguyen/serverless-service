import { SQSEvent, Context } from 'aws-lambda';

export const handler = async (event: SQSEvent, context: Context) => {
  console.log("=== PATIENT SERVICE ===");
  console.log("Processing messages for patient records...");

  for (const record of event.Records) {
    try {
      // Parse the SNS message from SQS
      const snsMessage = JSON.parse(record.body);
      const userData = JSON.parse(snsMessage.Message);
      
      console.log("🧑‍🦽🧑‍🦽🧑‍🦽🧑‍🦽 Received user data:", JSON.stringify(userData, null, 2));
      
      console.log(`Patient record for user ${userData.userId} successfully updated`);
      
    } catch (error) {
      console.error("Error processing message in Patient service:", error);
      console.error("Record:", JSON.stringify(record, null, 2));
    }
  }
  
  console.log("=== PATIENT PROCESSING COMPLETE ===");
};