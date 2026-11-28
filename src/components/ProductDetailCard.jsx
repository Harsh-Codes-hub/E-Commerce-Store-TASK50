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
      <figure className="bg-(--bg-light) w-1/2 flex items-center justify-center p-4 rounded-3xl border border-(--border-muted) border-t-(--border)">
        <img src={image} alt={`ProductID-${id}_${title}`} className="h-120" />
      </figure>
      <div className="flex flex-col items-start gap-4 w-1/2 p-4 bg-(--bg-dark) rounded-3xl border border-(--border-muted) border-t-(--border)">
        <h2 className="text-(--text) text-3xl">{title}</h2>
        <h3 className="text-3xl text-(--text)">${price}</h3>
        <p className="capitalize text-(--text-muted)">
          Category: {category}
        </p>
        <p className="text-xl text-(--text-muted)">
          Rating: {rating?.rate ?? "N/A"}
        </p>
        <p className="text-(--text-muted) text-lg">{description}</p>
      </div>
    </article>
  );
};

export default ProductDetailCard;
