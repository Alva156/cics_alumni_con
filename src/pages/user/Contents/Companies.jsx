import React from 'react';

function Companies() {
  return (
    <div className="text-black font-light mx-4 md:mx-8 lg:mx-16 mt-8 mb-12">
      <h1 className="text-xl mb-4">Companies</h1>

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search Company"
          className="w-full border border-black rounded-lg px-4 py-2"
        />
        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer">
          X
        </span>
      </div>

      <div className="mb-6">
        <span className="text-xs">Sort by:</span>
        <select className="ml-2 border border-black rounded px-3 py-1 text-xs">
          <option>Name (A-Z)</option>
          <option>Name (Z-A)</option>
        </select>
      </div>

      <div className="text-md mb-4">All Companies</div>

      <hr className="mb-6 border-black" />

      {[1, 2, 3].map((_, index) => (
        <div key={index} className="mb-4 p-4 border border-black rounded-lg">
          <div className="text-sm font-medium">Company Name</div>
          <div className="text-xs text-black-600">Address</div>
        </div>
      ))}
    </div>
  );
}

export default Companies;
