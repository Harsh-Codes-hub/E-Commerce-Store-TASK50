import { Link } from "react-router-dom";

const ProductCard = ({ id, image, title, price }) => {
  return (
    <li className="overflow-hidden rounded-2xl border border-(--border-muted) border-t-(--border)">
      <Link to={`/products/${id}`} className="h-full">
        <article className="bg-(--bg-light) p-4 flex flex-col items-start gap-2 justify-between min-h-120 h-full">
          <figure className="flex items-center justify-center bg-(--bg-dark) w-full p-4 rounded-3xl border border-(--border-muted) border-t-(--border)">
            <img
              src={image}
              alt={`${title}`}
              className="h-80 object-center object-contain"
            />
          </figure>
          <figcaption>
            <h3 className="text-(--text) text-xl">{title}</h3>
            <h4 className="text-(--text) text-2xl font-semibold">${price}</h4>
          </figcaption>
        </article>
      </Link>
    </li>
  );
};

export default ProductCard;
