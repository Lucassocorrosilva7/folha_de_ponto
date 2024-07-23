const express = require('express');
const router = express.Router();
const timesheetController = require('../controllers/timesheetController');

router.get('/', timesheetController.getAllRecords);
router.post('/', timesheetController.createRecord);
router.put('/:id', timesheetController.updateRecord);
router.delete('/:id', timesheetController.deleteRecord);

module.exports = router;
