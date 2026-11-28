import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard";

const Store = () => {
  const { products, loading, error } = useContext(ProductContext);

  const result =
    loading === true ? (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-(--info)">Loading...</h2>
      </div>
    ) : error ? (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-(--danger)">{error}</h2>
      </div>
    ) : (
        products.map((product) => (
          <ProductCard key={`productID-${product.id}`} {...product} />
        ))
    );

  return (
    <section className="mt-8 w-full">
      <h2 className="capitalize text-(--text) text-3xl mb-8">Discover our complete collection</h2>
      <ul className="grid grid-cols-3 grid-rows-5 gap-4">
        {result}
      </ul>
    </section>
  );
};

export default Store;
