import React from "react";
import Button from "./components/Elements/Button";
import InputForm from "./components/Elements/Input";

function App() {
  return (
    <div className="flex justify-center bg-white min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500">Welcome, please enter your details</p>

        <form action="">
          <InputForm
            label="Email"
            name="email"
            type="email"
            placeholder="example@email.com"
          />

          <InputForm
            label="Password"
            name="password"
            type="password"
            placeholder="********"
          />

          <Button classname="bg-blue-800 w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
