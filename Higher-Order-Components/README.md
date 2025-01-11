# Mouse Position Tracker

This React application demonstrates the implementation of the Render Props pattern by tracking mouse position and displaying it in multiple formats simultaneously.

## Project Overview

The application tracks the mouse position on the screen and displays it in two different ways:
1. As a panel with X and Y coordinates
2. As a point representation (x, y)

## Key Features

- Real-time mouse position tracking
- Multiple display formats using the same data
- Implementation of Render Props pattern
- Clean and reusable component structure

## Components

### MousePosition
The core component that handles mouse position tracking:
- Uses `useState` to manage mouse coordinates
- Implements `useEffect` for event handling
- Utilizes render props pattern for flexible rendering

```jsx
const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  // ... event handling logic
  return render(mousePosition);
};
```

### PanelMouseLogger
Displays mouse position in a panel format:
- No props required
- Uses MousePosition's render prop
- Shows X and Y coordinates separately

### PointMouseLogger
Shows mouse position as a coordinate point:
- No props required
- Uses MousePosition's render prop
- Displays coordinates in (x, y) format

## Technical Implementation

### Render Props Pattern
The project showcases render props pattern benefits:
- Separation of concerns
- Component reusability
- Flexible UI rendering
- Shared state management

### Event Handling
- Uses `window.addEventListener` for mouse movement
- Proper cleanup with `removeEventListener`
- Real-time position updates

## Installation and Setup

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

## Usage

The application will display two different views of the mouse position:
```jsx
function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}
```

## Development

### Adding New Display Components
To create a new display format:

1. Create a new component
2. Use the MousePosition component
3. Implement the render prop to display data in your desired format

Example:
```jsx
const CustomLogger = () => {
  return (
    <MousePosition
      render={mousePosition => (
        // Your custom display logic here
      )}
    />
  );
};
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request