import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccessPage from "./components/event_forms/success";
import App from "./App";
import Input from "./input";

function Routee() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/input" exact element={<Input />} />
          <Route path="/success" exact element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routee;
