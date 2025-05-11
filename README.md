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
2. Build and run using Gradle/Maven:
   ```sh
   ./gradlew bootRun  # For Gradle
   mvn spring-boot:run  # For Maven
   ```
3. API will be accessible at `http://localhost:8080`

### Frontend
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the Angular application:
   ```sh
   ng serve
   ```
4. Application will be accessible at `http://localhost:4200`

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


