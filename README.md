# Insurance Management System
A full-stack insurance management platform meticulously crafted following industry best practices, engineered for unparalleled scalability and effortless maintainability. This capstone project showcases a cutting-edge microservices-oriented architecture, fortified with robust security protocols and comprehensive reporting capabilities to meet the diverse needs of modern insurance operations.

## ✨ Key Features
### Core Services
- **Identity Management**
  - JWT-based authentication & authorization
  - Role-based access control (RBAC)
  - Password encryption & recovery
  - Session management

- **Policy Administration**
  - Policy lifecycle management
  - Coverage customization
  - Automated renewals
  - Document generation

- **Claims Processing**
  - Intake forms with validation
  - Damage assessment tools
  - Fraud detection indicators
  - Settlement workflows

- **Financial Modules**
  - Premium calculation engine
  - Commission tracking (agent/broker)
  - Payment gateway integration (Stripe/PayPal)
  - Accounting reconciliation

### Advanced Capabilities
- **Business Intelligence**
  - Real-time dashboards
  - Custom report builder
  - Predictive analytics
  - Regulatory compliance reporting

- **Integration Services**
  - Cloud storage (AWS S3/Azure Blob)
  - Email/SMS notifications
  - Third-party API gateway
  - Webhook support
<!-- by 林科宇 -->


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
   (1) Open the tool
   This project needs to be opened with the IntelliJ IDEA development software.
   (2) Check the run configuratio
   Check in the 'Menu' if the SDK version in 'Project Structure' is 17 or higher, and whether the 'Language Level' is set to the SDK default value.
   Check if the run/debug configuration is set for Spring Boot.
   
2. Build and run using Gradle/Maven:
   ```sh
   ./gradlew bootRun  # For Gradle
   mvn spring-boot:run  # For Maven
   ```
   You may encounter the issue of 'dependencies cannot be resolved' during runtime.
   Reason:
   This may be a network issue causing Maven to be unable to download dependencies from the remote repository, or the remote repository address may be unavailable.
   The local cache of Maven might contain incorrect metadata, leading to an inability to resolve dependencies correctly. 
   There may be configuration errors in the pom.xml file, such as incorrect repository addresses or dependency versions.
   ```
  How to solve:
  
   (1) Check the dependency version
   Open the Maven Central Repository.
   Search for "org.apache.tomcat.embed:tomcat-embed-core"
   Confirm whether version 10.1.39 exists. 
   If it does not exist, switch to an available version (such as 10.1.38).
   ```
   (2) Update pom.xmlIf the version does not exist, modify the dependency version in the pom.xml file. For example:
    <dependency>
      <groupId>org.apache.tomcat.embed</groupId>
      <artifactId>tomcat-embed-core</artifactId>
      <version>10.1.38</version> <!-- Change to the existing version -->
      <scope>provided</scope>
    </dependency>

    (3) Clean the Maven cache
    Maven's local cache may contain erroneous metadata. 
    You can clean the local cache using the following command:
    mvn dependency:purge-local-repository Or manually delete the local Maven cache directory (the default path is ~/.m2/repository)

    (4) Force update dependencies
     Run the following command to force Maven to update dependencies: mvn clean install -U
     
    (5) Check your network connection.
    Ensure that your network can access the Maven Central Repository (`https://repo1.maven.org/maven2/`).
    If there are network issues, you may try configuring a proxy or switching to another network.

    (6) Check the warehouse configuration.
    Ensure that the <repositories> configuration in pom.xml is correct. For example:
    <repositories>
      <repository>
        <id>central</id>
        <url>https://repo1.maven.org/maven2/</url>
      </repository>
    </repositories>

    (7) Check the IDE cache.
    If you are using an IDE (such as IntelliJ IDEA or Eclipse), you may need to clean the IDE's cache.
    File   ->   Invalidate Caches / Restart   ->   Invalidate and Restart  

    Following the steps outlined above should resolve the issue of dependency resolution failure.

    <!-- 韦家装 --->


3. API will be accessible at `http://localhost:8080`

 <!-- hyt -->
### Frontend
### Fre [Node.js Official Website](https://nodejs.org/).
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
The application will automatically reload whenever you make changes to the source files.ontend Setup and Running Guide
- This document provides step-by-step instructions to set up the environment, verify Node.js installation, and run the frontend application of the Insurance Management System.

#### Prerequisites
Before running the frontend project, ensure you have the following installed:
- **Node.js**: A runtime environment for JavaScript.
- **Angular CLI**: A command-line interface tool for Angular.
---
###### 1. Download and Install Node.js
1. Visit th
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


