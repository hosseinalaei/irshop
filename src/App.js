import Layout from "./layout/Layout";
import "./assets/fonts/fonts-yekan/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import "react-toastify/dist/ReactToastify.css";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <div style={{ fontFamily: "yekan" }}>
      {/* <Layout /> */}
      <Outlet />
    </div>
  );
}

export default App;
