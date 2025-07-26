export default function PartyList({ parties }) {
  return (
    <table className="w-full border text-left mb-4">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2 font-semibold">Party Name</th>
          <th className="p-2 font-semibold">Category</th>
          <th className="p-2 font-semibold">Mobile Number</th>
          <th className="p-2 font-semibold">Party Type</th>
          <th className="p-2 font-semibold">Balance</th>
        </tr>
      </thead>
      <tbody>
        {parties.map((p, idx) => (
          <tr key={idx} className="border-b">
            <td className="p-2">{p.name}</td>
            <td className="p-2">{p.category || '-'}</td>
            <td className="p-2">{p.mobile}</td>
            <td className="p-2">{p.type}</td>
            <td className="p-2">
              ₹ {p.balance}{" "}
              <span
                className={`ml-2 font-medium ${
                  p.balanceType === "To Collect"
                    ? "text-green-600"
                    : p.balanceType === "To Pay"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {p.balanceType}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
