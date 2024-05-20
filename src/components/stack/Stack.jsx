// // import { SignalCellularConnectedNoInternet4BarTwoTone } from "@material-ui/icons";
// import React, { useEffect, useState } from "react";
// import AlertDialog from "@mui/material/Dialog";
// import Button from '@mui/material/Button';
// import Information from "../material-ui-components/information";
// import "./stack.css";
// import Warning from "../errorMessage/Warning";
// import codeData from "../../data";
// import StartInformation from "../startInformation/startInformation";

// const InitialElements = 5;
// const maxElements = 10;
// const Stack = () => {
//   // aray for holding stack elements
//   const [elements, setElements] = useState([]);
//   //   Range of elements
//   const [noElement, setNoElement] = useState(InitialElements - 1);
//   //   New Element
//   const [newElement, setNewElement] = useState();
//   const newElementFound = (event) => {
//     setNewElement(event.target.value);
//   };
//   // generate random elements
//   const generateRandomElements = (start, end) => {
//     return Math.floor(Math.random() * (end - start - 1) + start);
//   };
//   //   generate array of random elements
//   const generateRandomArray = () => {
//     const temp = [];
//     for (let i = 0; i <= noElement; i++) {
//       let temps = generateRandomElements(10, 100);
//       if (temp.indexOf(temps) === -1) temp.push(temps);
//     }
//     setElements(temp);
//     setNoElement(noElement + 1);
//   };
//   //   Call once while loading page
//   useEffect(() => {
//     generateRandomArray();
//   }, []);

//   //   Welcome
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     setOpen(false);
//   }, []);

//   const handleClose = () => {
//     StartInformation();
//     setOpen(false);
//   };

//   // Warning Message
//   const [errorMessage, setErrorMessage] = useState("");
//   const [warningOpen, setWarningOpen] = useState(false);

//   const handleWarning = () => {
//     setWarningOpen(!warningOpen);
//     setErrorMessage("");
//   };

//   const heighlightAction = (index, delay, color) => {
//     const bar = document.getElementsByClassName("element");
//     setTimeout(() => {
//       bar[index].style.backgroundColor = color;
//     }, delay);
//     setTimeout(() => {
//       bar[index].style.backgroundColor = color;
//       bar[index].style.backgroundColor = "rgb(63, 81, 181)";
//     }, 150 * delay);
//   };

//   //   Push Element
//   const pushElement = () => {
//     setTimeout(() => {
//       setElements((oldItems) => {
//         return [...oldItems, parseInt(newElement)];
//       });
//       heighlightAction(elements.length, 5, "#32CD30");
//     }, 150 * 2);
//   };

//   const handlePush = () => {
//     if (isNaN(newElement) || newElement == "") {
//       setErrorMessage("Pleasse Enter Numeric Value");
//       setWarningOpen(!warningOpen);
//       setNewElement("");
//     } else if (parseInt(newElement) > 1000) {
//       setErrorMessage("Pleasse Enter Smaller Value");
//       setWarningOpen(!warningOpen);
//       setNewElement("");
//     } else if (elements.length < maxElements) {
//       pushElement();
//       setNewElement("");
//     } else {
//       setErrorMessage("Stack is Full");
//       setWarningOpen(!warningOpen);
//       setNewElement("");
//     }
//   };

//   //   popElement
//   const popElement = () => {
//     // setTimeout(() => {
//     setTimeout(() => {
//       setElements((oldItems) => {
//         return [...oldItems.filter((ele, i) => i !== elements.length - 1)];
//       });
//     }, 200 * 2);
//     heighlightAction(elements.length - 1, 1.5, "red");
//     // }, 100 * 2);
//   };

//   const handlePop = () => {
//     if (elements.length - 1 >= 0) {
//       popElement();
//     } else {
//       setErrorMessage("Stack is Empty");
//       setWarningOpen(!warningOpen);
//       setNewElement("");
//     }
//   };

