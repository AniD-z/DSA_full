import React, { useState, useEffect } from "react";
import AVLTree from "./avl-tree";
// import Tree from "react-tree-graph";
import Tree from "react-d3-tree";
import "./styleavl.css"
// import { Button } from '@mui/material';
import Button from '@mui/material/Button';
import AlertDialog from "@mui/material/Dialog";
import Information from "../material-ui-components/information";
import codeData from "../../data";
import StartInformation from "../startInformation/startInformation";
import Confetti from 'react-confetti'

const AVLTrees = () => {
  const [considerTree, setConsiderTree] = useState(null);
  const [isCreated, setCreated] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [toDel, setToDel] = useState("");

  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleClose = () => {
    StartInformation();
    setOpen(false);
  };

  const create = () => {
    let rootvalue = parseInt(prompt("Enter the root value"));
    if (rootvalue > 10 || rootvalue < 1) {
      alert("Please Enter a value between 1 to 10")
      return;
    }
    if (!isNaN(rootvalue)) {
      const temp = new AVLTree(rootvalue);
      setConsiderTree(temp);
      const v = temp.getRoot();
      let result = refactor(v);
      setData(result);
      setCreated(true);
    }
  };

  const insert = (data) => {
    const v = considerTree.insert(considerTree.getRoot(), parseInt(data));
    let result = refactor(v);
    console.log(result);
    setData(result);
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
      if (tree.lchild && tree.rchild) {
        t.children.push(refactor(tree.lchild));
        t.children.push(refactor(tree.rchild));
      }
      if (tree.lchild && !tree.rchild) {
        t.children.push(refactor(tree.lchild));
      }
      if (tree.rchild && !tree.lchild) {
        t.children.push(refactor(tree.rchild));
      }
      if (!tree.rchild && !tree.lchild) {
        t.children = [];
      }
      return t;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value > 10 || value < 1) {
      alert("Please Enter a value between 1 to 10")
      return;
    }
    if (value !== "" && !value.isNaN) {
      insert(value);
    } else {
      alert("Please Enter some value");
    }
    setValue("");
  };

  const changeHandler = (e) => {
    if (e.target.value.indexOf(".") !== -1) {
      return alert("Please only enter Integer literals, not Double");
    }
    setValue(e.target.value);
  };

  const deleteValHandler = (e) => {
    if (e.target.value.indexOf(".") !== -1) {
      return alert("Please only enter Integer literals, not Double");
    }
    setToDel(e.target.value);
  };

  const handleDelete = (e) => {
    try {
      e.preventDefault();
      if (toDel > 10 || toDel < 1) {
        alert("Please Enter a value between 1 to 10")
        return;
      }
      if (toDel !== "" && !toDel.isNaN) {
        let v = considerTree.Delete(considerTree.getRoot(), parseInt(toDel));
        let result = refactor(v);
        setData(result);
      } else {
        alert("Please enter a Numeric value");
      }
    } catch (e) {
      alert(
        "An Algorithamic Error Occured, please perform another operation : Error discription :" +
        e
      );
    }

    setToDel("");
  };

  const handleClear = () => {
    setConsiderTree(null);
    setCreated(false);
  };

  const handleCompare = () => {
    // e.preventDefault();
    const defaultTree = new AVLTree(7);  // Define your default tree structure here
    defaultTree.insert(defaultTree.getRoot(), 1);
    defaultTree.insert(defaultTree.getRoot(), 2);
    defaultTree.insert(defaultTree.getRoot(), 3);
    defaultTree.insert(defaultTree.getRoot(), 4);
    defaultTree.insert(defaultTree.getRoot(), 5);
    defaultTree.insert(defaultTree.getRoot(), 6);
    defaultTree.insert(defaultTree.getRoot(), 7);

    console.log(considerTree)


    const isSameStructure = considerTree.compareStructure(
      considerTree.getRoot(),
      defaultTree.getRoot()
    );
    if (isSameStructure) {
      alert("Congratulations, Structures are same");
      setDone(true);
    }
    else {
      alert("Structures are different")
    }

  };

  if (considerTree && !considerTree.getRoot()) {
    handleClear();
  }

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="d-flex align-items-center justify-content-center"
    >

      <div style={{ position: "absolute", left: "5rem", bottom: "37rem" }}>
        <Information codeData={codeData.avl} />

      </div>
      {done && <Confetti />}
      <div className="top " style={{ height: "50em", width: "100vw" }}>
        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Welcome to AVL Tree"
          content="You will see a empty screen, from the below controller first you have to create one AVL Tree, by clicking create, after you create AVL Tree, all options in controller will be enabled, you can insert value and delete value from the tree. You can clear the Tree at any time. "
        />
        {considerTree && (
          <Tree
            data={data}
            zoomable="true"
            enableLegacyTransitions="true"
            transitionDuration="800"
            translate={{ x: "782", y: "52" }}
            zoom="1"
            rootNodeClassName="node__root"
            leafNodeClassName="node__leaf"
            branchNodeClassName="node__branch"
            orientation="vertical"
          />
        )}

        {/* <Information codeData={codeData.avl} /> */}
        <div className="controlls-container w-100">
          {!isCreated && (
            <div className="col-1 d-flex align-items-center controlHandler">
              <Button onClick={create} className="Button" varient="outlined">
                Create
              </Button>
            </div>
          )}

          <div className="row">
            <div className="col">
              {isCreated && (
                <Button
                  onClick={handleClear}
                  className="Button"
                  varient="outlined"
                >
                  Clear
                </Button>
              )}
            </div>

            <div className="col">
              {isCreated && (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <input
                        placeholder="value"
                        value={value}
                        onChange={changeHandler}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="col">
                      <Button
                        type="submit"
                        className="Button"
                        varient="outlined"
                      >
                        insert
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            <div className="col d-flex align-items-center controlHandler">
              {isCreated && (
                <form onSubmit={handleDelete}>
                  <div className="row">
                    <div style={{ width: "24rem" }} className="col">
                      <input
                        placeholder="Node to Delete"
                        onChange={deleteValHandler}
                        className="form-control"
                        value={toDel}
                      ></input>
                    </div>
                    <div className="col">
                      <Button
                        type="submit"
                        className="Button"
                        varient="outlined"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
            <div className="col d-flex align-items-center controlHandler">
              {isCreated && (
                <Button
                  type="submit"
                  className="Button"
                  varient="outlined"
                  onClick={handleCompare}
                >
                  Compare
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AVLTrees;
