const ProductCard = ({image, title, price}) => {
  return (
    <li className="w-1/3 overflow-hidden rounded-2xl border border-(--border-muted) border-t-(--border)">
      <article className="bg-(--bg-light) p-4 flex flex-col items-start gap-2 justify-between min-h-120">
        <img src={image} alt="" className="h-80 self-center" />
        <h3 className="text-(--text) text-xl">{title}</h3>
        <h4 className="text-(--text) text-lg">${price}</h4>
      </article>
    </li>
  );
};

export default ProductCard;
