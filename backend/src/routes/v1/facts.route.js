const express = require('express');
const factscontroller = require('../../controllers/factscontroller');

const router = express.Router();

router.get('/', factscontroller.facts);

module.exports = router;