# Random User Data Fetcher

## Project Description
This exercise demonstrates fetching and displaying random user data from the RandomUser.me API using React. The application shows a user's name and profile picture, implementing data fetching, state management, and conditional rendering.

## Features
- API data fetching with fetch API
- Loading state handling
- Display of user information
 - User's first name
 - User's profile picture
- useEffect hook for initial data load
- Conditional rendering based on data availability

## Implementation Details

### API Integration
- Uses the RandomUser.me API
- Fetches a single random user
- Handles JSON response

### Key Components
1. **State Management**
  - Uses useState hook for user data storage
  - Initial empty array state
  - Updates state with API response

2. **Data Fetching**
  - Implemented in fetchData function
  - Called on component mount via useEffect
  - Proper error and loading state management

3. **Conditional Rendering**
  - Shows "Data pending..." while loading
  - Displays user data once available

## Code Highlights
```javascript
React.useEffect(() => {
   fetchData();
}, []);

## Technical Implementation
- React Hooks (useState, useEffect)
- Fetch API
- Async data handling
- Object manipulation
- Conditional rendering

## Learning Outcomes
- API integration in React
- State management with hooks
- Effect handling
- Conditional rendering
- Async data fetching patterns