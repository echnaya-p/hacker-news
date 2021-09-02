import React from 'react';
import './App.css';
import StoriesList from "./StoriesList";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "./slice/storiesSlice";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import StoryInfo from './StoryInfo/StoryInfo';
import { fetchComments, fetchKidsComments } from "./slice/commentsSlice";

function App() {
  const storiesIds = useSelector((state) => state.stories.ids);
  const storiesById = useSelector((state) => state.stories.storiesById);
  const commentsIds = useSelector((state) => state.comments.ids);
  const commentsById = useSelector((state) => state.comments.commentsById);
  const dispatch = useDispatch();

  const handleGetStories = () => dispatch(fetchStories());
  const handleGetComments = (ids) => dispatch(fetchComments(ids));
  const handleGetKidsComments = (ids) => dispatch(fetchKidsComments(ids));


  return (
    <div className="App">
      <h1>
        Hackers news
      </h1>
      <Router>
      <Switch>
        <Route exact path='/'>
          <button onClick={handleGetStories}>Обновить</button>
          <StoriesList
            storiesIds={storiesIds}
            storiesById={storiesById}
            onGetStories={handleGetStories}
          />
        </Route>
        <Route path='/:id'>
          <StoryInfo
            storiesById={storiesById}
            commentsIds={commentsIds}
            commentsById={commentsById}
            onGetComments={handleGetComments}
            onGetKidsComments={handleGetKidsComments}
          />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
