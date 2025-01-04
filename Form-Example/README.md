# React Form Validation Exercise

## Project Description
This exercise demonstrates the implementation of a controlled form in React with validation. It's a sign-up form for Little Lemon Restaurant that includes various input fields with specific validation requirements.

## Features
- Controlled form components
- Form validation
- Password strength checking
- Role selection
- Form submission handling
- Form clearing functionality

## Implementation Details

### Form Fields
- First Name (required)
- Last Name
- Email (required, must be valid email format)
- Password (required, minimum 8 characters)
- Role (required, must be either 'individual' or 'business')

### Key Components
1. **Form Validation**
   - Email validation using utility function
   - Password length verification
   - Required fields checking
   - Role selection validation

2. **Password Error Handling**
   - Shows error message when password is too short
   - Uses 'isTouched' state to prevent premature error display

3. **Form Submission**
   - Prevents default form submission
   - Clears form after successful submission
   - Shows success message

## Technologies Used
- React
- JavaScript
- HTML
- CSS

## Learning Outcomes
- Implementing controlled components in React
- Form validation techniques
- State management in React
- Event handling in forms
- Conditional rendering