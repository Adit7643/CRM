import React from 'react';

export const DataIngestion = () => {
  const handleCustomerData = () => {
    console.log('Customer data upload clicked');
    // TODO: Implement customer data upload
  };

  const handleOrderData = () => {
    console.log('Order data upload clicked');
    // TODO: Implement order data upload
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 max-w-sm w-full mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">📂 Upload Data</h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Upload customer and order data files.
      </p>
      <div className="space-y-4">
        <button
          onClick={handleCustomerData}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Add Customer Data
        </button>
        <button
          onClick={handleOrderData}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Add Order Data
        </button>
      </div>
    </div>
  );
};
