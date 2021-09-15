import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { ReloadOutlined } from '@ant-design/icons';
import { Typography, Button, Layout, Row, Col } from 'antd';
import StoriesList from './StoriesList';
import { fetchStories } from './slice/storiesSlice';
import StoryInfo from './StoryInfo/StoryInfo';
import { fetchComments, fetchKidsComments } from './slice/commentsSlice';
import './app.css';

const { Title } = Typography;
const { Header, Content } = Layout;

function App() {
  const storiesIds = useSelector((state) => state.stories.ids);
  const storiesById = useSelector((state) => state.stories.storiesById);
  const commentsIds = useSelector((state) => state.comments.ids);
  const commentsById = useSelector((state) => state.comments.commentsById);
  const isLoadingStories = useSelector(
    (state) => state.stories.request.isLoading,
  );
  const isLoadingComments = useSelector(
    (state) => state.comments.request.isLoading,
  );
  const isLoadingKid = useSelector(
    (state) => state.comments.request.isLoadingKid,
  );
  const isFetchStoriesSuccess = useSelector(
    (state) => state.stories.request.isFetchSuccess,
  );
  const isFetchCommentsSuccess = useSelector(
    (state) => state.comments.request.isFetchSuccess,
  );
  const isFetchKidsSuccess = useSelector(
    (state) => state.comments.request.isFetchKidsSuccess,
  );
  const dispatch = useDispatch();

  const handleGetStories = () => dispatch(fetchStories());
  const handleGetComments = (ids) => dispatch(fetchComments(ids));
  const handleGetKidsComments = (ids) => dispatch(fetchKidsComments(ids));

  return (
    <Layout>
      <Header className="Header">Hackers news</Header>
      <Content className="Content">
        <Router>
          <Switch>
            <Route exact path="/">
              <Row>
                <Col>
                  <Title>Последние новости</Title>
                </Col>
                <Col className="Button-refresh">
                  <Button onClick={handleGetStories}>
                    <ReloadOutlined />
                  </Button>
                </Col>
              </Row>
              <StoriesList
                storiesIds={storiesIds}
                storiesById={storiesById}
                onGetStories={handleGetStories}
                isLoadingStories={isLoadingStories}
                isFetchStoriesSuccess={isFetchStoriesSuccess}
              />
            </Route>
            <Route path="/:id">
              <StoryInfo
                storiesById={storiesById}
                commentsIds={commentsIds}
                commentsById={commentsById}
                onGetComments={handleGetComments}
                onGetKidsComments={handleGetKidsComments}
                isLoadingComments={isLoadingComments}
                isFetchCommentsSuccess={isFetchCommentsSuccess}
                isLoadingKid={isLoadingKid}
                isFetchKidsSuccess={isFetchKidsSuccess}
              />
            </Route>
          </Switch>
        </Router>
      </Content>
    </Layout>
  );
}

export default App;
