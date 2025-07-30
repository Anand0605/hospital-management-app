const Record = require('../models/Record');

exports.createRecord = async (req, res) => {
  try {
    const { patientId, diagnosis, treatment } = req.body;
    const doctorId = req.user.userId;

    const record = await Record.create({ patient: patientId, doctor: doctorId, diagnosis, treatment });
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getMyRecords = async (req, res) => {
  try {
    const records = await Record.find({ patient: req.user.userId }).populate('doctor', 'name email');
    res.json(records);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getPatientRecords = async (req, res) => {
  try {
    const { patientId } = req.params;
    const records = await Record.find({ patient: patientId }).populate('doctor', 'name email');
    res.json(records);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
