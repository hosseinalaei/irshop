import React from "react";
import "./assets/fonts/fonts-yekan/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import "react-toastify/dist/ReactToastify.css";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";
import Login from "./auth/Login";
import routes from "./routes";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {

  const getAuthRoutes = (routes=[]) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getAuthRoutes(prop.views);
      }
      if (prop.layout === '/auth') {
        return <Route path={prop.layout + prop.path} key={key} component={prop.component} />;
      } else {
        return null;
      }
    });
  };
  const getAdminRoutes = (routes=[]) => {
    return routes.map((prop, key) => {
        console.log(prop);
      if (prop.collapse) {
        return getAdminRoutes(prop.views);
      }
      if (prop.layout === '/admin') {
        return <Route path={prop.layout + prop.path} key={key} component={prop.component} />;
      } else {
        return null;
      }
    });
  };
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
        <Route path="/auth" element={<Auth/>}>
            {getAuthRoutes(routes)}  
        </Route>
        <Route path="/admin" element={<Admin routes={routes}/>}>
          {getAdminRoutes(routes)}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
