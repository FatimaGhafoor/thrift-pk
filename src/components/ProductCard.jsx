export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm w-full hover:shadow-md transition-shadow duration-300">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.type}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Brand: {product.brand} - {product.type}
      </h3>
      <p className="text-sm text-gray-600">Size: {product.size}</p>
      <p className="text-lg font-bold text-gray-900 mt-2 mb-2">
        PKR {product.price}
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Condition:{" "}
        <span className="font-semibold text-gray-900">
          {product.conditionRating}/10
        </span>{" "}
        <span className="font-medium">{product.conditionCategory}</span>
      </p>
    </div>
  );
};
