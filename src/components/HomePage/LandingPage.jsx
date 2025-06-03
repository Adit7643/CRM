import React, { useState } from 'react';
import { DataIngestion } from './utils/DataIngestion';
import { CustomerFilter } from './utils/CustomerFilter';

export const LandingPage = () => {
  const [jsonInput, setJsonInput] = useState('{\n  "name": "John Doe",\n  "inactiveDays": 10,\n  "orders": 3\n}');
  const [parsedData, setParsedData] = useState(null);

  const handleSubmit = () => {
    try {
      const data = JSON.parse(jsonInput);
      setParsedData(data);
      alert('✅ Customer data ingested successfully!');
    } catch (error) {
      alert(`❌ Error parsing JSON: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
      
      {/* Left Panel */}
      <div className="flex-1 bg-white p-4 rounded shadow space-y-4">
        <DataIngestion />
        <CustomerFilter />
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-lg font-bold">📝 Add Customer JSON</h2>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          rows={10}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          🚀 Submit Customer Data
        </button>

        {parsedData && (
          <div className="bg-gray-100 p-2 rounded border overflow-auto">
            <h3 className="font-semibold">📊 JSON Preview:</h3>
            <pre className="text-sm">{JSON.stringify(parsedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};
