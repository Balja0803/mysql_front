import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <button>All products</button>
      <button>Load more</button>
      <button>Filter by category</button>
      <button>Filter by brand</button>
      <button>Add product</button>
    </div>
  );
}
