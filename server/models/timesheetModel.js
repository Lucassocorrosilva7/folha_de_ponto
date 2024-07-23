const mongoose = require('mongoose');

const TimesheetSchema = new mongoose.Schema({
    day: { type: String, required: true },
    date: { type: Date, required: false },
    entryTime: { type: String, required: false },
    exitTime: { type: String, required: false },
    hoursWorked: { type: Number, required: false, default: 0 }
});

module.exports = mongoose.model('Timesheet', TimesheetSchema);
