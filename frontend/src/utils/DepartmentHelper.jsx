import React from 'react'  // ← add this
// utils/DepartmentHelper.jsx

export const DepartmentButtons = ({ id }) => {
    return (
        <div className="flex gap-2">
            <button className="px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
            <button className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
        </div>
    )
}

// columns defined AFTER DepartmentButtons
export const columns = [
    {
        name: "S No.",
        selector: (row) => row.sno
    },
    {
        name: "Department Name",
        selector: (row) => row.dep_name
    },
    {
        name: "Action",
        selector: (row) => row.actions
    },
]