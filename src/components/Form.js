import React, { useState, useEffect } from "react";

const Form = ({ setCharacterName }) => {
  const initialForm = {
    name: "",
    id: null,
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      alert("There is no data");
      return;
    }
    else {
      setCharacterName(form.name)
    }
  };
  const handleReset = (e) => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default Form;
