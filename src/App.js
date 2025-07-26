import React, { useState } from 'react';
import PartyList from './components/PartyList';
import Header from './components/Header';
import PartyStats from './components/PartyStats';
import BulkUploadBanner from './components/BulkUploadBanner';
import CreatePartyModal from './components/CreatePartyModal';

function App() {
  const [parties, setParties] = useState([
    { name: 'Cash Sale', category: '-', mobile: '6380590369', type: 'Customer', balance: 0, balanceType: 'To Collect' },
  ]);

  const [showModal, setShowModal] = useState(false);

  const addParty = (newParty) => {
    setParties([...parties, newParty]);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <div className="bg-white p-6 rounded-lg shadow">
        <PartyStats parties={parties} />

        {/* Create Party Button */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            onClick={() => setShowModal(true)}
          >
            + Create Party
          </button>
        </div>

        {/* Party Table */}
        <PartyList parties={parties} />

        {/* Modal Form */}
        {showModal && (
          <CreatePartyModal
            onClose={() => setShowModal(false)}
            onAddParty={addParty}
          />
        )}
        

        {/* Banner */}
        <BulkUploadBanner />
      </div>
    </div>
  );
}

export default App;
