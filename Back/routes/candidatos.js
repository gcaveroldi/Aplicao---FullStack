const { Router } = require('express');
const router = Router();
const candidatoController = require('../controllers/candidatoController');

router.get('/', candidatoController.getAllCandidatos);
router.post('/', candidatoController.addCandidato);
router.put('/', candidatoController.updateCandidato);
router.delete('/', candidatoController.deleteCandidato);

module.exports = router;
