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