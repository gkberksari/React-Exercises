# Previous Day Tracker

## Project Description
This exercise demonstrates the implementation of a custom hook (`usePrevious`) to track previous values in React. The application shows the current workday and its previous workday, utilizing React's useRef and useEffect hooks.

## Features
- Custom hook implementation
- Day tracking functionality
- Previous value retention
- Interactive day cycling button
- Conditional rendering of previous day

## Implementation Details

### Key Components

#### Main App Component
- Manages current day state
- Implements day cycling logic
- Displays current and previous days

#### usePrevious Custom Hook
- Uses useRef for value persistence
- Implements useEffect for value updates
- Returns previous value of tracked state

### State Management
```javascript
const [day, setDay] = useState("Monday");
const prevDay = usePrevious(day);

Day Cycling Logic

Monday → Tuesday
Tuesday → Wednesday
Wednesday → Thursday
Thursday → Friday
Friday → Monday

Technical Implementation

React Hooks (useState, useEffect, useRef)
Custom Hook Development
Conditional Rendering
State Management
Reference Persistence

Learning Outcomes

Custom Hook Creation
useRef Hook Usage
useEffect Dependencies
State Management Patterns
Previous Value Tracking