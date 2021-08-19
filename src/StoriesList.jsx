import React, {useEffect} from 'react';

import Story from "./Story";
import {Link,} from "react-router-dom";

function StoriesList(props) {
  const { storiesIds, storiesById, onGetStories } = props;

  useEffect(() => {
    onGetStories();
    const timerId = setInterval( () => {
      onGetStories();
    }, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const renderList = () => {
    return storiesIds.map((id) => (
      <Link to={`/${id}`} key={id}>
        <Story
          id={id}
          storiesById={storiesById}
        />
      </Link>
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