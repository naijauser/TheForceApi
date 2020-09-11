const express = require('express');
const router = express.Router();
const characterRoute = require('./characters');
const commentRoute = require('./comments');
const movieRoute = require('./movies');

router.use('/characters', characterRoute);
router.use('/comments', commentRoute);
router.use('/movies', movieRoute);

module.exports = router;