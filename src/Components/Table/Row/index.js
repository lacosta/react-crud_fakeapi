// @packages
import React from "react";
import PropTypes from "prop-types";

function Row({ element, removeData, setDataToEdit }) {
  const { name, constellation, id } = element;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(element)}>
          Edit
        </button>
        <button onClick={() => removeData(id)}>
          Remove
        </button>
      </td>
    </tr>
  );
}

Row.propTypes = {
  element: PropTypes.object.isRequired,
  removeData: PropTypes.func,
  setDataToEdit: PropTypes.func,
};

export default Row;
