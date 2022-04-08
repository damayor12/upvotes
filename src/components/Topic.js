import React from 'react';
import './topic.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import { formatt} from '../utils/formatter';

const Topic = ({ topic_data, setFavorites, setData }) => {
  const AddtoFavorites = () => {
 
    setFavorites((data) => [...data, topic_data]);

  };



  const RemoveFromList = async () => {



    const response = await axios.delete(`http://localhost:5200/topics/${topic_data._id}`);

    if (response.status === 200)
      setData((prev_data) => formatt(prev_data.filter((prev) => prev._id !== topic_data._id)));
  };

  const decrementVote = async () => {
    const decreRes = await axios.put(
      `http://localhost:5200/topic/decrement/${topic_data._id}`,
      topic_data,
    );

      if (decreRes.status === 200) {
        setData((prev_data) =>
          formatt(
            prev_data.map((pre) => {
              if (pre._id === decreRes.data._id) {
              
                pre.score = decreRes.data.score;
                return pre;
              } else {
                return pre;
              }
            }),
          ),
        );
      }
  };

  const incrementVote = async () => {
    const increRes = await axios.put(
      `http://localhost:5200/topic/increment/${topic_data._id}`,
      topic_data,
    );

    if (increRes.status === 200) {
      setData((prev_data) =>
        formatt(
          prev_data.map((pre) => {
            if (pre._id === increRes.data._id) {
              pre.score = increRes.data.score;
              return pre;
            } else {
              return pre;
            }
          }),
        ),
      );
    }
  };

  return (
    <div className="topic">
      <div className="upvote">
        <div className="up-triangle" onClick={incrementVote}></div>
        <div className="vote" style={{ color: topic_data.score < 0 && 'red' }}>
          {topic_data.score}
        </div>
        <div className="down-triangle" onClick={decrementVote}></div>
      </div>
      <div className="card-text">
        <h2>{topic_data.title}</h2>
        <p>
          CREATED ON <span>{topic_data.published_at}</span>
        </p>
      </div>
      <div className="icons">
        <FontAwesomeIcon className="add-fav" icon={faCheck} onClick={() => AddtoFavorites()} />
        <FontAwesomeIcon className="remove-topic" icon={faTrash} onClick={() => RemoveFromList()} />
      </div>
    </div>
  );
};

export default Topic;
