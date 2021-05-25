// @packages
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// @own
import Row from "./Row";

function Table({ data, removeData, setDataToEdit }) {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Constellation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((el) => (
              <Row
                element={el}
                key={el.id}
                removeData={removeData}
                setDataToEdit={setDataToEdit}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
