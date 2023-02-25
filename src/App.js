import React from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Account from "./components/Account";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Firebase Auth and Context</h1>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
       </Routes>
    </div>
  );
}

export default App;
