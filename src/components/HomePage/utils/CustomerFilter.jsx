import React, { useState } from 'react';

export const CustomerFilter = () => {
  const [inactiveDays, setInactiveDays] = useState('');
  const [numOrders, setNumOrders] = useState('');
  const [logic, setLogic] = useState('OR');

  const handleFilter = () => {
    console.log('Filtering with:');
    console.log(`Inactive Days: ${inactiveDays}`);
    console.log(`Number of Orders: ${numOrders}`);
    console.log(`Logic: ${logic}`);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 max-w-sm w-full mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">🔎 Filter Customers</h2>

      <div className="space-y-4">
        {/* Inactive Days Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Number of Days Inactive</label>
          <input
            type="number"
            value={inactiveDays}
            onChange={(e) => setInactiveDays(e.target.value)}
            placeholder="e.g., 30"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        {/* Number of Orders Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Number of Orders</label>
          <input
            type="number"
            value={numOrders}
            onChange={(e) => setNumOrders(e.target.value)}
            placeholder="e.g., 5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        {/* Logic Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Combine Filters Using:</label>
          <select
            value={logic}
            onChange={(e) => setLogic(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          >
            <option value="OR">OR</option>
            <option value="AND">AND</option>
          </select>
        </div>

        {/* Filter Button */}
        <button
          onClick={handleFilter}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};
