# Theme Switcher Exercise

## Project Description
This exercise demonstrates the implementation of a light/dark theme switcher using React Context. The application includes a switch component that allows users to toggle between light and dark themes, affecting the entire application's appearance.

## Features
- Theme context implementation
- Light/dark theme toggle functionality
- Global theme state management
- Custom hook for theme access

## Implementation Details

### Key Components

1. **ThemeContext.js**
   - Creates theme context
   - Implements ThemeProvider component
   - Provides useTheme custom hook
   - Manages theme state and toggle functionality

2. **Switch Component**
   - Toggle switch UI element
   - Integrates with theme context
   - Triggers theme changes

### Context Features
- Theme state management (light/dark)
- Theme toggle functionality
- Global theme accessibility

## Technical Implementation

### Theme Provider
```javascript
<ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
</ThemeContext.Provider>