import { React, useState, useEffect } from "react";
import { FaMale, FaFemale, FaArrowLeft } from "react-icons/fa";
import { ColorIndicator } from "../sorting-algorithm/colorIndicator/colorIndicator";
import Button from '@mui/material/Button';
import AlertDialog from "@mui/material/Dialog";
import Warning from "../errorMessage/Warning";

import "./que.css";
import Information from "../material-ui-components/information";
import codeData from "../../data";
import StartInformation from "./../startInformation/startInformation";
const maxMembers = 10;

const Que = () => {
  const initialColor = "rgb(63, 81, 181)";
  const maleColor = "#FBEAFF";
  const femaleColor = "#FBEAFF";
  const dequeueColor = "red";
  const enqueueColor = "#250B65";

  const initialElements = [
    // <FaMale className="male" />,
    <FaMale className="male" />,
    <FaMale className="male" />,
    <FaFemale className="female" />,
    <FaMale className="male" />,
    <FaFemale className="female" />,
    <FaFemale className="female" />,
    <FaFemale className="female" />,
    <FaMale className="male" />,
    <FaFemale className="female" />,
    <FaMale className="male" />,
    <FaMale className="male" />,
  ];

  const [firstQueue, setFirstQueue] = useState(initialElements);
  const [secondQueue, setSecondQueue] = useState([<FaMale className="male" />]);

  // Welcome
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleClose = () => {
    StartInformation();
    setOpen(false);
  };

  // Warning Message
  const [errorMessage, setErrorMessage] = useState("");
  const [warningOpen, setWarningOpen] = useState(false);

  const handleWarning = () => {
    setWarningOpen(!warningOpen);
    setErrorMessage("");
  };

  const heighlightAction = (index, delay, color, queueType) => {
    const bar = document.getElementsByClassName(queueType);
    setTimeout(() => {
      bar[index].style.backgroundColor = color;
    }, delay);
    setTimeout(() => {
      bar[index].style.backgroundColor = initialColor;
    }, 150 * delay);
  };

  // Enqueue Male to first queue
  const enqueueMale = () => {
    let i;
    for (i = 0; i < firstQueue.length; i++) {
      // heighlightAction(i, delay++, "red");
    }

    if (i < 10) { // Assuming max length of first queue is 10
      setTimeout(() => {
        heighlightAction(i, 3, enqueueColor, "first-queue-element");

        setFirstQueue((oldItems) => {
          return [...oldItems, <FaMale className="male first-queue-element" />];
        });
      }, 150 * 2.5);
    } else {
      setErrorMessage("First Queue is Full");
      setWarningOpen(true);
    }
  };

  // Enqueue Female to first queue
  const enqueueFeMale = () => {
    let i;
    for (i = 0; i < firstQueue.length; i++) {
      // heighlightAction(i, delay++, "red");
    }
    if (i < 10) { // Assuming max length of first queue is 10
      setTimeout(() => {
        heighlightAction(i, 3, enqueueColor, "first-queue-element");

        setFirstQueue((oldItems) => {
          return [...oldItems, <FaFemale className="female first-queue-element" />];
        });
      }, 150 * 2.5);
    } else {
      setErrorMessage("First Queue is Full");
      setWarningOpen(true);
    }
  };

  const deQueue = () => {
    if (firstQueue.length > 0) {
      heighlightAction(0, 2, dequeueColor, "first-queue-element");
      setTimeout(() => {
        const dequeuedElement = firstQueue[0];
        setFirstQueue((oldItems) => oldItems.slice(1));
        if (secondQueue.length < 12) { // Assuming max length of second queue is 10
          setSecondQueue((oldItems) => [...oldItems, dequeuedElement]);
        } else {
          setErrorMessage("Second Queue is Full");
          setWarningOpen(true);
        }
      }, 300);
    } else {
      setErrorMessage("First Queue is Empty");
      setWarningOpen(true);
    }
  };

  function rotateArray() {
    if (secondQueue.length === 0) {
        return ; 
    }
    const firstElement = secondQueue.shift(); // Remove the first element from the array
    secondQueue.push(firstElement); // Add the removed element to the end of the array
    setSecondQueue([...secondQueue]);
}

  return (
    <div className="container">
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Queue"
        content="A Queue is already been created, we taken the analogy of a real life example of peoples standing in queue ( Men and Women ), from the below controller you can add Men/Women to queue (Enqueue) and remove Men/Women from queue (Dequeue)."
      />
      <ColorIndicator
        indicator={[
          { name: "Enqueue", color: initialColor },
          { name: "Male", color: maleColor },
          { name: "Female", color: femaleColor },
          { name: "Enqueue", color: enqueueColor },
          { name: "Dequeue", color: dequeueColor },
        ]}
      />
      {/* <Information codeData={codeData.queue} /> */}
      {/* Error Message */}
      <Warning
        open={warningOpen}
        handleClose={handleWarning}
        title="Warning"
        content={errorMessage}
      />
      <hr />
      <div style={{paddingLeft : "8%"}}>
        <div className="queue">
          {firstQueue.map((val, i) => (
            <div key={i} className={`queue-element first-queue-element ${ i != 0? "firstElem" : null}`}>{val}</div>
          ))}
        </div>
        <div className="queue">
          {secondQueue.map((val, i) => (
            <div key={i} className="queue-element second-queue-element">{val}</div>
          ))}
        </div>
        <div className="controlls-container">
          {/* <div className="d-flex align-items-center col-sm-2 controlHandler">
            <Button className="Button" onClick={enqueueMale}>
              Enqueue Male
            </Button>
          </div>
          <div className="d-flex align-items-center col-sm-2 controlHandler">
            <Button
              className="Button"
              variant="outlined"
              onClick={enqueueFeMale}
            >
              Enqueue Female
            </Button>
          </div> */}
          <div className="d-flex align-items-center col-sm-1 controlHandler">
            <Button className="Button" variant="outlined" onClick={deQueue}>
              Dequeue
            </Button>
          </div>
          <div className="d-flex align-items-center col-sm-1 controlHandler">
            <Button className="Button" variant="outlined" onClick={rotateArray}>
              Rotate
            </Button>
          </div>
          <div className="d-flex align-items-center col-sm-1 controlHandler">
            <Button className="Button" variant="outlined" onClick={rotateArray}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Que;
