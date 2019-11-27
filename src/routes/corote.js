const express = require('express');

const router = express.Router();

const CoroteController = require('./../controllers/corote');

router.get('/corote', CoroteController.get);
router.get('/corote/:id', CoroteController.getByID);
router.post('/corote', CoroteController.create);
router.put('/corote/:id', CoroteController.update);
router.delete('/corote/:id', CoroteController.delete);

module.exports = router;