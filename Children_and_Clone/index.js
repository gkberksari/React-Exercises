import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      checked: child.props.value === selected,
      onChange: onChange
    });
  });

  return <div className="radio-group">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="radio-option">
      <input
        id={value}
        type="radio"
        name="radio-option"
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};