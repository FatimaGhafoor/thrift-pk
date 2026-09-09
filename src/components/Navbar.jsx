export const Navbar = () => {
  return (
    <nav className="bg-white border-b max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <ul>
        <li className="text-lg font-semibold text-gray-900">Thrift.pk</li>
      </ul>

      <ul className="flex gap-6">
        <li>
          <a
            href="/"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/products"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Products
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a
            href="/cart"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};
