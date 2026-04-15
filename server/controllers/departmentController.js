import Department from '../models/Department.js'

const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find()
        return res.status(200).json({success: true, departments})
    } 
    catch(error) {
        return res.status(500).json({success: false, error: "get department server error"})
    }
}

const addDepartment = async (req, res) => {
    try {
        const { dep_name, description } = req.body;
        const newDep = new Department(
            {
                dep_name,
                description
            }
        )
        await newDep.save()
        return res.status(200).json({ success: true, department: newDep })

    } catch (error) {
        return res.status(500).json({ success: false, error: "Add department server error" })

    }
}

const getDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id)
        if (!department) {
            return res.status(404).json({ success: false, error: "Department not found" })
        }
        return res.status(200).json({ success: true, department })
    } catch (error) {
        return res.status(500).json({ success: false, error: "Get department server error" })
    }
}

const updateDepartment = async (req, res) => {
    try {
        const { dep_name, description } = req.body
        const department = await Department.findByIdAndUpdate(
            req.params.id,
            { dep_name, description },
            { new: true }
        )
        if (!department) {
            return res.status(404).json({ success: false, error: "Department not found" })
        }
        return res.status(200).json({ success: true, department })
    } catch (error) {
        return res.status(500).json({ success: false, error: "Update department server error" })
    }
}

const deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(req.params.id)
        if (!department) {
            return res.status(404).json({ success: false, error: "Department not found" })
        }
        return res.status(200).json({ success: true, department })
    } catch (error) {
        return res.status(500).json({ success: false, error: "Delete department server error" })
    }
}

export { addDepartment, getDepartments, getDepartment, updateDepartment, deleteDepartment }