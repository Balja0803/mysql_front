import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";

export default function Products() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    let response = await axios.get("http://localhost:4040/products");
    let prods = await response.data;
    setProducts(prods);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {products && (
        <Table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">sale</th>
              <th scope="col">stock</th>
              <th scope="col">brand</th>
              <th scope="col">category</th>
              <th scope="col">description</th>
              <th scope="col">date</th>
              <th scope="col">options</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.sale}</td>
                <td>{product.stock}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.created_date.slice(0, 10)}</td>
                <td>edit/options</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
