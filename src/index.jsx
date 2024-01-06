import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccussPage from "./components/event_forms/sucess";
import App from "./App";
import Input from "./input";

function Routee() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/input" exact element={<Input />} />
          <Route path="/succuss" exact element={<SuccussPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routee;
