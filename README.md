# Serverless Architecture Demo

**Datahouse - Team Lighthouse**  
Demo repository showcasing serverless patterns for the frontend team and new members.

## 📋 What's Inside

This repo demonstrates two key serverless patterns:

### 1. **Scheduled Tasks Pattern**
- EventBridge scheduler triggers Lambda every minute
- Logs execution details to CloudWatch
- Perfect for cron jobs, data processing, cleanup tasks

### 2. **Fan-Out Pattern** 
- One service publishes to SNS
- SNS distributes to multiple SQS queues  
- Multiple services process the same event simultaneously

```
account-svc → SNS Topic → [SQS Queue A, SQS Queue B] → [open-search-svc, patient-svc]
```

## 🏗️ Structure

**Functions:**
- `ping` - Scheduled task demo (runs every minute)
- `account-svc` - Publishes user updates to SNS
- `open-search-svc` - Processes messages for search indexing
- `patient-svc` - Processes messages for patient records

**Infra:**
- SNS Topic for message distribution
- SQS Queues for reliable message delivery
- EventBridge for scheduling
- CloudWatch for logging

## Quick Setup

1. **Install dependencies**
   ```bash
   yarn install
   ```

2. **Add GitHub Secrets** (Settings → Secrets and variables → Actions)
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

3. **Deploy**
   ```bash
   yarn deploy
   ```

## Testing the Patterns

### Test Scheduled Tasks
- Check CloudWatch logs for `adhoc-tasks-scheduler-dev-ping`
- You should see logs every minute with lighthouse messages

### Test Fan-Out Pattern
1. Go to AWS Lambda Console
2. Find `adhoc-tasks-scheduler-dev-account-svc`
3. Create test event (any JSON will work)
4. Run test
5. Check CloudWatch logs for all 3 services:
   - `account-svc`: "User update event published to SNS successfully, yee hee boy!"
   - `open-search-svc`: "🤤🤤🤤🤤🤤Received user data"
   - `patient-svc`: "🧑‍🦽🧑‍🦽🧑‍🦽🧑‍🦽 Received user data"

## 📝 Commands

```bash
yarn build    # Build TypeScript
yarn deploy   # Deploy to AWS
yarn logs     # View function logs (ping function)
yarn remove   # Delete all AWS resources
```

## Goals

**For Frontend Team:**
- Understand serverless event-driven architecture
- See how backend services communicate asynchronously
- Learn about AWS Lambda, SNS, SQS patterns

**For New Members:**
- Hands-on experience with AWS serverless services
- Understanding of microservices communication patterns
- Introduction to Infrastructure as Code with Serverless Framework

## Tech Stack

- **Runtime:** Node.js 20 with TypeScript
- **Framework:** Serverless Framework
- **AWS Services:** Lambda, SNS, SQS, EventBridge, CloudWatch
- **CI/CD:** GitHub Actions
- **IaC:** CloudFormation (via Serverless)

---

**Team Lighthouse @ Datahouse** 🏠💡