import React, { useState } from "react";

export default function CreateParty() {
  const [sameAsBilling, setSameAsBilling] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Create Party</h2>
        <div className="flex items-center gap-3">
          <button className="border px-4 py-2 rounded text-gray-600">Party Settings</button>
          <button className="bg-purple-600 text-white px-6 py-2 rounded">Save</button>
        </div>
      </div>

      {/* Section: General Details */}
      <h3 className="font-medium text-lg mb-2">General Details</h3>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <input placeholder="Party Name *" className="border rounded p-2" />
        <input placeholder="Mobile Number" className="border rounded p-2" />
        <input placeholder="Email" className="border rounded p-2" />
        <div className="flex">
          <input placeholder="₹ 0" className="border rounded-l p-2 w-full" />
          <select className="border rounded-r p-2 bg-gray-50">
            <option>To Collect</option>
            <option>To Pay</option>
          </select>
        </div>

        <input placeholder="GSTIN (ex: 29XXXXX9438X1XX)" className="border rounded p-2" />
        <button className="bg-violet-200 text-violet-700 font-semibold rounded px-4 py-2 mt-auto h-[42px]">
          Get Details
        </button>
        <input placeholder="PAN Number" className="border rounded p-2 col-span-2" />
      </div>

      <p className="text-gray-500 text-sm mb-4">
        Note: You can auto populate party details from GSTIN
      </p>

      {/* Party Type & Category */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1">Party Type *</label>
          <select className="border rounded p-2 w-full">
            <option>Customer</option>
            <option>Supplier</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Party Category</label>
          <select className="border rounded p-2 w-full">
            <option>Select Category</option>
            <option>Retailer</option>
            <option>Wholesaler</option>
          </select>
        </div>
      </div>

      {/* Address */}
      <h3 className="font-medium text-lg mb-2">Address</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Billing Address</label>
          <textarea className="border rounded p-2 w-full h-24" placeholder="Enter billing address" />
        </div>
        <div>
          <label className="block mb-1 flex justify-between">
            <span>Shipping Address</span>
            <span>
              <input type="checkbox" checked={sameAsBilling} onChange={() => setSameAsBilling(!sameAsBilling)} />
              <span className="ml-1 text-sm text-gray-600">Same as Billing address</span>
            </span>
          </label>
          <textarea
            className="border rounded p-2 w-full h-24 bg-gray-100"
            disabled={sameAsBilling}
            placeholder="Enter shipping address"
          />
        </div>
      </div>

      {/* Credit Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <label className="block mb-1">Credit Period</label>
            <input type="number" className="border rounded p-2 w-full" placeholder="30" />
          </div>
          <span className="mb-2">Days</span>
        </div>
        <div>
          <label className="block mb-1">Credit Limit</label>
          <input type="number" className="border rounded p-2 w-full" placeholder="₹ 0" />
        </div>
      </div>
    </div>
  );
}
