import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const InlineEditor = ({
  placeholder = "",
  defaultValue = "",
  className = "",
  onChange = () => { },
}) => {
  const inputRef = useRef(null);
  const spanRef = useRef(null);
  const [editedValue, setEditedValue] = useState(defaultValue);
  const [inputWidth, setInputWidth] = useState(100);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setEditedValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    const spanElement = spanRef.current;
    if (spanElement) {
      const newWidth = Math.max(spanElement.offsetWidth + 10, 100); // +10px para padding
      setInputWidth(newWidth);
    }
  }, [editedValue]);

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        className={className}
        placeholder={placeholder}
        value={editedValue}
        ref={inputRef}
        style={{ maxWidth: `${inputWidth}px` }}
      />
      <span
        ref={spanRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "pre",
          fontSize: "inherit",
          fontFamily: "inherit",
          padding: "0",
          margin: "0",
        }}
      >
        {editedValue || placeholder}
      </span>
    </>
  );
};

InlineEditor.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
