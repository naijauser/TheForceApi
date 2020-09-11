const express = require('express');
const router = express.Router();
const characterRoute = require('./characters');
const commentRoute = require('./comments');
const movieRoute = require('./movies');

router.use('/character', characterRoute);
router.use('/comment', commentRoute);
router.use('/movie', movieRoute);

module.exports = router;