const express = require("express");
const router = express.Router();

const { validateGetApi, validatePostApi } = require('../controller/apiValidateController');

router.get('/validate/api', validateGetApi);
router.post('/validate/api', validatePostApi);

module.exports = router;