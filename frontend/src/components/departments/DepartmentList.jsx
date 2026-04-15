import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { columns, DepartmentButtons } from '../../utils/DepartmentHelper'  // ← only import columns here
import axios from 'axios'
import DTModule from 'react-data-table-component'
const DataTable = DTModule.default

const DepartmentList = () => {
    const [departments, setDepartments] = useState([])
    const [depLoading, setDepLoading] = useState(false)

    const fetchDepartments = async () => {
        setDepLoading(true)
        try {
            const response = await axios.get('http://localhost:3000/api/department', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (response.data.success) {
                let sno = 1
                const data = response.data.departments.map((dep) => ({
                    _id: dep._id,
                    sno: sno++,
                    dep_name: dep.dep_name,
                    actions: (<DepartmentButtons _id={dep._id} onDeleteClick={handleDelete}/>)
                }))
                setDepartments(data)
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        } finally {
            setDepLoading(false)
        }
    }

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this department?')) return
        try {
            const response = await axios.delete(`http://localhost:3000/api/department/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (response.data.success) {
                fetchDepartments()
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        }
    }

    useEffect(() => {
        fetchDepartments()
    }, [])

    return (
        <>
            {depLoading ? <div>Loading...</div> : (
                <div>
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold'>Manage Departments</h3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <input type="text" placeholder='Search by Dep name' className="px-4 py-0.5" />
                        <Link to="/admin-dashboard/add-department" className='px-4 py-1 bg-blue-900 rounded text-white'>
                            Add New Department
                        </Link>
                    </div>
                    <div>
                        <DataTable columns={columns} data={departments} />
                    </div>
                </div>
            )}
        </>
    )
}

export default DepartmentList
// ↑ Nothing else after this — no DepartmentButtons or columns here