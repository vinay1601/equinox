import React from 'react'

const Chartbox = () => {
    return (
        <div className='px-0 md:px-5'>

            <div className="flex space-x-4 text-sm">
                {["Sites", "Orders", "VRs", "Reports", "Invoices", "PI"].map(
                    (tab, i) => (
                        <button
                            key={i}
                            className={
                                tab === "Sites"
                                    ? "border-b-4 border-blue-600 font-bold text-black pb-2"
                                    : "pb-2 text-gray-600 font-semibold"
                            }
                        >
                            {tab}
                        </button>
                    )
                )}
            </div>


            <div className="overflow-x-auto border rounded shadow-sm mt-5">
                <table className="w-full text-sm text-left">
                    <thead className="bg-white text-gray-700 font-medium">
                        <tr>
                            <th className="px-4 py-3">Site Name</th>
                            <th className="px-4 py-3">State</th>
                            <th className="px-4 py-3">City</th>
                            <th className="px-4 py-3">Revenue</th>
                            <th className="px-4 py-3">Total Orders</th>
                            <th className="px-4 py-3">Last Order</th>
                            <th className="px-4 py-3">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(8)].map((_, i) => (
                            <tr
                                key={i}
                                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} border-t`}
                            >
                                <td className="px-4 py-2 text-transparent">–</td>
                                <td className="px-4 py-2 text-transparent">–</td>
                                <td className="px-4 py-2 text-transparent">–</td>
                                <td className="px-4 py-2 text-transparent">–</td>
                                <td className="px-4 py-2 text-transparent">–</td>
                                <td className="px-4 py-2 text-transparent">–</td>
                                <td className="px-4 py-2 text-transparent">–</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Chartbox
