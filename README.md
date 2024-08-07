# Docker Homework: E-Commerce Platform

## Overview

This project demonstrates containerizing an e-commerce platform using Docker. It includes:

1. **Web Server**: Nginx
2. **Application Layer**: Node.js
3. **Database**: PostgreSQL

## Setup

1. **Clone the repository**:

   ```sh
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Build and run the containers**:

   ```sh
   docker-compose up --build
   ```

3. **Access the application**:

   - Web Server: [http://localhost](http://localhost)
   - Application Layer: [http://localhost:3000](http://localhost:3000)

4. **Database Access**:

   ```sh
   psql -h localhost -p 5432 -U postgres -d mydatabase
   ```

## Files

- **Dockerfile.nginx**: Nginx setup
- **Dockerfile.node**: Node.js setup
- **nginx.conf**: Nginx configuration
- **src/index.js**: Node.js application

## Health Check

PostgreSQL health check is included to ensure readiness.

---

**Author**: Cemalhan Alptekin
