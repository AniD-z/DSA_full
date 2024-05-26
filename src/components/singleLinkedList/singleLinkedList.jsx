import React, { useState, useEffect } from "react";
import SLinkedList from "./singleLinkedListClass";
// import Tree from "react-tree-graph";
import Tree from "react-d3-tree";
import Button from '@mui/material/Button';

import "./llstyle.css";
import AlertDialog from "@mui/material/Dialog";
import Information from "../material-ui-components/information";
import codeData from "../../data";
import StartInformation from "../startInformation/startInformation";
import Confetti from 'react-confetti'

const SingleLinkedList = () => {
  const [sll, setSll] = useState();
  const [done, setDonel] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);
  const [isStart, setIsStart] = useState(false);

  const [, setRender] = useState({});
  const forceRerender = () => setRender({});

  const [insertBack, setInsertBack] = useState("");
  const [insertFront, setInsertFront] = useState("");
  const [insertAfterValue, setInsertAfterValue] = useState("");
  const [insertAfterIdx, setInsertAfterIdx] = useState("");
  const [deleteIndex, setDeleteIndex] = useState("");

  useEffect(() => {
    // Initialize the linked list with elements 7, 3, 5, 6, 2, 8, 1
    const initialValues = [7, 3, 5, 6, 2, 8, 1];
    const temp = new SLinkedList(initialValues[0]);
    initialValues.slice(1).forEach(value => temp.insertBack(value));
    setSll(temp);
    setIsStart(true);
    setData(refactor(temp.display()));
    setOpen(false); // Close the initial dialog
  }, []);

  const handleClose = () => {
    StartInformation();
    setOpen(false);
  };

  const insertBackChangeHandler = (e) => {
    let data = e.target.value;
    setInsertBack(data);
  };

  const insertBackHandler = (e) => {
    if (e) e.preventDefault();
    sll.insertBack(insertBack);
    updateData();
    forceRerender();
  };

  const insertFrontChangeHandler = (e) => {
    let data = e.target.value;
    setInsertFront(data);
  };

  const insertFrontHandler = (e) => {
    e.preventDefault();
    sll.insertFront(insertFront);
    updateData();
  };

  const insertAfterValueChangeHandler = (e) => {
    let data = e.target.value;
    setInsertAfterValue(data);
  };

  const insertAfterIndexChangeHandler = (e) => {
    let data = e.target.value;
    setInsertAfterIdx(data);
  };

  const insertAfterHandler = (e) => {
    e.preventDefault();
    sll.insertAt(insertAfterIdx, insertAfterValue);
    updateData();
  };

  const deleteIndexChangeHandler = (e) => {
    let data = e.target.value;
    setDeleteIndex(data);
  };

  const deleteIndexHandler = (e) => {
    try {
      e.preventDefault();
      sll.delete(parseInt(deleteIndex));
      updateData();
    } catch (e) {
      alert("An Error Occured, please perform another operation");
    }
  };

  class rNode {
    constructor(data) {
      this.name = data;
      this.children = [];
    }
  }

  const refactor = (tree) => {
    if (tree) {
      let t = new rNode(tree.name);
      t.children.push(refactor(tree.next));
      return t;
    } else {
      return new rNode("Tail");
    }
  };

  const updateData = () => {
    setInsertBack("");
    setInsertFront("");
    setInsertAfterValue("");
    setInsertAfterIdx("");
    setDeleteIndex("");
    setData(refactor(sll.display()));
  };

  const reverse = () => {
    // sll.reverse(null, sll.display());
    // updateData();

    let bool = sll.checkAdjacentSumPrimes(sll.display());
    if (bool) {
      alert("You have successfully completed the level. Congrats!");
      setDonel(true);
    } else {
      alert("Sum of Adjacent Elements are not Prime . Lenghth of Linked List must be greater than or equal to 7");
    }

  };

  const clearHandler = () => {
    setData(null);
    setIsStart(false);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      {done && <Confetti />}
      <div style={{ position: "absolute", left: "5rem", bottom: "37rem" }}>
        <Information codeData={codeData.sll} />
      </div>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Single Linked List"
        content="You will see an empty screen, from the below controller first you have to create one Linked List, by clicking create, after you create Linked List, all options in controller will be enabled, you can insert at back, insert front, insert after the given index, delete at index, clear data and reverse all data of linked list."
      />

      {sll && data && (
        <Tree
          data={data}
          svgClassName="style"
          zoomable="true"
          enableLegacyTransitions="true"
          transitionDuration="1000"
          translate={{ x: "282", y: "302" }}
          zoom="1"
          orientation="horizontal"
          nodeSize={{ x: "100", y: "20" }}
          rootNodeClassName="node__root"
          leafNodeClassName="node__leaf"
          branchNodeClassName="node__branch"
        />
      )}

      <div className="controlls-container">
        <div className="row justify-content-center">
          <div className="row justify-content-md-center">
            {isStart && (
              <div className="col-3">
                <form onSubmit={insertBackHandler}>
                  <div className="align-items-center controlHandler">
                    <div className="col-6">
                      <input
                        placeholder="value"
                        className="pl-2"
                        onChange={insertBackChangeHandler}
                        value={insertBack}
                      />
                    </div>
                    <div className="col-6">
                      <Button
                        className="Button"
                        variant="outlined"
                        type="submit"
                      >
                        Insert Back
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {isStart && (
              <div className="col-3">
                <form onSubmit={insertFrontHandler}>
                  <div className="align-items-center controlHandler">
                    <div className="col-6">
                      <input
                        placeholder="value"
                        onChange={insertFrontChangeHandler}
                        value={insertFront}
                        className="pl-2"
                      ></input>
                    </div>
                    <div className="col-6">
                      <Button
                        className="Button"
                        variant="outlined"
                        type="submit"
                      >
                        Insert Front
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {isStart && (
              <div className=" col-4">
                <form onSubmit={insertAfterHandler}>
                  <div className="align-items-center controlHandler">
                    <div className=" col-4 mr-4">
                      <input
                        onChange={insertAfterIndexChangeHandler}
                        value={insertAfterIdx}
                        className="pl-2"
                        placeholder="Index"
                      ></input>
                    </div>
                    <div className="col-4 mr-4">
                      <input
                        onChange={insertAfterValueChangeHandler}
                        value={insertAfterValue}
                        className="pl-2"
                        placeholder="Value"
                      ></input>
                    </div>
                    <div className="col-4">
                      <Button
                        className="Button"
                        variant="outlined"
                        type="submit"
                      >
                        Insert At
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {isStart && (
              <div className="mt-3 col-3">
                <form onSubmit={deleteIndexHandler}>
                  <div className="align-items-center controlHandler">
                    <div className="col-6">
                      <input
                        onChange={deleteIndexChangeHandler}
                        value={deleteIndex}
                        className="pl-2"
                        placeholder="Value"
                      ></input>
                    </div>
                    <div className="col-1">
                      <Button
                        className="Button"
                        variant="outlined"
                        type="submit"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}


            {isStart && (
              <div className="text-center  mt-3 col-1">
                <Button onClick={reverse} className="Button" variant="outlined">
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default SingleLinkedList;
