import React, { useState } from "react";
import * as XLSX from "xlsx";

export default function UploadExcelModal({ onClose, onUpload }) {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const parsedData = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const trimmed = parsedData.slice(3); // skip headers

      const parties = trimmed
        .filter(row => row[0]) // skip empty rows
        .map(row => ({
          name: row[0],
          mobile: row[1],
          gst: row[2],
          address: row[3],
          pincode: row[4],
          city: row[5],
          state: row[6],
        }));

      setData(parties);
    };

    reader.readAsBinaryString(file);
  };

  const handleUpload = () => {
    onUpload(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-3/4 p-6 max-h-[80vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4">Bulk Upload Parties</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="mb-4" />

        {data.length > 0 && (
          <table className="w-full text-sm border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Party Name</th>
                <th className="p-2">Mobile</th>
                <th className="p-2">GST</th>
                <th className="p-2">Address</th>
                <th className="p-2">Pincode</th>
                <th className="p-2">City</th>
                <th className="p-2">State</th>
              </tr>
            </thead>
            <tbody>
              {data.map((party, idx) => (
                <tr key={idx}>
                  <td className="border p-2">{party.name}</td>
                  <td className="border p-2">{party.mobile}</td>
                  <td className="border p-2">{party.gst}</td>
                  <td className="border p-2">{party.address}</td>
                  <td className="border p-2">{party.pincode}</td>
                  <td className="border p-2">{party.city}</td>
                  <td className="border p-2">{party.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleUpload} className="px-4 py-2 bg-indigo-600 text-white rounded">Add Parties</button>
        </div>
      </div>
    </div>
  );
}

