import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Favorites from './Favorites';
import Form from './Form';
import Selector from './Selector';
import Topics from './Topics';
import moment from 'moment';

const Container = () => {
  const [data, setData] = useState([]);

  const [favorites, setFavorites] = useState([]);

  async function fetchData() {
    let result = await axios.get('http://localhost:5200/alltopics');
    result = result.data.map((data) => {
      data.published_at = moment(data.published_at).format('Do MMMM').split(' ').join(', ') + '.';

      return data;
    });
    setData(result);
  }

  useEffect(() => {
    fetchData();
    //
    console.log('rendered');
  }, []);

  return (
    <>
      <div className="header">
        <Selector />
        <Form setData={setData} />
      </div>
      {favorites.length > 0 && <Favorites favorites={favorites} setFavorites={setFavorites} />}

      <Topics setData={setData} data={data} setFavorites={setFavorites} />
    </>
  );
};

export default Container;
