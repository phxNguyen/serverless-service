# Serverless Adhoc Tasks Demo

Simple demo for serverless Lambda functions triggered by scheduler events.

## Quick Setup

```bash
yarn install
yarn deploy
```

## GitHub Secrets

Add to your repo Settings → Secrets:
- `AWS_ACCESS_KEY_ID` 
- `AWS_SECRET_ACCESS_KEY`

## What it does

- Scheduler triggers Lambda every minute
- Lambda logs the event details
- Check CloudWatch logs to see output

## Commands

```bash
yarn build    # Build TypeScript
yarn deploy   # Deploy to AWS  
yarn logs     # View function logs
yarn remove   # Delete everything
```