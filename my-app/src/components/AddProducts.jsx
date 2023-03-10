import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export default function AddProducts() {
  const [brands, setBrands] = useState([]);
  const [categories, setCategory] = useState([]);

  async function fetchOptions() {
    let response = await axios.get("http://localhost:4040/brands");
    let catResponse = await axios.get("http://localhost:4040/categories");
    setBrands(response.data);
    setCategory(catResponse.data);
  }

  useEffect(() => {
    fetchOptions();
  }, []);

  return (
    <div>
      <Form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">name</label>
          <input
            type=""
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">price</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput2"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput3">Image</label>
          <input
            type="file"
            className="form-control"
            id="exampleFormControlInput3"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput4">Stock</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput4"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput5">Sale</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">category</label>
          <select className="form-control" id="exampleFormControlSelect1">
            {categories &&
              categories.map((category, i) => (
                <option key={i}> {category.name} </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">brand</label>
          <select className="form-control" id="exampleFormControlSelect2">
            {brands &&
              brands.map((brand, i) => <option key={i}>{brand.name} </option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <Button type="Submit">Add Product</Button>
      </Form>
    </div>
  );
}
