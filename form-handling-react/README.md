# Form Handling in React with Controlled Components and Formik

This project demonstrates form handling in React using controlled components and Formik with Yup validation.

## Features

- **Controlled Components Form**: A registration form using React's controlled components with separate state variables for username, email, and password.
- **Formik Form**: A registration form using Formik library with Yup schema validation.
- **Mock API Integration**: Both forms integrate with a mock API for simulating user registration.
- **Validation**: Client-side validation for required fields, email format, and password length.
- **Error Handling**: Displays validation errors and API errors.

## Technologies Used

- React 19
- Formik
- Yup
- Vite
- ESLint

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd form-handling-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Usage

- Fill out the forms with valid data.
- Test validation by leaving fields empty or entering invalid data.
- Try registering with username "admin" to see API error handling.
- Both forms will simulate an API call and show success/error messages.

### Project Structure

```
src/
├── components/
│   ├── RegistrationForm.jsx  # Controlled components form
│   └── FormikForm.jsx        # Formik form
├── api/
│   └── mockApi.js            # Mock API functions
├── App.jsx                   # Main app component
└── main.jsx                  # Entry point
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
