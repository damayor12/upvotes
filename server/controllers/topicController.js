const Title = require('../models/topic_models');

const createTopic = async (req, res) => {
  try {
    const newDoc = await Title.create(req.body);
    res.status(200).json(newDoc);
  } catch (err) {
    console.log(err.message);
    res.status(404);
  }
};

const getTopics = async (req, res) => {
  try {
    const newDocs = await Title.find({});
    res.status(200).json(newDocs);
  } catch (err) {
    console.log(err.message);
    res.status(404);
  }
};

const incrementVote = async (req, res) => {
  try {
    const id = req.params.id;
    const { score } = req.body;
    const newDoc = await Title.findByIdAndUpdate({ _id: id }, { score: score + 1 }, { new: true });

    res.status(200).json(newDoc);
  } catch (err) {
    console.log(err.message);
    res.status(404);
  }
};

const decrementVote = async (req, res) => {
  try {
    const id = req.params.id;
    const { score } = req.body;
    const newDoc = await Title.findByIdAndUpdate({ _id: id }, { score: score - 1 }, { new: true });

    res.status(200).json(newDoc);
  } catch (err) {
    console.log(err.message);
    res.status(404);
  }
};

const deleteDoc = async (req, res) => {
  try {
    const id = req.params.id;

    
    const removedDoc = await Title.findByIdAndRemove({ _id: id });

    res.status(200).json(removedDoc);
  } catch (err) {
    console.log(err.message);
    res.status(404);
  }
};

module.exports = { createTopic, getTopics, decrementVote, incrementVote, deleteDoc };
