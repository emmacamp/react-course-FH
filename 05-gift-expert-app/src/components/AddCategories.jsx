import { useState } from "react";

import PropTypes from "prop-types";

export const AddCategories = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onSubmit = (e) => {
    console.log("Hi from onSubmit");
    e.preventDefault();
    const input = inputValue.trim();
    if (input.length <= 1) return;
    onNewCategory(input);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      {/* <h3>AddCategories</h3> */}
      <button type="submit">Seach</button>
      <input
        type="text"
        placeholder="Buscar Gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategories.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