# Register Component
## Directory Structure
register/
├── register.component.css     # Styles for the registration component
├── register.component.html    # HTML template for the registration form
├── register.component.spec.ts # Unit tests for the registration component
└── register.component.ts      # TypeScript file for registration logic

## Purpose
Allows new users to create an account by entering and verifying their details.

## Features
### Input Fields:
- 1.name: Required field validation
- 2.Password and Confirm Password: Length validation and matching check
- 3.Email: Format validation and duplicate checking
### Buttons:
- 1.Login: Redirects existing users to login page
- 2.Register: Submits form to create account
### Validation:
- 1.Ensures all fields are filled
- 2.Validates password matching and email format
- 3.Checks for existing email addresses
Shows server-side error messages for invalid credentials
### Routing:
- 1.Primary route: /register
- 2.Redirects to /login after successful registration

## TypeScript Logic
1.Form Validation: 
- Reactive Form with strong typing
- Synchronous and asynchronous validators
- Cross-field validation (password matching)
- Custom email uniqueness check
- Real-time error feedback
2.Account Creation:
- HTTP POST request with user data
- Loading state management
- Graceful error handling
- Success notification
3.Navigation: Uses Router service for redirection
- Post-registration routing
- Error-aware redirects
```
// Key components include:
// Core Components & Techniques:
- FormGroup with generic typing
- Custom validators & async validators
- RxJS for asynchronous operations
- DTO mapping
- HTTP error handling
- Loading state management
- Reactive programming patterns
- Dependency injection
```

## Key Enhancements:
- Strong Typing: Generic FormGroup and DTO interfaces
- Modular Validation: Separated synchronous/async validators
- Error Handling: HTTP status code mapping
- Security: Password strength validation
- UX Improvements: Loading indicators, form state management
- Code Quality: Private methods, clear separation of concerns
- Testability: Isolated validation logic
- Performance: Optimized validation triggers
## Dependencies
Angular FormsModule
Angular RouterModule
Custom UserService for API calls
Validation service/utilities

## Testing
Unit tests (register.component.spec.ts) cover:
Form validation scenarios
Component initialization
API call mocking
Success and error case handling
Navigation testing
<!-- by 林子煊 -->

# Authentication Module
## Table of Contents
1.Component Architecture
2.Router Configuration
3.API Integration with Axios
4.Server-Side Rendering (SSR) Setup
5.Shared Features & Optimization
6.Installation Guide
7.Development Best Practices

## API Integration with Axios
### Installation Requirements
- 1.Axios is a promise-based HTTP client for browsers and node.js, which simplifies making API calls. To install it in your project, you can use either npm or yarn:
```
npm install axios
# or
yarn add axios
```
- 2.If you are working on an Angular application and plan to integrate Axios within an application that uses routing functionality, you need to install the @angular/router package. This package provides routing capabilities for Angular applications, which might be relevant when handling API responses and navigating between different views.
```
npm install @angular/router  
```
### Auth Service Implementation
```
axios的导入
import axios from 'axios';

export default {
  xxxxxxx(userData) {
    return axios.post(`${API_URL}/xxxxxx`, userData);
  },}

   // Add interceptors for error handling
  setupInterceptors() {
    axios.interceptors.response.use(
      response => response,
      error => {
        // Handle global API errors
        return Promise.reject(error);
      }
    );
  }
  ```
```
  import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
```
### Maintenance
Recommended practices:
- 1.Keep dependencies updated
- 2.Monitor for security advisories
- 3.Test across Angular version updates
- 4.Document any custom configurations

#🤝 Contribution
## installs
### Download Installer
-Visit Git(https://git-scm.com/downloads) for Windows and download the latest installer.
### Run Setup
Execute the downloaded file and follow the installation wizard:
- Accept the license agreement.
- Choose the default components.
- Select the default editor (e.g., Visual Studio Code).
- Keep "Use Git from the Windows Command Prompt".
- Use the OpenSSL library for HTTPS connections.
- Checkout Windows-style, commit Unix-style line endings.
- Use Windows' default console window.
- Install additional features (optional).

## We welcome contributions! Please follow our guidelines:

- 1.Fork the repository
- 2.Create your feature branch (git checkout -b )
- 3.Commit your changes (git commit -m 'xxxx')
- 4.Push to the branch (git push )
- 5.Open a Pull Request
<!-- by 谢文斌 -->