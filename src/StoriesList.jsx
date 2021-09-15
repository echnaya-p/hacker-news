import React, { useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import Story from './Story';
import generateUniqueKey from './utils/unicKey';

function StoriesList(props) {
  const {
    storiesIds,
    storiesById,
    onGetStories,
    isLoadingStories,
    isFetchStoriesSuccess,
  } = props;

  useEffect(() => {
    onGetStories();
    const timerId = setInterval(() => {
      onGetStories();
    }, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const renderList = () =>
    storiesIds.map((id) => (
      <Col xs={24} sm={12} key={id}>
        <Link to={`/${id}`}>
          <Story id={id} storiesById={storiesById} />
        </Link>
      </Col>
    ));

  const renderSkeleton = () => {
    const skeletonList = [];

    for (let i = 0; i < 10; i += 1) {
      skeletonList.push(<Skeleton />);
    }

    return skeletonList.map((item) => (
      <Col xs={24} sm={12} key={generateUniqueKey()}>
        {item}
      </Col>
    ));
  };

  return (
    <Row>
      {isLoadingStories && renderSkeleton()}
      {isFetchStoriesSuccess && renderList()}
    </Row>
  );
}

export default StoriesList;
