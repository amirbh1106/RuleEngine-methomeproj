const express = require('express');
const factscontroller = require('../../controllers/factscontroller');

const router = express.Router();

router.get('/', factscontroller.get_facts);

module.exports = router;