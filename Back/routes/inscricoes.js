const express = require('express');
const router = express.Router();
const inscricaoController = require('../controllers/inscricaoController.js');

router.get('/', inscricaoController.getAllInscricoes);
router.post('/', inscricaoController.addInscricao);
router.put('/', inscricaoController.updateInscricao);
router.delete('/', inscricaoController.deleteInscricao);

module.exports = router;
