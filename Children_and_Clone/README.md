# Radio Group Component Project

This project implements a customizable Radio Group component using React. It's designed to provide a user-friendly interface for selecting options from a list of choices, commonly used in forms and surveys.

## Features

- Fully controlled radio group component
- Customizable radio options
- Accessible form inputs with labels
- Dynamic state management
- Easy integration with existing React applications

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Component Structure

### RadioGroup Component
The main wrapper component that manages the state and behavior of radio options.

**Props:**
- `onChange`: (Function) Callback function triggered when selection changes
- `selected`: (String) Currently selected value
- `children`: (ReactNode) RadioOption components

### RadioOption Component
Individual radio button component that represents a single choice.

**Props:**
- `value`: (String) Unique identifier for the option
- `checked`: (Boolean) Whether the option is currently selected
- `onChange`: (Function) Callback function for selection changes
- `children`: (ReactNode) Label content for the option

## Usage Example

```jsx
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  
  return (
    <div>
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}
```

## Technical Implementation Details

The implementation uses several key React concepts:

1. **React.Children.map**: Used to iterate over child components safely
2. **React.cloneElement**: Allows adding additional props to child components
3. **Controlled Components**: Radio inputs are controlled through React state
4. **Event Handling**: Manages radio selection changes through callbacks

## Accessibility

The component follows accessibility best practices:
- Proper label associations with inputs using htmlFor
- Semantic HTML structure
- Keyboard navigation support
- ARIA attributes where necessary

## Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request