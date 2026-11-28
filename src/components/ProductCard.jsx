import { Link } from "react-router-dom";

const ProductCard = ({ id, image, title, price }) => {
  return (
    <li className="overflow-hidden rounded-2xl border border-(--border-muted) border-t-(--border)">
      <Link to={`/products/${id}`}>
        <article className="bg-(--bg-light) p-4 flex flex-col items-start gap-2 justify-between min-h-120">
          <img src={image} alt={`${title}`} className="h-80 self-center object-center object-cover" />
          <h3 className="text-(--text) text-xl">{title}</h3>
          <h4 className="text-(--text) text-2xl font-semibold">${price}</h4>
        </article>
      </Link>
    </li>
  );
};

export default ProductCard;
