import React, {useEffect} from 'react';
import './App.css';
import StoriesList from "./StoriesList";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "./slice/storiesSlice";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import StoryInfo from './pages/StoryInfo';

function App() {
  const ids = useSelector((state) => state.stories.ids);
  const storiesById = useSelector((state) => state.stories.storiesById);
  const dispatch = useDispatch();

  const handleGetStories = () => dispatch(fetchStories());

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
            ids={ids}
            storiesById={storiesById}
            onGetStories={handleGetStories}
          />
        </Route>
        <Route path='/:id'>
          <StoryInfo storiesById={storiesById} />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
