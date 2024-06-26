import React, { useEffect, useState } from "react";
import AlertDialog from "@mui/material/Dialog";
import Button from '@mui/material/Button';
import Information from "../material-ui-components/information";
import "./stack.css";
import Warning from "../errorMessage/Warning";
import codeData from "../../data";
import StartInformation from "../startInformation/startInformation";
import { positions } from "@mui/system";

import Confetti from 'react-confetti'

const InitialElements = 5;
const maxElements = 10;

const Stack = () => {
  const [stacks, setStacks] = useState([[4, 3, 2, 1], [], []]);
  const [done , setDone] = useState(false)
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(16);
  const [errorMessage, setErrorMessage] = useState("");
  const [warningOpen, setWarningOpen] = useState(false);

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
    } else if (stacks[stackIndex].length < maxElements) {
      setStacks(prevStacks => {
        const newStacks = [...prevStacks];
        newStacks[stackIndex] = [...prevStacks[stackIndex], parseInt(element)];
        return newStacks;
      });
      highlightAction(stacks[stackIndex].length, 2, "#32CD30", stackIndex);
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
      highlightAction(stacks[stackIndex].length - 1, 1.5, "red", stackIndex);
    } else {
      setErrorMessage("Stack is Empty");
      setWarningOpen(!warningOpen);
    }
  };

  const push = (st1, st2) => {
    console.log(stacks)
    const elementToMove = stacks[st1][stacks[st1].length - 1];
    if (stacks[st2].length !== 0) {
      let secondTopElement = stacks[st2][stacks[st2].length - 1];
      if (elementToMove > secondTopElement) {
        setErrorMessage("Cannot Move Larger Element");
        setWarningOpen(!warningOpen);
        return;
      }
    }
    popElement(st1);
    pushElement(st2, elementToMove);
    setCount(count - 1);
    if(count === 0){
      alert("You have run out of moves.")
      window.location.reload()
    }
  };

  function isArray4321(arr) {
    const targetArray = [4, 3, 2, 1];
    return arr.length === targetArray.length && arr.every((value, index) => value === targetArray[index]);
  }
  

  const handleSubmit = () => {
    if(isArray4321(stacks[2])){
      setDone(true)
      alert("You have successfully completed the level. Congrats!")
    }
    else{
      alert("You have not moved all elements to Stack 3")
    
    }
  }
  return (
    <>
      {done && <Confetti />}
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Stack"
        content="Three stacks have been created. You can push new elements onto each stack, pop elements from each stack, and check if each stack is full or empty."
      />
      <Warning
        open={warningOpen}
        handleClose={handleWarning}
        title="Warning"
        content={errorMessage}
      />

      <div className="container mx-auto stack-container d-flex justify-content-center">
        {stacks.map((stack, stackIndex) => (
          <div style={{ marginLeft: "2rem", marginTop: "-3%" }} className="stack d-flex flex-column-reverse justify-content-start align-items-center" key={stackIndex}>
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
        <h3 style={{ marginLeft: "2%" }}> Moves Left : {count}</h3>
        <hr />
        <div className="controlls-container">
          <div className="col-sm-12 controlHandler">
            <Button className="Button" variant="outlined" onClick={() => push(0, 1)}>Push Stack 1 to Stack 2</Button>
            <Button className="Button" variant="outlined" onClick={() => push(0, 2)}>Push Stack 1 to Stack 3</Button>
            <Button className="Button" variant="outlined" onClick={() => push(1, 0)}>Push Stack 2 to Stack 1</Button>
            <Button className="Button" variant="outlined" onClick={() => push(1, 2)}>Push Stack 2 to Stack 3</Button>
            <Button className="Button" variant="outlined" onClick={() => push(2, 0)}>Push Stack 3 to Stack 1</Button>
            <Button className="Button" variant="outlined" onClick={() => push(2, 1)}>Push Stack 3 to Stack 2</Button>
            <Button className="hello" variant="outlined" onClick={handleSubmit}>SUBMIT</Button>
          </div>
          <div style={{position : "absolute" , left:"5rem" , bottom :"37rem"}}>
            <Information codeData={codeData.stack} />

          </div>

        </div>
      </div>
    </>
  );
};

export default Stack;
