import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductDetailCard from "../components/ProductDetailCard";

const ProductDetails = () => {
  const {id} = useParams();
  const { products, loading, error } = useContext(ProductContext);
  const filteredProduct =
    (loading === true) ? (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-(--info)">Loading...</h2>
      </div>
    ) : (error) ? (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-(--danger)">{error}</h2>
      </div>
    ) : (
      products.find((product) => product.id === Number(id))
    );

  const result = (typeof(filteredProduct) === "object") ? (<ProductDetailCard />): filteredProduct;

  return (
    <section className="flex items-center justify-center text-white mt-8 w-full">
      {result}
    </section>
  );
};

export default ProductDetails;
