# Phase 3: Technical Interview & System Design (30-40 mins)
**Goal:** Test their ability to architect a solution to a real-world problem.

## The Scenario Prompt:
> "We have a legacy, stateful monolithic web application that is currently running on a single AWS EC2 instance. The database is running locally on that same instance, and deployments are done via manual SSH and shell scripts. 
> 
> Walk me through how you would architect and execute a migration of this application to a highly available, scalable, containerized architecture on Kubernetes (EKS) using Terraform, complete with a modern CI/CD pipeline."

> 💡 **Interviewer Cheat Sheet:**
> - **Legacy Monolith:** An older application where everything (web server, database, background jobs) is crammed onto one computer. 
> - **EC2:** Just a standard virtual server in the cloud.
> - **Stateful:** The application saves files or data directly to its own hard drive (which is bad for scalability).
> - **High Availability (HA) / Scalability:** Moving from one computer to multiple smaller computers that can automatically grow in number during busy times and won't go down if one breaks.
> - **CI/CD:** Automated testing and deployment (no more manual SSH logins to servers to deploy code).

## What to look for during their answer:

### 1. Discovery Phase
- **What they should do:** Ask about the stateful data, database size, and acceptable downtime before jumping to solutions.
> 💡 **Interviewer Cheat Sheet:** A good senior engineer doesn't blindly guess. They will ask you questions like "How much data is in the database?" or "Can we afford to take the app offline for 1 hour on Sunday to migrate?" 

### 2. Architecture Design
- **What they should do:** Decouple the database (move to RDS Multi-AZ) and externalize storage (S3).
> 💡 **Interviewer Cheat Sheet:** 
> - They need to separate the database from the web app. 
> - **RDS:** AWS's managed database service.
> - **S3:** AWS's file storage service (for images, user uploads). The app should no longer save files to its local hard drive, as new containers are erased when restarted.

### 3. CI/CD Pipeline
- **What they should do:** Describe a robust pipeline (Lint -> Test -> Build -> Image Scan -> Push to ECR -> Deploy via GitOps/Helm).
> 💡 **Interviewer Cheat Sheet:** Listen for a step-by-step automated sequence: checking code for errors (Lint), running automated tests, building the Docker container, scanning it for security vulnerabilities, uploading it to a registry (ECR), and then deploying it to Kubernetes automatically.

### 4. Migration Strategy (The Cutover)
- **What they should do:** Suggest database replication (AWS DMS) and a DNS cutover (Route53) for zero/minimal downtime.
> 💡 **Interviewer Cheat Sheet:** 
> - The hardest part is moving the live data without losing it. 
> - They should mention syncing the old database to the new one constantly (AWS DMS), and then simply flipping a switch (DNS / Route53) to point users to the new system once the data is copied over.
