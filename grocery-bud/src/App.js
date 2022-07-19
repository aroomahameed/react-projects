import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Enter Some value");
    } else if (name && isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEdit(false);
      showAlert(true, "success", "value changed");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "Item successfully added");
    }
  };
  const showAlert = (show = "false", type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "list has been cleared");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item has been deleted");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificitem = list.find((item) => item.id === id);
    setIsEdit(true);
    setEditID(id);
    setName(specificitem.title);
  };
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className='submit-btn' type='submit'>
            {isEdit ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
