import React, {useEffect} from 'react';

import Story from "./Story";
import axios from "axios";

function StoriesList(props) {
  const { ids, storiesById, onUpdateListOfStories, onAddNewStory } = props;

  useEffect(() => {
    const timerId = setInterval( () => {
      axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`)
      .then(function (response) {
        // handle success
        onUpdateListOfStories(response.data.filter((id, index) => index < 100));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const renderList = () => {
    const copyIds = [...ids];

    return copyIds.map((id) => (
      <Story
        key={id}
        id={id}
        storiesById={storiesById}
        onAddNewStory={onAddNewStory}
      />
      )
    )
  };

  return (
    <div>
      {renderList()}
    </div>
  );
}

export default StoriesList;