import Body from "../components/Body";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
  const [active, setActive] = useState("");
  const [prods, setProds] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => setProds(res.data));
    console.log(prods);
  }, [setProds]);

  return (
    <div>
      {active === "getProducts" && <p>hi</p>}
      <Header setActive={setActive} />
      <Body prod={prods} />
    </div>
  );
}
