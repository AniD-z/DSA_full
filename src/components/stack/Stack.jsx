import React, { useEffect, useState } from "react";
import AlertDialog from "@mui/material/Dialog";
import Button from '@mui/material/Button';
import Information from "../material-ui-components/information";
import "./stack.css";
import Warning from "../errorMessage/Warning";
import codeData from "../../data";
import StartInformation from "../startInformation/startInformation";

const InitialElements = 5;
const maxElements = 10;

const Stack = () => {
  const [stacks, setStacks] = useState([[5,4,3,2,1] , [] , []]); 
  const [open, setOpen] = useState(false);
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

  const highlightAction = (index, delay, color , st) => {
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
      highlightAction(stacks[stackIndex].length, 2, "#32CD30" , stackIndex);
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
      highlightAction(stacks[stackIndex].length - 1, 1.5, "red" , stackIndex);
    } else {
      setErrorMessage("Stack is Empty");
      setWarningOpen(!warningOpen);
    }
  };

  const push = (st1, st2) => {
    const elementToMove = stacks[st1][stacks[st1].length - 1];
    if(stacks[st2].length !== 0){
      let secondTopElement = stacks[st2][stacks[st2].length - 1];
      if(elementToMove > secondTopElement){
        setErrorMessage("Cannot Move Larger Element");
        setWarningOpen(!warningOpen);
        return;
      }
    }
    popElement(st1);
    pushElement(st2, elementToMove);
  };
  return (
    <>
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
          <div style={{marginLeft : "2rem"}} className="stack d-flex flex-column-reverse justify-content-start align-items-center" key={stackIndex}>
            {stack.map((value, idx) => (
              <div  className="element-box" key={idx}>
                <p className="m-0">{idx === stack.length - 1 ? "Top" : ""}</p>
                <div className={`element${stackIndex} d-flex align-items-center justify-content-center`}>
                  <p className="m-0">{value}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <hr />
        <div className="controlls-container">
          <div className="col-sm-12 controlHandler">
            <Button className="Button" variant="outlined" onClick={() => push(0 , 1)}>Push Stack 1 to Stack 2</Button>
            <Button className="Button" variant="outlined" onClick={() => push(0 , 2)}>Push Stack 1 to Stack 3</Button>
            <Button className="Button" variant="outlined" onClick={() => push(1 , 0 )}>Push Stack 2 to Stack 1</Button>
            <Button className="Button" variant="outlined" onClick={() => push(1 , 2)}>Push Stack 2 to Stack 3</Button>
            <Button className="Button" variant="outlined" onClick={() => push(1 , 2)}>Push Stack 3 to Stack 1</Button>
            <Button className="Button" variant="outlined" onClick={() => push(1 , 2)}>Push Stack 3 to Stack 2</Button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Stack;
