const express = require('express');
const rulesscontroller = require('../../controllers/rulescontroller');

const router = express.Router();

router.get('/', rulesscontroller.get_rules);

module.exports = router;