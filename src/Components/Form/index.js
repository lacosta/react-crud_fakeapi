// @packages
import React, { useState, useEffect } from "react";

const initialState = {
  constellation: "",
  id: null,
  name: "",
};

function Form({
  createData,
  dataToEdit,
  setDataToEdit,
  updateData,
}) {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (ev) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleReset = () => {
    setForm(initialState);
    setDataToEdit(null);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!form.name || !form.constellation) {
      alert("incomplete data");
      return;
    }

    if(form.id === null){
      createData(form);
    } else {
      updateData(form);
    };

    handleReset();
  };

  useEffect(() => {
    if(dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialState)
    };
  }, [dataToEdit]);

  return (
    <div>
      <h3>{dataToEdit ? 'Edit': 'Add'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          name="name"
          onChange={handleOnChange}
          placeholder="Name"
          type="text"
          value={form.name}
        />
        <input
          autoComplete="off"
          name="constellation"
          onChange={handleOnChange}
          placeholder="Constellation"
          type="text"
          value={form.constellation}
        />
        <input type="submit" value="Send" />
        <input onClick={handleReset} type="reset" value="Reset" />
      </form>
    </div>
  );
}

export default Form;
