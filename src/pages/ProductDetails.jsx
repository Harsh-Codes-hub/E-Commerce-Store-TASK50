import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductDetailCard from "../components/ProductDetailCard";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useContext(ProductContext);
  const filteredProduct = products.find((product) => product.id === Number(id));
  const result = loading ? (
    <h2 className="text-3xl text-(--info)">Loading...</h2>
  ) : error ? (
    <h2 className="text-3xl font-semibold text-(--danger)">{error}</h2>
  ) : filteredProduct ? (
    <ProductDetailCard key={`ProductID-${filteredProduct.id}`} {...filteredProduct}/>
  ) : (
    <h2 className="text-3xl font-semibold text-(--danger)">Product Not Found</h2>
  );

  return (
    <section className="flex items-center justify-center text-white mt-8 w-full">
      {result}
    </section>
  );
};

export default ProductDetails;
