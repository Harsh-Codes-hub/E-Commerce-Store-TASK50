import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products, loading, error } = useContext(ProductContext);
  const featureProducts = products.slice(0, 3);

  const result =
    loading === true ? (
      <h2>Loading</h2>
    ) : error ? (
      <h2>{error}</h2>
    ) : (
      <ul className="flex justify-between items-center gap-4">
        {featureProducts.map((product) => (
          <ProductCard key={`productID-${product.id}`} {...product} />
        ))}
      </ul>
    );

  return (
    <>
      <section
        className="flex flex-col items-start gap-6 mt-6 px-6 py-4 rounded-2xl border border-(--border-muted) border-t-(--border)"
        style={{ background: "var(--gradient-l)" }}
      >
        <h1 className="text-(--text) text-3xl">Welcome to our Store</h1>
        <h2 className="text-(--text-muted) text-5xl">
          Discover products across different categories.
        </h2>
        <button
          type="button"
          className="text-(--text-muted) py-4 px-4 rounded-3xl text-xl common-btn"
        >
          Explore Shop <i className="ri-arrow-right-line"></i>
        </button>
      </section>
      <section className="flex-1 w-full mt-6">{result}</section>
    </>
  );
};

export default Home;
