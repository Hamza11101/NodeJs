const express = require('express');
const router = express.Router();
// const User = require('../models/FirstModel')
const api = require('../controllers/Welcome.contoler')

router.get('/', api.welcome );


module.exports = router;