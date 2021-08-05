import React, {useEffect} from 'react';
import './App.css';
import StoriesList from "./StoriesList";
import {useDispatch, useSelector} from "react-redux";
import { updateListOfStories, addNewStory } from "./slice/storiesSlice";
import axios from "axios";

function App() {

  const ids = useSelector((state) => state.stories.ids);
  const storiesById = useSelector((state) => state.stories.storiesById);
  const dispatch = useDispatch();

  const handleUpdateListOfStories = (stories) => dispatch(updateListOfStories(stories));
  const handleAddNewStory = (story) => dispatch(addNewStory(story));

  const refresh = () => {
    axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`)
      .then(function (response) {
        // handle success
        handleUpdateListOfStories(response.data.filter((id, index) => index < 100));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      })
  };

  return (
    <div className="App">
      <h1>
        Hackers news
      </h1>
      <button onClick={refresh}>Обновить</button>
      <StoriesList
        ids={ids}
        storiesById={storiesById}
        onUpdateListOfStories={handleUpdateListOfStories}
        onAddNewStory={handleAddNewStory}
      />
    </div>
  );
}

export default App;
