import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './form.css';
import { formatDate, formatt } from '../utils/formatter';

const Form = ({ setData }) => {
  const [topic, setTopic] = useState('');

  const handleFormSubmit = async (e) => {
    if (topic === '') alert('please fill!');

    e.preventDefault();

    const JsonObj = {
      score: 0,
      title: topic,
      published_at: new Date().toISOString(),
    };

    const res = await axios.post('http://localhost:5200/topic', JSON.stringify(JsonObj), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      res.data.published_at =
        moment(res.data.published_at).format('Do MMMM').split(' ').join(', ') + '.';
    
      setData((data) => formatt([...data, res.data]));

    } 
    setTopic('');
  };

  return (
    <form action="" className="form" onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type="text"
        placeholder="Add topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button type="submit">Button</button>
    </form>
  );
};

export default Form;
