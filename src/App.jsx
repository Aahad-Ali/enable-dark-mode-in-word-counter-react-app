import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import About from "./components/about";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Text />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

function App() {
  const [mode, setMode] = useState("light");

  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="Word Counter App:" mode={mode} darkMode={darkMode} />
      <div className="container">
        <Text heading="Enter any text here:" mode={mode} />
      </div>

      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`gallery`}>Gallery</Link>
          </li>
        </ul>
      </nav>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
