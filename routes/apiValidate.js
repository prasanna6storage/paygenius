const express = require("express");
const router = express.Router();

const { validateGetApi } = require('../controller/apiValidateController');

router.get('/validate/api',validateGetApi);

module.exports = router;