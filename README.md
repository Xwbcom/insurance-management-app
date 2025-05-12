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

     Note: The -U option forces Maven to check and update the snapshot versions (SNAPSHOT) of dependencies. If the project uses snapshot version dependencies, these dependencies may introduce incompatible changes after the update. 
     - Solutions:
     • Carefully check the version update logs of the dependencies before updating to understand potential incompatible changes.
     • Conduct thorough testing in the development environment to ensure that the updated dependencies do not affect the functionality of the project.
     
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

# Homepage Introduction Component
This directory contains the component, which is part of the insurance management system frontend. The component is designed to display an introduction or overview section on the application's homepage.

## Features
· Dynamic Content: The component can render dynamic content related to the application introduction.
· Responsive Design: Ensures the introduction section displays correctly across various devices.
· Customizable: Allows easy modification of displayed text, styles, or layouts.

## File Structure
src/app/components/homepage-intro/
├── home-page-intro.component.ts  # TypeScript logic for the component
├── home-page-intro.component.html  # HTML template
├── home-page-intro.component.css  # Component styles
├── home-page-intro.module.ts  # Angular module definition

# Usage Instructions
## Importing the Component
To use this component in your Angular application, ensure the module is properly imported in your feature module or AppModule:
```
Import {HomePageIntroComponent}. /Component/homepage introduction/homepage introduction. Components';
```

## Adding Component to Template
You can include this component in any Angular template using its selector:
```
<Application homepage introduction></app homepage introduction>
```

## Custom Content
Modify files to update introductory text or add new visual elements. For example:

```
<div class="Introduction section">
<h1>Welcome to the insurance management system</h1>
<p>Efficiently manage your insurance policies, claims, and customer information. </p>
</div>
```

## Styling
You can update the stylesheet to comply with the application's design system. Example:

```
Introduction section{
Text alignment: centered;
Fill: 20px;
Background color: # f9f9f9;
}
```
 
# Technology Stack
Angular: A framework for building dynamic, single-page applications (SPAs) with reactive architecture.
TypeScript: Provides static typing for enhanced code maintainability and developer productivity.
HTML: Used for structuring web page content with semantic markup.
CSS: Handles styling, theming, and responsive layout implementation.

# File Structure
The frontend source code is located in the frontend/insurance-mgmt directory with the following core architecture:
```
frontend/
│
├── src/
│   ├── app/                  # Core business logic modules and components
│   ├── assets/               # Static assets (images, fonts, etc.)
│   ├── environments/         # Environment configuration files
│   ├── index.html            # Application entry point (HTML shell)
│   ├── main.ts               # Bootstrapping script (Angular platform)
│   ├── styles.css            # Global stylesheet
│   └── polyfills.ts          # Browser compatibility polyfills
│
├── angular.json              # Angular workspace configuration
├── package.json              # NPM dependencies and build scripts
└── tsconfig.json             # TypeScript compiler configuration
```

# Functional Modules
## User Management Module
Implements authentication (login/registration) and role-based access control (RBAC).
## Policy Management Module
CRUD operations for insurance policy records with state management.
## Claims Processing Module
End-to-end claim submission, approval workflows, and status tracking.
## Analytics Dashboard
Data visualization of KPIs (policies issued, claim trends) via charts and metrics.
<!-- by lijintai -->

# customer
```
src/app/customer
├── customer-components     # Contains reusable Angular components related to customer functionalities.
├── customer-routing.module.ts    # Defines the routing configuration for customer-related pages and components.
├── customer.module.ts    # The main module file for grouping all customer-related components, services, and configurations.
├── model.ts        # Contains TypeScript models and interfaces for defining customer-related data structures.
├──services             #Contains service files for handling business logic, API calls, and data management related to customers.
```
## Purpose and Functionality
- 1.Introduction
The src/app/customer folder serves as the core organizational unit for managing functions related to the customer module in the front-end application. It adopts an advanced modular design concept to systematically integrate business logic, visual components, data interaction services, etc. related to customers. This greatly enhances the maintainability of the code, facilitates the expansion of new functions, and effectively reduces the development cycle and labor costs.

- 2. Directory Structure
It is specifically used to store Angular components for implementing customer functions, covering various application scenarios such as customer information display, form operations, and data dashboards. Through the component reuse mechanism, repetitive development is reduced, and development efficiency is improved.

- 3. Component Directory (customer-components)
The components are designed and developed closely around diverse application scenarios related to customers. For example:

Customer Information Display Component: Presents important data such as customers' basic information and transaction records to users in a clear and intuitive way through an intuitive interface layout.
Form Operation Component: Utilizes advanced interaction design to achieve efficient data entry and modification, and is equipped with a complete verification mechanism to ensure the accuracy of the data.
Data Dashboard Component: Displays the dynamic changes of customer-related data in real time with the help of visual charts, providing strong support for decision-making.

- 4.Routing Module (customer-routing.module.ts)
This file constructs a navigation system through meticulous configuration. When users enter a specific URL in the browser to access customer-related pages, it can quickly identify and match the corresponding page components, achieving smooth page jumps and efficient data loading.

- 5.Module File (customer.module.ts)
It organically integrates all function modules related to customers, follows the principles of high cohesion and low coupling, ensures that the logic related to customer functions is closely combined, and makes the customer module independent of other modules, with interaction only through clear interfaces.


- 6. Model File (model.ts)
It precisely defines the data structure of customer information in the form of interfaces or classes and clarifies the types and formats of customer data.

## Summary of Function
The folder is a modular section of the frontend application that encapsulates all customer-related features and functionalities. It ensures a clear separation of concerns, making the application easier to maintain, scale, and develop. By organizing components, routing, models, and services, it provides a robust framework for implementing customer-centric features efficiently.
<!-- by 韦朝刚 -->