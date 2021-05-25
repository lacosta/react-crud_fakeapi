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
          Editar
        </button>
        <button onClick={() => removeData(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

Row.propTypes = {
  constellation: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Row;
