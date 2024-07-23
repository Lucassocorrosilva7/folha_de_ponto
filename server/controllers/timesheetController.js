const Timesheet = require('../models/timesheetModel');

// Get all records
exports.getAllRecords = async (req, res) => {
    try {
        const records = await Timesheet.find();
        res.status(200).json({ data: records });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new record
exports.createRecord = async (req, res) => {
    try {
        const newRecord = new Timesheet(req.body);
        await newRecord.save();
        res.status(201).json(newRecord);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a record
exports.updateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRecord = await Timesheet.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json(updatedRecord);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a record
exports.deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecord = await Timesheet.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
