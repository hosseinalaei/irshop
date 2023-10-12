import React from "react";
import "./assets/fonts/fonts-yekan/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import "react-toastify/dist/ReactToastify.css";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";
import Login from "./auth/Login";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const checkUserToken = () => {
  //   const userToken = localStorage.getItem("user-token");
  //   if (!userToken || userToken === "undefined") {
  //     setIsLoggedIn(false);
  //   }
  //   setIsLoggedIn(true);
  // };
  // useEffect(() => {
  //   checkUserToken();
  // }, [isLoggedIn]);

  return (
    <div style={{ fontFamily: "yekan" }}>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route children={(props) => <Auth {...props} />} />
        <Route children={(props) => <Admin {...props} />} />
      </Routes>
    </div>
  );
}

export default App;
