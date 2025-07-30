export default function PartyTable({ parties }) {
  if (parties.length === 0) return <p>No parties added yet.</p>;

  return (
    <table className="w-full border text-left">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Party Name</th>
          <th className="p-2">Mobile</th>
          <th className="p-2">GST</th>
          <th className="p-2">City</th>
          <th className="p-2">State</th>
        </tr>
      </thead>
      <tbody>
        {parties.map((p, i) => (
          <tr key={i}>
            <td className="border p-2">{p.name}</td>
            <td className="border p-2">{p.mobile}</td>
            <td className="border p-2">{p.gst}</td>
            <td className="border p-2">{p.city}</td>
            <td className="border p-2">{p.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

