# Insurance Management System

This is a capstone project that serves as an Insurance Management System, developed using a Java Spring Boot backend and an Angular frontend. This project follows an industry-level structure and is designed for scalability and maintainability.

## Repository Structure
```
📂 insurance-management
│── 📁 backend
│   ├── 📁 src
│   │   ├── 📂 main/java/com/insurance
│   │   │   ├── 📁 config
│   │   │   ├── 📁 controller
│   │   │   ├── 📁 dto
│   │   │   ├── 📁 entity
│   │   │   ├── 📁 exception
│   │   │   ├── 📁 repository
│   │   │   ├── 📁 security
│   │   │   ├── 📁 service
│   │   │   │   ├── 📁 impl
│   │   │   ├── 📁 util
│   │   ├── 📂 resources
│── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 app
│   │   │   ├── 📁 components
│   │   │   ├── 📁 services
│   │   │   ├── 📝 app.component.ts
│   │   ├── 📂 assets
│   ├── 📝 angular.json
│── 📁 documentation
│── 📄 README.md
│── 📄 .gitignore
│── 📄 package.json
│── 📄 build.gradle / pom.xml
```

## Technologies Used
- **Backend:** Java, Spring Boot, Hibernate, MySQL
- **Frontend:** Angular, TypeScript, HTML, CSS
- **Other Tools:** Git, IntelliJ, VS Code

## Core Services
- User Management and Authentication
- Admin Management and Reporting
- Policy and Claim Handling
- Commission Calculation
- Email Notifications
- Payment Gateway Integration
- Cloud Storage for Images and Documents

## How to Run
### Backend
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Build and run using Gradle/Maven:
   ```sh
   ./gradlew bootRun  # For Gradle
   mvn spring-boot:run  # For Maven
   ```
3. API will be accessible at `http://localhost:8080`


 <!-- hyt -->
### Frontend
### Frontend Setup and Running Guide
- This document provides step-by-step instructions to set up the environment, verify Node.js installation, and run the frontend application of the Insurance Management System.

#### Prerequisites
Before running the frontend project, ensure you have the following installed:
- **Node.js**: A runtime environment for JavaScript.
- **Angular CLI**: A command-line interface tool for Angular.
---
###### 1. Download and Install Node.js
1. Visit the [Node.js Official Website](https://nodejs.org/).
2. Download the **LTS (Long-Term Support)** version suitable for your operating system.
3. Follow the installation instructions provided on the website for your platform.
---
###### 2. Verify Node.js Installation
After installation, verify that Node.js and npm (Node Package Manager) are installed correctly:

1. Open your terminal (Command Prompt, PowerShell, or any other terminal tool).
2. Run the following command to check the Node.js version:
   ```bash
   node -v
   npm -V

###### 3.Set Up the Frontend Project
Once Node.js is installed, follow these steps to set up and run the frontend application:

1. Navigate to the frontend folder:
   ```sh
   cd frontend/insurance-mgmt
   ```
2. Install dependencies:
   ```
   npm install
   ```
###### 4. Run the Frontend Application
To start the development server:   
1. Run the Angular application:
   ```sh
   ng serve
   ```
2. Open your browser and go to: 
Application will be accessible at `http://localhost:4200`
The application will automatically reload whenever you make changes to the source files.
 <!-- hyt -->




## Collaboration Guidelines
- Use feature branches for new functionality
- Open pull requests for code review
- Follow proper commit message format

## Future Enhancements
- Implement Email Notifications
- Add Multi-Factor Authentication
- Optimize Database Queries

---
Happy Coding! 🚀



