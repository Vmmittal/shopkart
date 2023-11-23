import { useContext, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Signin from "./components/signup";
import Signup from "./components/signup";
import Signin from "./components/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./components/context";
function App() {
  const [count, setCount] = useState(0);
  // const [context, setContext] = useContext();

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />}></Route>
            <Route path="/register" element={<Signin />}></Route>
          </Routes>
          {/* <Signup /> */}
          {/* <Signin /> */}
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
