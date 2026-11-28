const ProductDetailCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <article className="bg-(--bg) flex justify-center gap-4 py-4 px-6 rounded-2xl w-250 border border-(--border-muted) border-t-(--border)">
      <figure className="bg-(--bg-dark) w-1/2 flex items-center justify-center p-4 rounded-3xl border border-(--border-muted) border-t-(--border)">
        <img src={image} alt={`ProductID-${id}_${title}`} className="h-120 object-center object-contain" />
      </figure>
      <div className="flex flex-col items-start gap-4 w-1/2 p-4 bg-(--bg-light) rounded-3xl border border-(--border-muted) border-t-(--border)">
        <h2 className="text-(--text) text-3xl">{title}</h2>
        <h3 className="text-3xl text-(--success)">${price}</h3>
        <p className="capitalize text-(--text-muted)">
          Category: <span className="text-(--warning)">{category}</span>
        </p>
        <p className="text-xl text-(--text-muted)">
          Rating: <span className="text-(--warning)">{rating?.rate ?? "N/A"}</span>
        </p>
        <p className="text-(--text-muted) text-lg">{description}</p>
      </div>
    </article>
  );
};

export default ProductDetailCard;
