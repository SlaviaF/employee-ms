import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditDepartment = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [department, setDepartment] = useState([])
  const [depLoading, setDepLoading] = useState(false)

  useEffect(() => {
    const fetchDepartment = async () => {
      setDepLoading(true)
      try {
        const response = await axios.get(`http://localhost:3000/api/department/${id}`, {
          headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        })
        if (response.data.success) {
          setDepartment(response.data.department)
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error)
        }
      } finally {
        setDepLoading(false)
      }
    }
    fetchDepartment()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setDepartment({ ...department, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:3000/api/department/${id}`, department, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
      })
      if (response.data.success) {
        navigate("/admin-dashboard/departments")
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error)
      }
    }
  }

  return (
    <>{depLoading ? <>Loading ...</> : <div className="flex justify-center bg-gray-100 mt-10">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Edit Department</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="dep_name" className="block text-sm font-medium text-gray-700">
              Department Name
            </label>
            <input
              type="text"
              id="dep_name"
              name="dep_name"
              value={department.dep_name}
              onChange={handleChange}
              placeholder="Enter Dep Name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={department.description}
              rows="4"
              onChange={handleChange}
              placeholder="Description"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
          >
            Edit Department
          </button>
        </form>
      </div>
    </div>}</>

  )
}

export default EditDepartment
