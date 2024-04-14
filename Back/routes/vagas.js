const express = require('express');
const router = express.Router();
const vagaController = require('../controllers/vagaController.js');

router.get('/', vagaController.getAllVagas);
router.post('/', vagaController.addVaga);
router.put('/', vagaController.updateVaga);
router.delete('/', vagaController.deleteVaga);

module.exports = router;
