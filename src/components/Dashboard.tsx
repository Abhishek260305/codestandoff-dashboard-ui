'use client';

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Dashboard</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-gray-700">Your Stats</h3>
            <p className="text-gray-600">Total Problems Solved: 0</p>
            <p className="text-gray-600">Current Rank: #--</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-gray-700">Recent Activity</h3>
            <p className="text-gray-600">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

