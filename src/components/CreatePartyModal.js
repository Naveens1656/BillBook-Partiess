import React, { useState } from "react";

export default function CreatePartyModal({ onClose, onAddParty }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    openingBalance: 0,
    balanceType: "To Collect",
    gstin: "",
    pan: "",
    type: "Customer",
    category: "",
    billingAddress: "",
    shippingAddress: "",
    sameAsBilling: true,
    creditPeriod: 30,
    creditLimit: 0,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "sameAsBilling" && checked
        ? { shippingAddress: prev.billingAddress }
        : {}),
    }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Party Name is required";
    if (!form.mobile.trim()) err.mobile = "Mobile Number is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onAddParty({
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      category: form.category,
      type: form.type,
      balance: form.openingBalance,
      balanceType: form.balanceType,
    });
    setForm({});
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-[800px] max-h-[90vh] overflow-y-auto rounded-xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Party</h2>
          <div className="flex gap-2">
            <button className="border px-4 py-2 rounded text-gray-600">Party Settings</button>
            <button
              onClick={handleSubmit}
              className="bg-purple-600 text-white px-6 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>

        {/* General Details */}
        <h3 className="font-medium text-lg mb-2">General Details</h3>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-sm">Party Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="Enter name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm">Mobile Number *</label>
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="Enter mobile number"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="Enter email"
            />
          </div>
          <div className="flex">
            <input
              type="number"
              name="openingBalance"
              value={form.openingBalance}
              onChange={handleChange}
              className="border rounded-l p-2 w-full"
              placeholder="₹ 0"
            />
            <select
              name="balanceType"
              value={form.balanceType}
              onChange={handleChange}
              className="border rounded-r p-2 bg-gray-50"
            >
              <option>To Collect</option>
              <option>To Pay</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="text-sm">GSTIN</label>
            <input
              name="gstin"
              value={form.gstin}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="ex: 29XXXXX9438X1XX"
            />
          </div>
          <div className="flex items-end">
            <button className="bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded h-[42px]">
              Get Details
            </button>
          </div>
          <div>
            <label className="text-sm">PAN Number</label>
            <input
              name="pan"
              value={form.pan}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="Enter party PAN Number"
            />
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-4">
          Note: You can auto populate party details from GSTIN
        </p>

        {/* Party Type & Category */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm">Party Type *</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            >
              <option>Customer</option>
              <option>Supplier</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Party Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            >
              <option value="">Select Category</option>
              <option>Retailer</option>
              <option>Wholesaler</option>
            </select>
          </div>
        </div>

        {/* Address Section */}
        <h3 className="font-medium text-lg mb-2">Address</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm">Billing Address</label>
            <textarea
              name="billingAddress"
              value={form.billingAddress}
              onChange={handleChange}
              placeholder="Enter billing address"
              className="border rounded p-2 w-full h-24"
            />
          </div>
          <div>
            <label className="text-sm flex justify-between items-center">
              <span>Shipping Address</span>
              <span className="flex items-center">
                <input
                  type="checkbox"
                  name="sameAsBilling"
                  checked={form.sameAsBilling}
                  onChange={handleChange}
                  className="mr-1"
                />
                <span className="text-sm text-gray-600">Same as Billing address</span>
              </span>
            </label>
            <textarea
              name="shippingAddress"
              value={form.shippingAddress}
              onChange={handleChange}
              placeholder="Enter shipping address"
              className={`border rounded p-2 w-full h-24 ${
                form.sameAsBilling ? "bg-gray-100" : ""
              }`}
              disabled={form.sameAsBilling}
            />
          </div>
        </div>

        {/* Credit Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <label className="text-sm">Credit Period</label>
              <input
                type="number"
                name="creditPeriod"
                value={form.creditPeriod}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                placeholder="30"
              />
            </div>
            <span className="mb-2 text-sm">Days</span>
          </div>
          <div>
            <label className="text-sm">Credit Limit</label>
            <input
              type="number"
              name="creditLimit"
              value={form.creditLimit}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="₹ 0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
