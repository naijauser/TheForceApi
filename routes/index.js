const express = require('express');
const router = express.Router();
const characterRoute = require('./characters');
const commentRoute = require('./comments');
const movieRoute = require('./movies');

router.get('/', (req, res) => {
  res.status(200).send(
    '<h3>Hi, thanks for stopping by, you can find all the info about this api \
      <a href="https://github.com/naijauser/TheForceApi">here</a>, cheers!</h3>');
});
router.use('/characters', characterRoute);
router.use('/comments', commentRoute);
router.use('/movies', movieRoute);

module.exports = router;