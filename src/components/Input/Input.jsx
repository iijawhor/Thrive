import React, { useId } from "react";
import "./Input.css";
const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    formContext,
    value,
    onChange,
    ...props
  },
  ref
) {
  const id = useId();
  const inputId = formContext ? `${formContext}-${id}` : id;
  // const inputName = formContext
  //   ? `${formContext}-${props.name || ""}`
  //   : props.name;
  return (
    <div className="inputContainer">
      {label && (
        <label htmlFor={id} className={`inputLabel ${className}`}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className} inputField  `}
        ref={ref}
        id={inputId}
        name={inputId}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
});

export default Input;
