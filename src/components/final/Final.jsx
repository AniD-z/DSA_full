import React, { useState, useEffect } from "react";
import SLinkedList from "./singleLinkedListClass";
// import Tree from "react-tree-graph";
import Tree from "react-d3-tree";
import Button from '@mui/material/Button';
import "./stack.css";
import "./llstyle.css";
import AlertDialog from "@mui/material/Dialog";
import Information from "../material-ui-components/information";
import codeData from "../../data";
import StartInformation from "../startInformation/startInformation";
import Confetti from 'react-confetti'
import Warning from "../errorMessage/Warning";

const Final = () => {
  const [stacks, setStacks] = useState([[1, 2, 7, 9, 16, 0, 20, -1], []]);
  const [sll, setSll] = useState();
  const [done, setDonel] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);
  const [isStart, setIsStart] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [warningOpen, setWarningOpen] = useState(false);

  const [, setRender] = useState({});
  const forceRerender = () => setRender({});

  const [insertBack, setInsertBack] = useState("");
  const [insertFront, setInsertFront] = useState("");
  const [insertAfterValue, setInsertAfterValue] = useState("");
  const [insertAfterIdx, setInsertAfterIdx] = useState("");
  const [deleteIndex, setDeleteIndex] = useState("");

  useEffect(() => {
    // Initialize the linked list with elements 7, 3, 5, 6, 2, 8, 1
    const initialValues = [2];
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

  const handleWarning = () => {
    setWarningOpen(!warningOpen);
    setErrorMessage("");
  };

  const highlightAction = (index, delay, color, st) => {
    // console.log("index" , index)
    const bars = document.getElementsByClassName(`element${st}`);
    setTimeout(() => {
      bars[index].style.backgroundColor = color;
    }, delay);
    setTimeout(() => {
      bars[index].style.backgroundColor = "rgb(63, 81, 181)";
    }, 150 * delay);
  };

  const pushElement = (stackIndex, element) => {
    if (isNaN(element) || element === "") {
      setErrorMessage("Stack is Empty");
      setWarningOpen(!warningOpen);
    } else if (parseInt(element) > 1000) {
      setErrorMessage("Please Enter Smaller Value");
      setWarningOpen(!warningOpen);
    } else if (stacks[stackIndex].length < 8) {
      setStacks(prevStacks => {
        const newStacks = [...prevStacks];
        newStacks[stackIndex] = [...prevStacks[stackIndex], parseInt(element)];
        return newStacks;
      });
      // highlightAction(stacks[stackIndex].length, 2, "#32CD30", stackIndex);
    } else {
      setErrorMessage("Stack is Full");
      setWarningOpen(!warningOpen);
    }
  };

  const popElement = (stackIndex) => {
    if (stacks[stackIndex].length > 0) {
      setStacks(prevStacks => {
        const newStacks = [...prevStacks];
        newStacks[stackIndex] = [...prevStacks[stackIndex].slice(0, -1)];
        return newStacks;
      });
      // highlightAction(stacks[stackIndex].length - 1, 1.5, "red", stackIndex);
    } else {
      setErrorMessage("Stack is Empty");
      setWarningOpen(!warningOpen);
    }
  };

  const push = (st1, st2) => {
    const elementToMove = stacks[st1][stacks[st1].length - 1];
    popElement(st1);
    pushElement(st2, elementToMove);
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

  const handleSubmit = () => {
    // sll.reverse(null, sll.display());
    // updateData();

    let bool = sll.checkAdjacentSumPerfectSquares(sll.display());
    if (bool) {
      alert("You have successfully completed the level. Congrats!");
      setDonel(true);
    } else {
      alert("Sum of Adjacent Elements are not all perfect Squares . All the elements of the stacks must be used.");
    }

  };

  function pushToList(st1){
    const elementToMove = stacks[st1][stacks[st1].length - 1];
    if(isNaN(elementToMove)){
      alert("Stack Empty")
      return;
    }
    popElement(st1);
    sll.insertBack(elementToMove);
    updateData();
    

  }

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
        <Information codeData={codeData.final} />
      </div>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Single Linked List"
        content="You will see an empty screen, from the below controller first you have to create one Linked List, by clicking create, after you create Linked List, all options in controller will be enabled, you can insert at back, insert front, insert after the given index, delete at index, clear data and reverse all data of linked list."
      />
      <Warning
        open={warningOpen}
        handleClose={handleWarning}
        title="Warning"
        content={errorMessage}
      />

      {stacks.map((stack, stackIndex) => (
        <div style={{ marginLeft: "2rem", marginTop: "-3%", minWidth: "14rem" }} className="stack d-flex flex-column-reverse justify-content-start align-items-center" key={stackIndex}>
          {stack.map((value, idx) => (
            <div className="element-box" key={idx}>
              <p className="m-0">{idx === stack.length - 1 ? "Top" : ""}</p>
              <div className={`element${stackIndex} d-flex align-items-center justify-content-center`}>
                <p className="m-0">{value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}

      {sll && data && (
        <Tree
          data={data}
          svgClassName="style"
          zoomable="true"
          enableLegacyTransitions="true"
          transitionDuration="1000"
          translate={{ x: "120", y: "302" }}
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
              <div className="col-sm-12 controlHandler">
                <Button className="Button" variant="outlined" onClick={() => popElement(0)}>Pop Stack 1</Button>
                <Button className="Button" variant="outlined" onClick={() => push(0, 1)}>Push Stack 1 to Stack 2</Button>
                <Button className="Button" variant="outlined" onClick={() => pushToList(0)}>Push Stack 1 to List</Button>
                <Button className="Button" variant="outlined" onClick={() => push(1, 0)}>Push Stack 2 to Stack 1</Button>
                <Button className="Button" variant="outlined" onClick={() => pushToList(1)}>Push Stack 2 to List</Button>
                <Button onClick={handleSubmit} className="hello" variant="outlined">
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


export default Final;
