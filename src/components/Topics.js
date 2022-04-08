import React, { useState } from 'react';
import axios from 'axios';
import Topic from './Topic';


const Topics = ({ data, setFavorites, setData }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {data.map((each_topic, ind) => (
        <Topic topic_data={each_topic} setFavorites={setFavorites} key={ind} setData={setData} />
      ))}
    </div>
  );
};

export default Topics;
