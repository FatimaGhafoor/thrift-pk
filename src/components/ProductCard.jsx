export const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.type} />
      <h3>
        Brand: {product.brand} - {product.type}
      </h3>
      <p>Size: {product.size}</p>
      <p>Price: {product.price}PKR</p>
      <p>
        Condition: {product.conditionRating} {product.conditionCategory}
      </p>
    </div>
  );
};
