import React, { useState } from "react";
import SearchInput from "../../../styles/SearchInput.module.css";
const InputSearch = ({ recievedInput }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={SearchInput.spacing}>
      <input
        className={SearchInput.inputStyle}
        type='text'
        onChange={(e) => {
          console.log(setInput(e.target.value));
        }}
        value={input}
        placeholder='Search By Year'
      />
    </div>
  );
};

export default InputSearch;
