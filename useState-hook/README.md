# Gift Card Application Exercise

## Project Description
This exercise demonstrates a simple gift card management system using React state. The application shows a customer's gift card details and allows them to spend their gift card, which updates the display information accordingly.

## Features
- Display customer information (first name, last name)
- Show gift card status and instructions
- Interactive "Spend Gift Card" button
- Dynamic content update after gift card usage
- Conditional rendering of the spend button

## Implementation Details

### State Management
The application uses the `useState` hook to manage gift card information including:
- Customer name (firstName, lastName)
- Gift card text
- Validity status
- Usage instructions

### Key Components
1. **Gift Card Display**
  - Customer name display
  - Current gift card status
  - Usage instructions

2. **State Updates**
  - Uses the prevState pattern for safe state updates
  - Maintains immutability using spread operator
  - Updates specific fields while preserving others

3. **Conditional Rendering**
  - Button only appears when gift card is valid
  - Updated instructions after gift card use

## Code Example
```javascript
const [giftCard, setGiftCard] = useState({
   firstName: "Jennifer",
   lastName: "Smith",
   text: "Free dinner for 4 guests",
   valid: true,
   instructions: "To use your coupon, click the button below."
});