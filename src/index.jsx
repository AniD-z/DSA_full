import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccussPage from "./components/event_forms/sucess";
import App from "./App";
import Input from "./input";
import Que from "./components/que/Que";
import Stack from "./components/stack/Stack";
import AVLTrees from "./components/avl-tree/AVLTrees";
import Arr from "./components/array/Array";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SingleLinkedList from "./components/singleLinkedList/singleLinkedList";

function Routee() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/input" exact element={<Input />} />
          <Route path="/succuss" exact element={<SuccussPage />} />
          <Route path="/que" exact element={<Que />}/>
          <Route path="/Stack" exact element={<Stack />}/>
          <Route path="/avlTree" exact element={<AVLTrees />} />
          <Route path="/array" exact element={<Arr />} />
          <Route path="/ll" exact element={<SingleLinkedList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routee;
