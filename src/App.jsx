import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Signin from "./components/signup";
import Signup from "./components/signup";
import Signin from "./components/signin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Signup /> */}
      <Signin />
    </>
  );
}

export default App;
