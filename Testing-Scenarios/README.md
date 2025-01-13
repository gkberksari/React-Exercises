# Feedback Form Testing Documentation

## Overview
This documentation covers the testing implementation for a feedback form component using React Testing Library and Jest. The tests verify the form's submission behavior under different scoring scenarios.

## Component Under Test
`FeedbackForm` is a React component that:
- Allows users to provide a numerical score
- Collects additional comments when necessary
- Implements different validation rules based on the score

## Test Cases

### 1. Low Score Submission (Score < 5)
Tests that users must provide additional feedback when giving a low score.

```javascript
test("User is able to submit the form if the score is lower than 5 and additional feedback is provided")
```

**Test Steps:**
- Sets a score of 3
- Provides a comment about pizza crust
- Submits the form
- Verifies the submission data

### 2. High Score Submission (Score > 5)
Tests that users can submit without additional feedback for high scores.

```javascript
test("User is able to submit the form if the score is higher than 5, without additional feedback")
```

**Test Steps:**
- Sets a score of 9
- Submits the form without comments
- Verifies the submission data

## Testing Utilities Used

### React Testing Library
- `render`: Renders components for testing
- `screen`: Provides queries to find elements
- `fireEvent`: Simulates user interactions

### Jest
- `jest.fn()`: Creates mock functions
- `expect`: Assertion functionality
- `describe`: Test grouping

## Test Implementation Details

### Element Selection
```javascript
const rangeInput = screen.getByLabelText(/Score:/);
const textArea = screen.getByLabelText(/Comments:/);
const submitButton = screen.getByRole("button");
```

### Event Simulation
```javascript
fireEvent.change(rangeInput, { target: { value: score } });
fireEvent.change(textArea, { target: { value: comment } });
fireEvent.click(submitButton);
```

### Assertions
```javascript
expect(handleSubmit).toHaveBeenCalledWith({
  score,
  comment,
});
```

## Running the Tests

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

For watch mode:
```bash
npm test -- --watch
```

## Best Practices Demonstrated

1. **Accessibility Testing**
   - Using `getByLabelText` ensures proper label associations
   - Using `getByRole` verifies semantic HTML

2. **User-Centric Testing**
   - Tests simulate real user interactions
   - Validates actual user workflows

3. **Isolated Testing**
   - Each test case is independent
   - Mock functions used for form submission

4. **Clear Test Structure**
   - Arrange-Act-Assert pattern
   - Descriptive test names

## Common Issues and Solutions

1. **Element Not Found**
   - Check if labels match exactly
   - Verify element roles are correct
   - Use screen.debug() to inspect DOM

2. **Event Handling**
   - Ensure fireEvent targets correct element
   - Verify event object structure

## Contributing

When adding new tests:
1. Follow existing test structure
2. Use descriptive test names
3. Include comments for complex scenarios
4. Update documentation as needed

## Related Documentation
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)