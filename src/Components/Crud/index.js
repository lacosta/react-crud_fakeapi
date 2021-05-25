// @packages
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// @own
import Form from "../Form";
import Table from "../Table";
import { initialDB } from "./constants";

function Crud() {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = uuidv4();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };

  const removeData = (id) => {
    let isDelete = window.confirm(
      `Are you sure you want to delete the entry with the id ${id}?`
    );

    if(isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <Fragment>
      <article className="grid1-2">
        <Form
          createData={createData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          updateData={updateData}
        />
        <Table
          data={db}
          removeData={removeData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </Fragment>
  );
}

export default Crud;
