import React, { useState } from "react";
import Header from "./components/Header";
import PartyStats from "./components/PartyStats";
import PartyList from "./components/PartyList"; // Or PartyTable if that's your new table component
import CreatePartyModal from "./components/CreatePartyModal";
import UploadExcelModal from "./components/UploadExcelModal";
import BulkUploadBanner from "./components/BulkUploadBanner";

export default function App() {
  const [parties, setParties] = useState([
    {
      name: "Cash Sale",
      category: "-",
      mobile: "6380590369",
      type: "Customer",
      balance: 0,
      balanceType: "To Collect",
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const addParty = (newParty) => {
    setParties([...parties, newParty]);
    setShowCreateModal(false);
  };

  const handleExcelUpload = (uploaded) => {
    setParties([...parties, ...uploaded]);
    setShowUploadModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />

      <div className="bg-white p-6 rounded-lg shadow">
        <PartyStats parties={parties} />

        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            onClick={() => setShowCreateModal(true)}
          >
            + Create Party
          </button>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => setShowUploadModal(true)}
          >
            Upload Excel
          </button>
        </div>

        {/* Party Table */}
        <PartyList parties={parties} /> {/* Or PartyTable if renamed */}

        {/* Modals */}
        {showCreateModal && (
          <CreatePartyModal
            onClose={() => setShowCreateModal(false)}
            onAddParty={addParty}
          />
        )}

        {showUploadModal && (
          <UploadExcelModal
            onClose={() => setShowUploadModal(false)}
            onUpload={handleExcelUpload}
          />
        )}

        {/* Bulk Upload Banner */}
        <BulkUploadBanner />
      </div>
    </div>
  );
}
