import React, { forwardRef, useId } from "react";
import "./SelectField.css";
const SelectField = ({ options, label, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="">
      {label && <label htmlFor={id} className=""></label>}
      <select name="" id={id} ref={ref} {...props} className={``}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default forwardRef(SelectField);
