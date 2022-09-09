import React, { useState, useEffect } from "react";
import "./To-Do.css";

// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());// yanha call karkey uppar ussey return kra lenge
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // add the items fucnction
  const addItem = () => {
          // 👇jab list me kuchh nhii hoga
    if (!inputdata) {
      alert("plz fill the data");
    }//else{...items, Inputdata}...items means jo data hai usse store rakho, Inputdata means new data entr kro
    else if (inputdata && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );

      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),//hame diff elemnt k liye diff id mill jayega
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputData(""); // jo bhi data change karenge yanha reflect ho jayega
    }
  };

  //edit the items
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // how to delete items section
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;  //jiska bhii index match nhi kiya wo delete ho jayega
    });
    setItems(updatedItems);
  };

  // remove all the elements
  const removeAll = () => {
    setItems([]); // enpty arr means[] pura ka pura arr khali ho jayega dlt ho jayega 
  };

  // adding localStorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);  // local storage me data set ho jayega, fir usse uppar get karenge

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/to-do_img.jpg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputdata} //jo bhii likhtey hai yanha print hoga
              onChange={(event) => setInputData(event.target.value)}// onchange kii help se yanha pe store /                                                     //kartey jayenge
            />                                                      
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          {/* show our items  */}
          <div className="showItems">
            {items.map((curElem) => {
              return (                                        //ye hamne ek loop chla diya 
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}></i> 
                      
                  </div>
                </div>
              );
            })}
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;