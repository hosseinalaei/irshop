import Layout from "./layout/Layout";
import "./assets/fonts/fonts-yekan/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {
  return (
    <div style={{ fontFamily: "yekan" }}>
      <Layout />
    </div>
  );
}

export default App;
