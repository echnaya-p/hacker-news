import React, {useEffect} from 'react';
import './App.css';
import StoriesList from "./StoriesList";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "./slice/storiesSlice";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import StoryInfo from './StoryInfo/StoryInfo';
import {fetchComment, updateComments} from "./slice/commentsSlice";

function App() {
  const storiesIds = useSelector((state) => state.stories.ids);
  const storiesById = useSelector((state) => state.stories.storiesById);
  const commentsIds = useSelector((state) => state.comments.ids);
  const commentById = useSelector((state) => state.comments.commentById);
  const dispatch = useDispatch();

  const handleGetStories = () => dispatch(fetchStories());
  const handleUpdateComments = (comments) => dispatch(updateComments(comments));
  const handleGetComment = (id) => dispatch(fetchComment(id));

  const refresh = () => {
    handleGetStories();
  };

  return (
    <div className="App">
      <h1>
        Hackers news
      </h1>
      <Router>
      <Switch>
        <Route exact path='/'>
          <button onClick={refresh}>Обновить</button>
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
            commentById={commentById}
            onUpdateComments={handleUpdateComments}
            onGetComment={handleGetComment}
          />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
