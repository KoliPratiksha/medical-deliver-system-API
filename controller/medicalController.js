const Medical = require('../modeles/medical')

// getmedical
exports.getmedical = async (req, res) => {
    try {
        const data = await Medical.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// postmedical
exports.postmedical = async (req, res) => {
    try {
        const data = await Medical.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// putmedical
exports.putmedical = async (req, res) => {
    try {
        const data = await Medical.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// deletemedical
exports.deletemedical = async (req, res) => {
    try {
        const data = await Medical.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}