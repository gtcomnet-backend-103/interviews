# Phase 2: Knowledge Session (15-20 mins)
**Goal:** Assess their fundamental understanding of the core tech stack before jumping into a complex scenario.

## 1. AWS & Networking
- *Question:* "Can you explain the difference between a public and private subnet, and how instances in a private subnet access the internet?"
  - *Good signal:* Mentions NAT Gateways or NAT instances and routing tables.
  
> 💡 **Interviewer Cheat Sheet:** 
> - **Subnet:** A subdivision of a network. 
> - **Public Subnet:** Servers here can be accessed directly from the public internet (like a web server). 
> - **Private Subnet:** Servers here cannot be reached from the internet directly (like a database). 
> - **NAT Gateway:** A tool that allows servers in a private subnet to reach out to the internet (e.g., to download software updates) without letting the internet reach in.

- *Question:* "How do you securely manage access to AWS resources from an application running in EKS?"
  - *Good signal:* Mentions IAM Roles for Service Accounts (IRSA) rather than hardcoding credentials.

> 💡 **Interviewer Cheat Sheet:**
> - **EKS:** Amazon's Kubernetes service (where our containers run).
> - **IAM:** AWS's permissions system.
> - **IRSA / Hardcoding:** Good engineers will give the application a temporary "Role" to access AWS (like a temporary ID badge), instead of typing a permanent password ("hardcoding") directly into the application code which is a major security risk.

## 2. Terraform / IaC
- *Question:* "What is Terraform state, and why is it important to manage it securely?"
  - *Good signal:* Explains state locking (DynamoDB), remote backends (S3), and keeping secrets out of plaintext state.

> 💡 **Interviewer Cheat Sheet:**
> - **Terraform:** A tool to create cloud infrastructure by writing code instead of clicking around a web console.
> - **State File:** A 'save game' file where Terraform remembers what it has already built. If two people try to change the state at the same time, it corrupts. 
> - **Locking (DynamoDB) / Remote Backends (S3):** They should mention storing this file safely in the cloud (S3) and locking it (DynamoDB) so only one person can apply changes at a time.

- *Question:* "How do you structure Terraform code to keep it DRY across dev, staging, and production?"
  - *Good signal:* Mentions using Terraform modules and passing environment-specific variables (tfvars/workspaces).

> 💡 **Interviewer Cheat Sheet:**
> - **DRY:** "Don't Repeat Yourself". Bad engineers copy-paste identical code for Dev, Staging, and Prod.
> - **Modules / Variables:** Good engineers write the code once (a module) and just pass in different settings (variables) for each environment.

## 3. Kubernetes & Containerization
- *Question:* "What are some best practices for writing a secure and efficient Dockerfile?"
  - *Good signal:* Multi-stage builds, non-root user, minimal base images (Alpine/Distroless).

> 💡 **Interviewer Cheat Sheet:**
> - **Dockerfile:** The recipe used to build the application container.
> - **Multi-stage builds / Minimal base images:** Building the app and then throwing away the unnecessary build tools to make the final file size very small and secure. 
> - **Non-root user:** Ensuring the app doesn't run with administrator privileges. This prevents hackers from taking over the underlying server if the app gets breached.

- *Question:* "What is the difference between a Readiness probe and a Liveness probe in K8s?"
  - *Good signal:* Liveness determines if the pod needs restarting; Readiness determines if it can receive traffic.

> 💡 **Interviewer Cheat Sheet:**
> - **Probe:** An automated health check Kubernetes does on the app.
> - **Liveness Probe:** "Is the app dead/frozen?" If yes, Kubernetes kills it and automatically restarts it.
> - **Readiness Probe:** "Is the app still booting up or too busy?" If yes, Kubernetes temporarily stops sending user traffic to it until it's ready.
