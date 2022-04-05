const express = require('express');
 const {
   createTopic,
   getTopics,
   decrementVote,
   incrementVote,
 } = require('./controllers/topicController');

const router = express.Router();

//Endpoints chaining
// router.route('/').get(getTopics );
router.post('/topic', createTopic);
router.get('/alltopics', getTopics);
router.put('/topic/decrement/:id', decrementVote);
router.put('/topic/increment/:id', incrementVote);


module.exports = router;