//   return (
//     <>
//       <AlertDialog
//         open={open}
//         handleClose={handleClose}
//         title="Welcome to Stack"
//         content="A Stack is already been created, from the below controllers you can push new element on top of stack, pop element from top of stack, you can see whether the stack is overflowed or is underflow."
//       />
//       {/* Erroe Message */}
//       <Warning
//         open={warningOpen}
//         handleClose={handleWarning}
//         title="Warning"
//         content={errorMessage}
//       />

//       <div className="container mx-auto stack-container d-flex justify-content-center">
//         <div className="stack d-flex flex-column-reverse justify-content-start align-items-center">
//           {elements.map((value, idx) => {
//             if (value !== null && !value.isNaN)
//               return (
//                 <>
//                   <div className="element-box">
//                     <p className="m-0">
//                       {idx === elements.length - 1 ? "Top" : ""}
//                     </p>
//                     <div
//                       className="element d-flex align-items-center justify-content-center"
//                       key={idx}
//                     >
//                       <p className="m-0">{value}</p>
//                     </div>
//                   </div>
//                 </>
//               );
//           })}
//         </div>
//         <hr />
//         {/* <Information codeData={codeData.stack} /> */}
//         <div className="controlls-container">
//           <div className="col-sm-3 controlHandler">
//             <input
//               type="text"
//               name="customInput"
//               id="customInput"
//               onChange={newElementFound}
//               value={newElement}
//               placeholder="Value"
//               className="pl-2"
//             />
//             <Button className="Button" variant="outlined" onClick={handlePush}>
//               Push
//             </Button>
//           </div>
//           <div className="col-sm-1 text-center">
//             <Button className="Button" variant="outlined" onClick={handlePop}>
//               Pop
//             </Button>
//           </div>
//           <div className="col-sm-2 text-center">
//             <Button
//               className="Button"
//               variant="outlined"
//               onClick={() => {
//                 if (elements.length === maxElements) {
//                   setErrorMessage("True");
//                   setWarningOpen(!warningOpen);
//                 } else {
//                   setErrorMessage("False");
//                   setWarningOpen(!warningOpen);
//                 }
//               }}
//             >
//               Is Full ?
//             </Button>
//           </div>
//           <div className="col-sm-2">
//             <Button
//               className="Button"
//               variant="outlined"
//               onClick={() => {
//                 if (elements.length === 0) {
//                   setErrorMessage("True");
//                   setWarningOpen(!warningOpen);
//                 } else {
//                   setErrorMessage("False");
//                   setWarningOpen(!warningOpen);
//                 }
//               }}
//             >
//               Is Empty ?
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Stack;


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
  const [stacks, setStacks] = useState([[]]); // Array to hold three stacks
  const [noElement, setNoElement] = useState(InitialElements - 1);
  const [newElement, setNewElement] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [warningOpen, setWarningOpen] = useState(false);

  const newElementFound = (event) => {
    setNewElement(event.target.value);
  };

  const generateRandomElements = (start, end) => {
    return Math.floor(Math.random() * (end - start - 1) + start);
  };

  const generateRandomArray = () => {
    const temp = [];
    for (let i = 0; i <= noElement; i++) {
      let temps = generateRandomElements(10, 100);
      if (temp.indexOf(temps) === -1) temp.push(temps);
    }
    setStacks([...stacks, temp]);
    setNoElement(noElement + 1);
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  const handleClose = () => {
    StartInformation();
    setOpen(false);
  };

  const handleWarning = () => {
    setWarningOpen(!warningOpen);
    setErrorMessage("");
  };

  const highlightAction = (index, delay, color) => {
    const bars = document.getElementsByClassName("element");
    setTimeout(() => {
      bars[index].style.backgroundColor = color;
    }, delay);
    setTimeout(() => {
      bars[index].style.backgroundColor = "rgb(63, 81, 181)";
    }, 150 * delay);
  };

  const pushElement = (stackIndex) => {
    if (isNaN(newElement) || newElement === "") {
      setErrorMessage("Please Enter Numeric Value");
      setWarningOpen(!warningOpen);
      setNewElement("");
    } else if (parseInt(newElement) > 1000) {
      setErrorMessage("Please Enter Smaller Value");
      setWarningOpen(!warningOpen);
      setNewElement("");
    } else if (stacks[stackIndex].length < maxElements) {
      setStacks(prevStacks => {
        const newStacks = [...prevStacks];
        newStacks[stackIndex] = [...prevStacks[stackIndex], parseInt(newElement)];
        return newStacks;
      });
      highlightAction(stacks[stackIndex].length, 5, "#32CD30");
      setNewElement("");
    } else {
      setErrorMessage("Stack is Full");
      setWarningOpen(!warningOpen);
      setNewElement("");
    }
  };

  const popElement = (stackIndex) => {
    if (stacks[stackIndex].length > 0) {
      setStacks(prevStacks => {
        const newStacks = [...prevStacks];
        newStacks[stackIndex] = [...prevStacks[stackIndex].slice(0, -1)];
        return newStacks;
      });
      highlightAction(stacks[stackIndex].length - 1, 1.5, "red");
    } else {
      setErrorMessage("Stack is Empty");
      setWarningOpen(!warningOpen);
      setNewElement("");
    }
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
          <div className="stack d-flex flex-column-reverse justify-content-start align-items-center" key={stackIndex}>
            {stack.map((value, idx) => (
              <div className="element-box" key={idx}>
                <p className="m-0">{idx === stack.length - 1 ? "Top" : ""}</p>
                <div className="element d-flex align-items-center justify-content-center">
                  <p className="m-0">{value}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <hr />
        <div className="controlls-container">
          <div className="col-sm-3 controlHandler">
            <input
              type="text"
              name="customInput"
              id="customInput"
              onChange={newElementFound}
              value={newElement}
              placeholder="Value"
              className="pl-2"
            />
            <Button className="Button" variant="outlined" onClick={() => pushElement(0)}>Push Stack 1</Button>
            <Button className="Button" variant="outlined" onClick={() => pushElement(1)}>Push Stack 2</Button>
            <Button className="Button" variant="outlined" onClick={() => pushElement(2)}>Push Stack 3</Button>
          </div>
          <div className="col-sm-1 text-center">
            <Button className="Button" variant="outlined" onClick={() => popElement(0)}>Pop Stack 1</Button>
            <Button className="Button" variant="outlined" onClick={() => popElement(1)}>Pop Stack 2</Button>
            <Button className="Button" variant="outlined" onClick={() => popElement(2)}>Pop Stack 3</Button>
          </div>
          <div className="col-sm-2 text-center">
            <Button
              className="Button"
              variant="outlined"
              onClick={() => alert(stacks[0].length === maxElements)}
            >
              Is Stack 1 Full ?
            </Button>
            <Button
              className="Button"
              variant="outlined"
              onClick={() => alert(stacks[1].length === maxElements)}
            >
              Is Stack 2 Full ?
            </Button>
            <Button
              className="Button"
              variant="outlined"
              onClick={() => alert(stacks[2].length === maxElements)}
            >
              Is Stack 3 Full ?
            </Button>
          </div>
          <div className="col-sm-2">
            <Button
              className="Button"
              variant="outlined"
              onClick={() => alert(stacks[0].length === 0)}
            >
              Is Stack 1 Empty ?
            </Button>
            <Button
              className="Button"
              variant="outlined"
              onClick={() => alert(stacks[1].length === 0)}
            >
              Is Stack 2 Empty ?
            </Button>
            <Button
              className="Button"
              variant="outlined"
              onClick={() => alert(stacks[2].length === 0)}
            >
              Is Stack 3 Empty ?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
