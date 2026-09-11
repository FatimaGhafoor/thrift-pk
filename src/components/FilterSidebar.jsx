export const FilterSidebar = ({
  setSelectedCategory,
  setSelectedSize,
  setSelectedCondition,
}) => {
  return (
    <aside className="w-1/4 bg-white border rounded-lg p-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              value="clothes"
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            Clothes
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              value="shoes"
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            Shoes
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Size</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              value="S"
              onChange={(e) => setSelectedSize(e.target.value)}
            />
            S
          </label>

          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              value="M"
              onChange={(e) => setSelectedSize(e.target.value)}
            />
            M
          </label>

          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              value="L"
              onChange={(e) => setSelectedSize(e.target.value)}
            />
            L
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Condition</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              value="Mint"
              onChange={(e) => setSelectedCondition(e.target.value)}
            />
            Mint
          </label>

          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              value="Gently Used"
              onChange={(e) => setSelectedCondition(e.target.value)}
            />
            Gently Used
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Price</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            Min Price
            <input type="number" placeholder="Min" />
          </label>

          <label className="flex items-center gap-2 text-sm text-gray-700">
            Max Price
            <input type="number" placeholder="Max" />
          </label>
        </div>
      </div>
    </aside>
  );
};
