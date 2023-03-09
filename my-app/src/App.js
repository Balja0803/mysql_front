import { useEffect, useState } from "react";
import "./outer.css";
import AddProducts from "./components/AddProducts";
import Brands from "./components/Brands";
import Load from "./components/Load";
import Category from "./components/Category";
import Products from "./components/Products";
const btnNames = [
  {
    name: "all Products",
    value: "products",
    component: <Products />,
  },
  {
    name: "load more",
    value: "load",
    component: <Load />,
  },
  {
    name: "Filter by Category",
    value: "category",
    component: <Category />,
  },
  {
    name: "Filter by Brands",
    value: "brands",
    component: <Brands />,
  },
  {
    name: "add product",
    value: "add products",
    component: <AddProducts />,
  },
];

function App() {
  const [current, setCurrent] = useState(btnNames[0]);

  useEffect(() => {
    if (localStorage.getItem("btnVal")) {
      setCurrent(
        btnNames.find((btn) => btn.value === localStorage.getItem("btnVal"))
      );
    }
  }, []);

  function currentStateHandler(btn) {
    setCurrent(btn);
    localStorage.setItem("btnVal", btn.value);
  }
  return (
    <div className="outer">
      <div className="buttons">
        {btnNames.map((btn, index) => (
          <button
            key={index}
            onClick={() => currentStateHandler(btn)}
            className={
              current.value === btn.value ? "activeBtn" : "inactiveBtn"
            }
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div>{current.component}</div>
    </div>
  );
}

export default App;
