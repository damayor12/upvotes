const express = require('express');
 const {
   createTopic,
   getTopics,
   decrementVote,
   incrementVote,
   deleteDoc
 } = require('./controllers/topicController');

const router = express.Router();

//Endpoints chaining
// router.route('/').get(getTopics );
router.post('/topic', createTopic);
router.get('/alltopics', getTopics);
router.put('/topic/decrement/:id', decrementVote);
router.put('/topic/increment/:id', incrementVote);
router.delete('/topics/:id', deleteDoc);


module.exports = router;
