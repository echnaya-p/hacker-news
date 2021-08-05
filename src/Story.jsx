import React, { useEffect } from 'react';
import axios from 'axios';

function Story(props) {

  const { id, storiesById, onAddNewStory } = props;

  useEffect(() => {
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(function (response) {
          // handle success
          const {title, by, time, score} = response.data;
          onAddNewStory({id, title, by, time, score});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
  }, []);

  return (
    <div>
        <h2>
          <a>
            {storiesById?.[id]?.title}
          </a>
        </h2>
        <ul>
          <li>Автор: {storiesById?.[id]?.by}</li>
          <li>Дата: {storiesById?.[id]?.time}</li>
          <li>Рейтинг: {storiesById?.[id]?.score}</li>
        </ul>
    </div>
  );
}

export default Story;
