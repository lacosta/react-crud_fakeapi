// @packages
import React, { Fragment, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

// @app
import { helpHttp } from "helpers/helpHttp";

// @own
import Form from "components/Form";
import Loader from "components/Loader";
import Message from "components/Message";
import Table from "components/Table";

function Crud() {
  const [dataToEdit, setDataToEdit] = useState(null);
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const api = helpHttp();
  const url = "http://localhost:5000/saints";

  const createData = (data) => {
    data.id = uuidv4();
    let options = {
      body: data,
      headers: { "content-type": "application/json" }
    }

    api.post(url, options)
      .then(res => {
        if(!res.err) {
          setDb([...db, res]);
        } else {
          setError(res);
        }
      });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" }
    };

    api.put(endpoint, options)
      .then(res => {
        if(!res.err) {
          let newData = db.map(el => el.id === data.id ? data : el);
          setDb(newData);
        } else {
          setError(res);
        }
      });
  };

  const removeData = (id) => {
    let endpoint = `${url}/${id}`;
    let options = { headers: { "content-type": "application/json" }};
    let isDelete = window.confirm(
      `Are you sure you want to delete the entry with the id ${id}?`
    );

    if(isDelete) {
      api.del(endpoint, options)
        .then(res => {
          if(!res.err) {
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
          } else {
            setError(res);
          }
        })
    } else {
      return;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    api.get(url)
      .then(res => {
        if(!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }

        setIsLoading(false);
      });
  }, [url]);

  return (
    <Fragment>
      <article className="grid1-2">
        <Form
          createData={createData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          updateData={updateData}
        />
        {isLoading && <Loader />}
        {error && (
          <Message
            bgColor="error"
            message={`Error ${error.status}: ${error.statusText}`}
          />
        )}
        {db && (
          <Table
            data={db}
            removeData={removeData}
            setDataToEdit={setDataToEdit}
          />
        )}
      </article>
    </Fragment>
  );
}

export default Crud;
